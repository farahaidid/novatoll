<template>
  <div class="text-center">
    <div v-if="!loading">
      <b-row class="m-0 p-2">
        <b-col>
          <b-row>
            <b-col sm="12" md="6">
              <h5 class="text-left">From</h5>
              <b-form-input v-model="fromDate" type="date"></b-form-input>
            </b-col>
            <b-col sm="12" md="6">
              <h5 class="text-left">To</h5>
              <b-form-input v-model="toDate" type="date"></b-form-input>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-col md="6">
              <h5 class="text-left">Vehicle</h5>
              <!-- @change="loading=true;openFuelReport(selectedUnit)" -->
              <b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="selectedUnit">
                <option :value="null">Choose...</option>
                <option v-for="(unit, indexOpt) in units" :key="indexOpt" :value="unit">{{ unit.getName() }}</option>
              </b-form-select>
            </b-col>
            <b-col md="6" class="pt-md-4 mt-md-2">
              <b-btn @click="openFuelReport(selectedUnit)" >Get Report</b-btn>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <v-card v-if="!fetchingReport && selectedUnit!==null && tollReports.length>0">
        <v-card-title>
          <v-layout row align-center justify-right>
            <v-spacer></v-spacer>
          </v-layout>
        </v-card-title>
        <v-card-text class="px-1 py-3 text-xs-center w-100" style="width:1180px">
          <div id="chart"></div>
          <div id="summary">
            <b-card class="my-2">
              <h6 class="text-xs-center">Toll Report of <span style="font-weight:bold">{{selectedUnit.getName()}}</span>  <span>[{{className}}]</span> </h6>
              <b-table
                class="caption w-100 data-table"
                sticky-header
                head-variant="light"
                hover
                striped
                show-empty
                small
                responsive
                foot-clone
                :items="tollReports"
                :fields="tollReportTableHeader"
                :filter="tollReportSettings.filter"
                :sort-by.sync="tollReportSettings.sortBy"
                :sort-desc.sync="tollReportSettings.sortDesc"
                :sort-direction="tollReportSettings.sortDirection"
                @filtered="onTollReportTableFiltered"
                :busy="isTollReportTableBusy"
              >
                <template v-slot:cell(sl)="row">
                  {{row.index+1}}
                </template>
                <template v-slot:cell(type)="row">
                  {{tollType(row.item,row.index)}}
                </template>
                <template v-slot:cell(price)="row">
                  {{tollPrice(row.item,row.index)}}
                </template>
                <template v-slot:foot(sl)="data">
                  <span></span>
                </template>
                <template v-slot:foot(time)="data">
                  <span></span>
                </template>
                <template v-slot:foot(plaza)="data">
                  <span ></span>
                </template>
                <template v-slot:foot(type)="data">
                  <span class="text-success">TOTAL</span>
                </template>
                <template v-slot:foot(price)="data">
                  <span>{{totalPrice}}</span>
                </template>
              </b-table>
              
            </b-card>
          </div>
        </v-card-text>
        <v-card-actions></v-card-actions>
      </v-card>
      <div v-else-if="fetchingReport" class="d-flex flenx-row justify-center align-center">
        <pulse-loader
          :loading="fetchingReport"
          color="#162337"
          loadersize="5px"
          class="d-inline"
          style="flex:unset!important"
        ></pulse-loader>
      </div>
    </div>
    <div v-else class="d-flex flenx-row justify-center align-center">
      <pulse-loader
        :loading="loading"
        color="#162337"
        loadersize="5px"
        class="d-inline"
        style="flex:unset!important"
      ></pulse-loader>
    </div>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue"
import VueApexCharts from "vue-apexcharts"
import JsonExcel from "vue-json-excel"
import { mapMutations , mapGetters } from "vuex"
import moment from "moment"
import mtz from "moment-timezone"
import EventBus from "@/services/eventBus";
import {db} from "@/firebase"

