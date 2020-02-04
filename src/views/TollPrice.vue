<template>
  <div>
    <v-card>
        <v-card-title>
          <h5 class="text-xs-center">Open Toll Prices</h5>
          <v-layout row align-center justify-right>
            <v-spacer></v-spacer>
          </v-layout>
        </v-card-title>
        <v-card-text class="px-1 py-3 text-xs-center w-100" style="width:1180px">
          <div>
            <b-card class="main-card mb-4">
              <div class="d-flex flex-row justify-end"></div>
              <b-row>
                <b-col md="6" class="mb-2 text-left">
                  <b-form-group horizontal label="Search" class="mb-0">
                    <b-input-group>
                      <b-form-input
                        v-model="tableSettings.filter"
                        placeholder="Type to Search"
                      />
                      <b-input-group-append>
                        <b-btn
                          :disabled="!tableSettings.filter"
                          @click="tableSettings.filter = ''"
                        >Clear</b-btn>
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col md="6" class="mb-2">
                  <b-row>
                    <b-col md="6">
                      <b-form-group horizontal label="Rows" class="mb-0 text-left">
                        <b-input-group>
                          <b-form-select v-model="tableSettings.perPage" slot="append">
                            <option
                              :value="num"
                              :selected="i==0"
                              v-for="(num,i) in tableSettings.pageOptions"
                              :key="i"
                            >{{num}}</option>
                          </b-form-select>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                    <b-col md="6" class="pt-md-3">
                      <!-- <b-btn v-if="isAdmin" @click="openModal" class="btn btn-sm btn-secondary ml-md-3 mt-md-4">Add</b-btn> -->
                      <b-btn @click="openModal" class="btn btn-sm btn-secondary ml-md-3 mt-md-4">Add</b-btn>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>

              <b-table
                class="caption w-100 data-table"
                sticky-header
                head-variant="light"
                hover
                striped
                show-empty
                small
                responsive
                :items="openTolls"
                :fields="tableHeader"
                :filter="tableSettings.filter"
                :sort-by.sync="tableSettings.sortBy"
                :sort-desc.sync="tableSettings.sortDesc"
                :sort-direction="tableSettings.sortDirection"
                @filtered="onTableFiltered"
                :busy="isTableBusy"
              >
              <template v-slot:cell(sl)="row">
                {{row.index+1}}
              </template>
              <!-- <template v-slot:cell(diesel)="row">
                <div @click="showInfo(row.item)">
                  {{row.item.diesel}}
                </div>
              </template>
              <template v-slot:cell(euro5)="row">
                <div @click="showInfo(row.item)">
                  {{row.item.euro5}}
                </div>
              </template>
              <template v-slot:cell(petrol)="row">
                <div @click="showInfo(row.item)">
                  {{row.item.petrol}}
                </div>
              </template> -->
              <template v-slot:cell(actions)="row">
                <v-icon @click="showInfo(row.item)" size="20" class="mr-3">edit</v-icon>
                <v-icon @click="openDeleteWarnig(row.item)" size="20">delete</v-icon>
              </template>
              </b-table>
            </b-card>
          </div>
        </v-card-text>
      </v-card>

    <v-card>
        <v-card-title>
          <h5 class="text-xs-center">Open Toll Prices</h5>
          <v-layout row align-center justify-right>
            <v-spacer></v-spacer>
          </v-layout>
        </v-card-title>
        <v-card-text class="px-1 py-3 text-xs-center w-100" style="width:1180px">
          <div>
            <b-card class="main-card mb-4">
              <div class="d-flex flex-row justify-end"></div>
              <b-row>
                <b-col md="6" class="mb-2 text-left">
                  <b-form-group horizontal label="Search" class="mb-0">
                    <b-input-group>
                      <b-form-input
                        v-model="tableSettings.filter"
                        placeholder="Type to Search"
                      />
                      <b-input-group-append>
                        <b-btn
                          :disabled="!tableSettings.filter"
                          @click="tableSettings.filter = ''"
                        >Clear</b-btn>
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col md="6" class="mb-2">
                  <b-row>
                    <b-col md="6">
                      <b-form-group horizontal label="Rows" class="mb-0 text-left">
                        <b-input-group>
                          <b-form-select v-model="tableSettings.perPage" slot="append">
                            <option
                              :value="num"
                              :selected="i==0"
                              v-for="(num,i) in tableSettings.pageOptions"
                              :key="i"
                            >{{num}}</option>
                          </b-form-select>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                    <b-col md="6" class="pt-md-3">
                       <b-form-group horizontal label="Select a Toll" class="mb-0 text-left">
                        <b-input-group>
                          <b-form-select v-model="selectedGeofence" slot="append">
                            <option
                              :value="geo.id"
                              :selected="i==0"
                              v-for="(geo,i) in prices"
                              :key="i"
                            >{{geo.name}}</option>
                          </b-form-select>
                        </b-input-group>
                      </b-form-group>
                      <b-btn @click="saveClosedTollPrices" class="btn btn-sm btn-secondary ml-md-3 mt-md-4">Save</b-btn>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>

              <b-table
                class="caption w-100 data-table"
                sticky-header
                head-variant="light"
                hover
                striped
                show-empty
                small
                responsive
                :items="computedTolls"
                :fields="geoHeader"
                :filter="tableSettings.filter"
                :sort-by.sync="tableSettings.sortBy"
                :sort-desc.sync="tableSettings.sortDesc"
                :sort-direction="tableSettings.sortDirection"
                @filtered="onTableFiltered"
                :busy="isTableBusy"
              >
              <template v-slot:cell(sl)="row">
                {{row.index+1}}
              </template>
              <template v-slot:cell(destination)="row">
                {{row.item.destination}}
              </template>
              <template v-slot:cell(price)="row">
                <v-text-field solo v-model="row.item.price" >

                </v-text-field>
              </template>
              <!-- <template v-slot:cell(diesel)="row">
                <div @click="showInfo(row.item)">
                  {{row.item.diesel}}
                </div>
              </template>
              <template v-slot:cell(euro5)="row">
                <div @click="showInfo(row.item)">
                  {{row.item.euro5}}
                </div>
              </template>
              <template v-slot:cell(petrol)="row">
                <div @click="showInfo(row.item)">
                  {{row.item.petrol}}
                </div>
              </template> -->
              <!-- <template v-slot:cell(actions)="row">
                <v-icon @click="showInfo(row.item)" size="20" class="mr-3">edit</v-icon>
                <v-icon @click="openDeleteWarnig(row.item)" size="20">delete</v-icon>
              </template> -->
              </b-table>
            </b-card>
          </div>
        </v-card-text>
      </v-card>

    <v-dialog v-model="deleteWarning" width="400">
      <v-card>
        <v-card-text class="text-xs-center">
          <h4>Are you sure?</h4>
          <h6>You want to delete?</h6>
          <v-layout row>
            <v-spacer></v-spacer>
              <b-btn @click="closeDeleteWarnig" class="btn btn-sm btn-success mr-3">NO</b-btn>
              <b-btn @click="deleteType" class="btn btn-sm btn-danger mr-2">DELETE</b-btn>
        </v-layout>
        <div v-if="deleting" class="d-flex flenx-row justify-center align-center">
          <pulse-loader
            :loading="deleting"
            color="#162337"
            loadersize="5px"
            class="d-inline"
            style="flex:unset!important"
          ></pulse-loader>
        </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    
    <v-dialog id="fuel-type-dialog" :persistent="true" v-model="formDialog" width="1200">
      <v-card>
        <v-toolbar color="tenant">
          <v-spacer></v-spacer>
          <v-toolbar-title>Fuel Type</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon @click="closeModal">clear</v-icon>
        </v-toolbar>
        <v-card-text class="px-3 py-3">
          <v-form ref="openTollPriceForm">
            <v-combobox
              v-model="formData.tollPlazaName"
              :items="geofences"
              label="Select a Geofence"
              item-text="name"
              item-value="name"
            ></v-combobox>
            <v-text-field
              v-model="formData.price"
              label="Price"
              required
            ></v-text-field>

            <v-layout row>
              <v-spacer></v-spacer>
              <v-btn @click="save">Done</v-btn>
            </v-layout>

            <div v-if="submitting" class="d-flex flenx-row justify-center align-center">
              <pulse-loader
                :loading="submitting"
                color="#162337"
                loadersize="5px"
                class="d-inline"
                style="flex:unset!important"
              ></pulse-loader>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {db} from "@/firebase"