export default {
  components: {
    apexchart: VueApexCharts,
    downloadExcel: JsonExcel,
    PulseLoader
  },
  data() {
    return {
      width: 0,
      height: 0,
      fuelTypes: [],
      fromDate: new Date().toISOString().substr(0,10),
      toDate: new Date().toISOString().substr(0,10),
      
      isFuelReportSummaryTableBusy: true,
      sess: null,
      fetchingReport: false,
      loading: true,
      units: [],
      selectedUnit: null,
      fuelRes: null,
      fuelReportObj: null,
      fuelReportObj: null,
      fuelReportDialog: false,
      fuelChartSeries: [],

      editingRows: [],
      rowsTouchedForEditing: [],
      editMode: false,
      className: "Class 1",

      
      fuelReportData: [],
      fuelReportFieldsForXcel: {
        SL: "sl",
        Time: "time",
        Location: "location",
        "Initial Fuel Level": "initFuelLevel",
        "Final Fuel Level": "finalFuelLevel",
        Filled: "filled",
        "Bill (L)": "bill",
        "Bill (RM)": "billRM",
        "Different Lt.": "diffL",
        Accuracy: "accuracy",
        "Fuel Price": "fuelPrice",
        "Fuel": "fuelType",
      },
      fuelDefaultReports: [],
      reportSummary: null,
      selectedDate: {
        from: '',
        to: ''
      },
      fuelTypesFromDB: [],


      tollRes: null,
      tollReportObj: null,
      tollReports: [],
      tollReportTableHeader: [
        {
          key: "sl",
          label: "SL",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "time",
          label: "Time",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "plaza",
          label: "Toll",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "type",
          label: "Type",
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
      ],
      tollReportSettings: {
        currentPage: 1,
        perPage: 100,
        totalRows: 0,
        pageOptions: [100, 250, 500, 1000],
        sortBy: 'time',
        sortDesc: false,
        sortDirection: "desc",
        filter: null
      },
      isTollReportTableBusy: true,
      openTolls: [],
      closedTolls: []
    };
  },
  async created() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.getOpenTolls()
    this.getClosedTolls()
    this.WIALON()
  },
  methods: {
    ...mapMutations("loginInfo", [
      "SET_ISLOGGED",
      "SET_TOKEN",
      "CLEAR_LOGIN_DATA",
      "SET_SESSION_ID"
    ]),
    ...mapMutations("dashboardFields", [
      "SET_GEOFENCES"
    ]),
    async getClosedTolls(){
      await db.collection('closedToll').get()
      .then(docs=>{
        docs.forEach(doc=>{
          this.closedTolls.push(Object.assign({},{id:doc.id},doc.data()))
        })
      })
    },
    tollType(data,index){
      let toll = this.openTolls.find(t=>t.name==data.plaza)
      if(toll) return "OPEN"
      if(index > 0){
        let closedToll = this.closedTolls.find(t=>t.name==data.plaza)
        if(closedToll){
          let prevReport = this.tollReports[index-1]
          let prevClosedToll = this.closedTolls.find(x=>x.name == prevReport.plaza)
          if(prevClosedToll){
            let priceFromPrev = prevClosedToll.tolls.find(p=>p.name == data.plaza)
            if(priceFromPrev){
              return "CLOSED"
            }
          }
        }
      }
      return ""
    },
    tollPrice(data, index) {
      
      let name = "";

      if (this.className === "Class 1") {
        name = "class1"
      } else if (this.className === "Class 2") {
        name = "class2"
      } else if (this.className === "Class 3") {
        name = "class3"
      } else if (this.className === "Class 4") {
        name = "class4"
      } else if (this.className === "Class 5") {
        name = "class5"
      }

      let toll = this.openTolls.find(t=>t.name==data.plaza)
      if(toll) {
        if (typeof toll.price === "object") {
          let priceData =  toll.price.find(p => p.className === name);

          if (priceData && priceData.price) return priceData.price;
        }

        return toll.price;
      }

      if(index > 0) {
        let closedToll = this.closedTolls.find(t=>t.name==data.plaza)
        
        if(closedToll){
          let prevReport = this.tollReports[index-1]
          let prevClosedToll = this.closedTolls.find(x=>x.name == prevReport.plaza)
          if(prevClosedToll){
            let priceFromPrev = prevClosedToll.tolls.find(p=>p.name == data.plaza)
            if(priceFromPrev) {

              if (typeof priceFromPrev.price === "object") {
                let priceData =  priceFromPrev.price.find(p => p.className === name);

                 if (priceData && priceData.price) return priceData.price;
              }
              return priceFromPrev.price;
            }
          }
        }

      }
      return "";
    },
    handleFuelTypeChange(item){
      item.fuelPrice = item.fuelTypes.find(x=>x.type==item.fuelType).price
    },
    async getOpenTolls(){
      await db.collection('openTolls').get()
      .then(docs=>{
        docs.forEach(doc=>{
          this.openTolls.push(Object.assign({},{id:doc.id},doc.data()))
        })
      })
    },
    WIALON(){
      if(!this.token || this.token.trim().length == 0) {
        this.SET_TOKEN(this.$route.query.access_token)
        // return
      }
      let _this = this
      if (
        wialon.core.Session.getInstance().__cT == null ||
        wialon.core.Session.getInstance().__cT.length == 0
      ) {
        wialon.core.Session.getInstance().initSession(
          "https://hst-api.wialon.com"
        );
        wialon.core.Session.getInstance().loginToken(
          _this.token,
          "", // try to login
          function(code) {
            if (code) {
              // EventBus.$emit("LOG_OUT");
              // _this.logout()
              alert(wialon.core.Errors.getErrorText(code))
              return;
            }
            _this.SET_SESSION_ID(wialon.core.Session.getInstance().__cT);
            _this.getUnits()
          }
        );
      }else{
        _this.getUnits()
      }
    },
    onTollReportTableFiltered(filteredItems) {
      this.tollReportSettings.totalRows = filteredItems.length;
      this.tollReportSettings.currentPage = 1;
    },
    onFuelReportSummaryTableFiltered(filteredItems) {
      this.fuelReportSummaryTableSettings.totalRows = filteredItems.length;
      this.fuelReportSummaryTableSettings.currentPage = 1;
    },
    async getUnits() {
      this.units = [];
      let _this = this;
      _this.sess = wialon.core.Session.getInstance();
      _this.sess.loadLibrary("userNotifications"); //wialon.item.User.dataFlag.notifications
      _this.sess.loadLibrary("itemCustomFields"); //wialon.item.Item.dataFlag.customFields    //sample: {id: X, n: “name”, v: “value”}
      _this.sess.loadLibrary("itemAdminFields"); //wialon.item.Item.dataFlag.adminFields //sample: {id: X, n: “name”, v: “value”}
      _this.sess.loadLibrary("itemProfileFields"); //wialon.item.Item.dataFlag.profileFields //sample: {id: X, n: “name”, v: “value”}
      _this.sess.loadLibrary("itemIcon"); //require wialon.item.Item.dataFlag.image
      _this.sess.loadLibrary("unitCommandDefinitions"); //wialon.item.Unit.dataFlag.commandAliases   //sample: {id: X, n: “my command”, c: “query_pos”, l: “gsm”, p: ””, a: 0×1}
      _this.sess.loadLibrary("unitSensors"); //wialon.item.Unit.dataFlag.sensors    //sample: {id: X, n: “my sensor”, t: “unk”, d: ””, m: “km/h”, p: “param”, f: 0, c: ””, vt: 0, vs: 0, tbl: [[0, 1, 2]]}
      _this.sess.loadLibrary("unitServiceIntervals"); //wialon.item.Unit.dataFlag.maintenance

      _this.sess.loadLibrary("unitTripDetector"); //
      _this.sess.loadLibrary("unitMessagesFilter"); //
      _this.sess.loadLibrary("unitReportSettings");
      _this.sess.loadLibrary("unitFuelSettings");
      _this.sess.loadLibrary("resourceNotifications"); //require wialon.item.Resource.dataFlag.notifications

      _this.sess.loadLibrary("resourceJobs"); //wialon.item.Resource.dataFlag.jobs
      _this.sess.loadLibrary("resourcePois"); //wialon.item.Resource.dataFlag.poi
      _this.sess.loadLibrary("resourceZones"); //wialon.item.Resource.dataFlag.zones
      _this.sess.loadLibrary("resourceZoneGroups"); //wialon.item.Resource.dataFlag.zoneGroups
      _this.sess.loadLibrary("resourceDrivers"); //wialon.item.Resource.dataFlag.drivers
      _this.sess.loadLibrary("resourceDriverGroups"); // wialon.item.Resource.dataFlag.driverGroups
      _this.sess.loadLibrary("resourceTrailers"); //wialon.item.Resource.dataFlag.trailers
      _this.sess.loadLibrary("resourceTrailerGroups"); //wialon.item.Resource.dataFlag.trailerGroups
      _this.sess.loadLibrary("resourceAccounts");
      _this.sess.loadLibrary("resourceReports");
      _this.sess.loadLibrary("unitEvents");
      _this.sess.loadLibrary("mobileApps");
      _this.sess.loadLibrary("unitEventRegistrar");
      let unitFlags =
      wialon.item.MUnitEventRegistrar|
        wialon.item.Item.dataFlag.base |
        0x00000001 |
        0x00000002 |
        0x00000004 |
        0x00000008 |
        0x00000010 |
        0x00000020 |
        0x00000040 |
        0x00000080 |
        0x00000100 |
        0x00000200 |
        0x00000400 |
        0x00001000 |
        0x00002000 |
        0x00008000 |
        0x00020000 |
        0x00080000 |
        0x00100000 |
        0x00200000 |
        0x00400000 |
        0x00800000 |
        0x00010000 |
        0x00100000 |
        0x0600 |
        0x0300 |
        0x0500 |
        0x0900 |
        0x1000 |
        0x1 |
        0x2 |
        0x20 |
        0x200 |
        0x4000 |
        0x400000000 |
        0x400000 |
        0x1000000 |
        0x10000000 |
        0x40000000 |
        0x200000000 |
        0x800000000 |
        0x100000000000 |
        0x10000000 |
        0x200000 |
        0x100000 |
        0x4000000 |
        0x10 |
        0x40 |
        0x80 |
        0x100 |
        0x8000 |
        0x2000000 |
        0x800000000 |
        0x200000 |
        0x800000 |
        0x2000000 |
        0x4 |
        0x20000000 |
        0x4000000000 |
        0x100000 |
        0x400000 |
        0x100000 |
        0x200000 |
        0x8000000 |
        0x20000000 |
        0x80000000 |
        0x400000000 |
        0x1000000000 |
        0x200000000000 |
        0x8 |
        0x800 |
        0x1000 |
        0x2000 |
        0x100000 |
        0x200000 |
        0x400000 |
        0x800000 |
        0x40000000 |
        0x80000000 |
        0x1000000 |
        0x400 |
        0x4000000 |
        0x8000000 |
        0x1000000000 |
        0x2000000000 |
        0x8000000000 |
        0x100000000 |
        wialon.item.Unit.dataFlag.commandAliases |
        wialon.item.Unit.dataFlag.sensors |
        wialon.item.Unit.dataFlag.maintenance |
        wialon.item.Item.dataFlag.customFields |
        wialon.item.Item.dataFlag.adminFields |
        wialon.item.Item.dataFlag.profileFields |
        wialon.item.Item.dataFlag.image |
        wialon.item.Resource.dataFlag.jobs |
        wialon.item.Resource.dataFlag.poi |
        wialon.item.Resource.dataFlag.zones |
        wialon.item.Resource.dataFlag.zoneGroups |
        wialon.item.Resource.dataFlag.drivers |
        wialon.item.Resource.dataFlag.driverGroups |
        wialon.item.Resource.dataFlag.trailers |
        wialon.item.Resource.dataFlag.trailerGroups |
        wialon.item.Unit.accessFlag.viewCmdAliases |
        wialon.item.Unit.accessFlag.executeCommands |
        wialon.item.Unit.accessFlag.editCmdAliases |
        wialon.item.Unit.dataFlag.commands;

      _this.sess.updateDataFlags(
        [
          { type: "type", data: "avl_unit", flags: unitFlags, mode: 0 },
          { type: "type", data: "avl_resource", flags: unitFlags, mode: 0 }
        ],
        async function(code) {
          if (code) {
            _this.WIALON()
            return;
          }
          var resources = _this.sess.getItems("avl_resource");
          let allDrivers = {};
          let allTrailers = {};
          let gfences = []
          resources.forEach(resource => {
            // gfences = gfences.concat(...resource.getZones())
            
            if (resource.getName() == "Toll Geofence") {
              _this.tollRes = resource;
              _this.tollReportObj = resource[0];
              let zones = resource.getZones()
              for(let geo in zones){
                gfences.push({
                  id: zones[geo].id,
                  name: zones[geo].n,
                  destination: zones[geo].d
                })
              }
            }
          });
          _this.SET_GEOFENCES(gfences)
          _this.units = _this.sess.getItems("avl_unit");
          _this.units.sort((a,b)=>{
            if(a.getName()>b.getName()) return 1
            if(a.getName()<b.getName()) return -1
            return 0
          })
          _this.loading = false;
          _this.$forceUpdate();
        }
      );
    },
    async openFuelReport(unit) {
      if(this.selectedUnit==null) return
      let _this = this;
      this.fetchingReport = true
      let from = new Date(this.fromDate + " 00:00").getTime() / 1000;
      let to = new Date(this.toDate + " 23:59").getTime() / 1000;

      this.selectedDate.from = this.fromDate
      this.selectedDate.to = this.toDate
      let uId = unit.getId();
      let template = this.tollRes.getReport(1);
      // specify time interval object

      await wialon.core.Session.getInstance().searchItem(uId,4294967295,function (res, item) {
        let a = item && item.$$user_profileFields && item.$$user_profileFields[1] ? item.$$user_profileFields[1] : null;
        if (a && a.v) _this.className = a.v;
      })

      let interval = {
        from: from,
        to: to,
        flags: wialon.item.MReport.intervalFlag.absolute
      };
      this.tollRes.execReport(
        template,
        uId,
        0,
        interval, // execute selected report
        function(code, data) {
          // execReport template
          if (code) {
            return;
          } // exit i
          var tables = data.getTables(); // get report tables
          if (!tables) return; // exit if no tables
          for (var i = 0; i < tables.length; i++) {
            if(tables[i].name != "unit_zones_visit") continue
            let config = {
              type: "range",
              data: { from: 0, to: tables[i].rows, level: 0 }
            };
            data.selectRows(
              i,
              config, // get Table rows
              qx.lang.Function.bind(
                async function(i, code, rows) {
                  if (code) {
                    return;
                  } // exit if error code
                  let rowIndex = -1;
                  let rDs = [];
                  this.isTollReportTableBusy = true;
                  let arr = [];
                  for (var j in rows) {
                    // cycle on table rows
                    rowIndex++;
                    if (typeof rows[j].c == "undefined") continue; // skip empty rows
                    let obj = {
                      sl: rowIndex,
                      time: typeof(rows[j].c[1]) == 'object' ? rows[j].c[1].t : rows[j].c,
                      plaza: rows[j].c[2],
                    }
                    arr.push(obj)
                  }
                  _this.tollReports = arr
                },
                this,
                ""
              )
            );
          }
          _this.fetchingReport = false
        }
      );
      // this.getTemplateObject('unit_trips','Trips',unit.id,this.fuelRes)
    },
    getFuelReportRows(result) {
      let _this = this;
      var tables = result.getTables(); // get report tables
      if (!tables) return; // exit if no tables
      for (var i = 0; i < tables.length; i++) {
        result.getTableRows(
          i,
          0,
          tables[i].rows, // get Table rows
          qx.lang.Function.bind(
            async function(i, code, rows) {
              if (code) {
                return;
              } // exit if error code
              let rowIndex = -1;
              for (var j in rows) {
                // cycle on table rows
                rowIndex++;
              }
            },
            this,
            ""
          )
        );
      }
    }
  },
  computed:{
    ...mapGetters("loginInfo", ["isLogged", "token", "sessionId"]),
    totalPrice(){
      let price = 0
      this.tollReports.forEach((tr, index)=>{
        let p = this.tollPrice(tr,index)
        console.log(typeof p)
        if(typeof p == "string" && p.trim().length>0){
          price += parseFloat(p)
        }else if(typeof p == "number"){
          price += p
        }
      })
      return price
    },
    fuelReportSummaryData(){
      if(this.reportSummary==null) return []
      return [this.reportSummary]
    },
    dateRange(){
      let from = moment(this.selectedDate.from).format("D MMM YYYY")
      let to = moment(this.selectedDate.to).format("D MMM YYYY")
      return from + ' - ' + to
    },
    selectedUnitName(){
      if(this.selectedUnit == null) return ''
      let from = moment(this.selectedDate.from).format("D/MM/YYYY")
      let to = moment(this.selectedDate.to).format("D/MM/YYYY")
      let name = this.selectedUnit.getName()
      return `${name}_refuel_report_from_${from}_to${to}`
    },
    excelTitle(){
      let from = moment(this.selectedDate.from).format("D/MM/YYYY")
      let to = moment(this.selectedDate.to).format("D/MM/YYYY")
      let name = this.selectedUnit.getName()
      return [
        'Refuel Report',
        'vehicle plate number: '+ name,
        'Report from: ' + from + ' to: ' + to
      ]
    },
  },
};
</script>

<style>
</style>