import PulseLoader from "vue-spinner/src/PulseLoader.vue"
import moment from "moment"
import mtz from "moment-timezone"
import { mapGetters } from 'vuex'

export default {
  components: {
    PulseLoader
  },
  data(){
    return {
      deleteWarning: false,
      tableSettings: {
        currentPage: 1,
        perPage: 100,
        totalRows: 0,
        pageOptions: [100, 250, 500, 1000],
        sortBy: 'time',
        sortDesc: false,
        sortDirection: "desc",
        filter: null
      },
      geoHeader: [
        {
          key: 'sl',
          label: 'SL',
          thClass: "text-left",
          tdClass: "text-left",
          sortable: false
        },
        {
          key: 'destination',
          label: 'Toll',
          thClass: "text-left",
          tdClass: "text-left",
          sortable: false
        },
        {
          key: 'price',
          label: 'Price',
          thClass: "text-left",
          tdClass: "text-left",
          sortable: false
        },
      ],
      prices: [],
      tableHeader: [
        {
          key: "sl",
          label: "SL",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "tollPlazaName",
          label: "Toll",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "price",
          label: "Price",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "actions",
          label: "Actions",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
      ],
      isTableBusy: true,
      openTolls: [],
      formDialog: false,
      dateMenu: false,
      timeMenu: false,
      formData: {
        id: '',
        tollPlazaName: '',
        price: 0
      },
      defaultFormData: {
        id: '',
        tollPlazaName: '',
        price: 0
      },
      selectedType: null,
      submitting: false,
      deleting: false,
      selectedGeofence: null,
      submittingToll: false,
      closeTolls: []
    }
  },
  created(){
    // if(!this.isAdmin){
    //   this.$router.push({name: 'dashboard'})
    // }
    let ps = []
    this.geofences.forEach(geo=>{
      ps.push({
        id: geo.id,
        name: geo.name,
        destination: geo.destination,
        price: geo.price || 0
      })
    })
    ps.sort((a,b)=>{
      if(a.name > b.name) return 1 
      else if(a.name < b.name) return -1
      return 0 
    })
    this.prices = ps
    this.getClosedTolls()
    this.getOpenTolls()
    console.log(this.geofences)
  },
  watch: {
    formData:{
      handler(v){
        console.log(v)
      }
    }
  },
  computed:{
    ...mapGetters('loginInfo',["isAdmin"]),
    ...mapGetters('dashboardFields',["geofences"]),
    computedTolls(){
      if(!this.selectedGeofence) return []
      let tolls = this.closeTolls.find(p=>p.id==this.selectedGeofence)
      if(tolls != null) return tolls.tolls
      return this.prices.filter(p=>p.id!=this.selectedGeofence)
    }
  },
  methods:{
    async getClosedTolls(){
      await db.collection("closedToll").get().then(res=>{
        res.docs.forEach(doc=>{
          this.closeTolls.push(doc.data())
        })
      })
    },
    async saveClosedTollPrices(){
      this.submittingToll = true
      let sel = this.prices.find(p=>p.id==this.selectedGeofence)
      let obj = {
        id: sel.id,
        name: sel.name,
        destination: sel.destination,
        tolls: []
      }
      this.computedTolls.forEach(p=>{
        if(p.id != this.selectedGeofence){
          obj.tolls.push({
            id: p.id,
            name: p.name,
            destination: p.destination,
            price: p.price
          })
        }
      })
      console.log(`geotoll${this.selectedGeofence}`,obj)
      await db.collection("closedToll").doc(`geotoll${this.selectedGeofence}`).set(obj).then(res=>{
        this.submittingToll = false
      }).catch(err=>{
        console.log("FIREBASE-ERROR",err)
        this.submittingToll = false
      })
    },
    formatDateTime(dt){
      return moment(dt*1000).tz('Etc/GMT+8').format("DD MMMM, YYYY hh:mm A")
    },
    async checkDefault(item){
      await db.collection("openTolls").get()
      .then(docs=>{
        docs.forEach(async doc=>{
          await db.collection("openTolls").doc(doc.id)
          .update({selected: doc.id==item.id?true:false})
          .then(res=>{})
        })
      })
    },
    async getOpenTolls(){
      this.openTolls = []
      await db.collection('openTolls').get()
      .then(docs=>{
        docs.forEach(doc=>{
          this.openTolls.push(Object.assign({},{id:doc.id},doc.data()))
        })
        this.isTableBusy = false
      })
    },
    openDeleteWarnig(item){
      this.selectedType = item
      this.deleteWarning = true
    },
    closeDeleteWarnig(){
      this.deleteWarning = false
      this.selectedType = null
    },
    openModal(){
      this.formData = Object.assign({},this.defaultFormData)
      this.formDialog = true
    },
    closeModal(){
      this.selectedType = null
      this.formDialog = false
    },
    async deleteType(){
      this.deleting = true
      await db.collection("openTolls").doc(this.selectedType.id).delete().then(_=>{
        this.isTableBusy = true
        this.deleting = false
        this.selectedType = null
        this.deleteWarning = false
        this.getOpenTolls()
      })
    },
    async save(){
      this.submitting = true
      let d = moment().format("X")
      let obj = {
        date: d,
        name: this.formData.tollPlazaName.name,
        tollPlazaName: this.formData.tollPlazaName.destination,
        price: this.formData.price
      }
      if(this.selectedType==null){
        //add
        await db.collection("openTolls").add(obj)
        .then(ref=>{
          this.isTableBusy = true
          this.submitting = false
          this.formData = Object.assign({},this.defaultFormData)
          this.closeModal()
          this.getOpenTolls()
        })
      }else{
        //update
        let id = this.selectedType.id
        // obj.date = this.selectedType.date
        await db.collection("openTolls")
        .doc(id)
        .update(obj)
        .then(ref=>{
          this.isTableBusy = true
          this.submitting = false
          this.formData = Object.assign({},this.defaultFormData)
          this.closeModal()
          this.getOpenTolls()
        })
      }
    },
    showInfo(type){
      this.selectedType = type
      this.formData = {
        id: type.id,
        date: type.date,
        tollPlazaName: type.tollPlazaName,
        price: type.price
      }
      this.formDialog = true
    },
    onTableFiltered(filteredItems) {
      this.tableSettings.totalRows = filteredItems.length;
      this.tableSettings.currentPage = 1;
    },
  },
}
</script>

<style>
.v-btn--active, .v-btn:hover, .v-btn:focus{
  background-color: grey !important;
}
.v-picker__title{
  background-color: dimgray;
}

</style>