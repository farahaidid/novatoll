<template>
  <div class="container">
    <!-- <input type="file" @change="read" /> -->
    <!-- {{ geofencesName }} -->
    <!--     {{CsvData}} -->
    <!-- <div class="output"></div> -->
    <!--   {{formatCsvData}} -->
  </div>
</template>

<script>
import {db} from "@/firebase"
import { mapGetters } from "vuex";
import csvtojsonV2 from "csvtojson/v2";
import csvString from "@/assets/CSVSTRING"
import closedTolls from "../assets/fields.json"
export default {
  data() {
    return {
      csvData: []
    };
  },
  created() {
    this.readCsv(csvString).then(res=>{
        this.csvData = res
        console.log("CSV_DATD",res)
        this.makeClosedTollData()
    })

    // this.downloadJSON()

    // this.uploadCl()

    /* console.log(this.geofencesName)  */
    // console.log(this.CsvData);
    /*  console.log(this.geofencesName);
        console.log(this.tollData); */
    /* let x=[...new Set(this.geofencesName)]
        console.log(x);  */
    // console.log(this.geofencesName);

  },
  computed: {
    ...mapGetters("dashboardFields", ["geofences"]),
    geofencesName() {
      let x = this.geofences.map(geofence => {
        let tolls = this.formatCsvData.filter(
          toll => geofence.name.toLowerCase() === toll.name.toLowerCase()
        );
        return {
          ...geofence,
          tolls
        };
      });
      console.log(x);
      return x;
    },
    formatCsvData() {
      return this.CsvData.map(eachData => {
        return {
          name: eachData.From,
          destination: eachData.To,
          price: [
            {
              className: "Class 1",
              price: +eachData["Class 1"]
            },
            {
              className: "Class 2",
              price: +eachData["Class 2"]
            },
            {
              className: "Class 3",
              price: +eachData["Class 3"]
            },
            {
              className: "Class 4",
              price: +eachData["Class 4"]
            },
            {
              className: "Class 5",
              price: +eachData["Class 5"]
            }
          ]
        };
      });
    }
  },
  methods: {
    async uploadCl(){
      let i = 0
      for(let key in closedTolls){
        await db.collection("closedToll").doc(key).set(closedTolls[key])
        console.log(i++);
      }
    },
    makeClosedTollData(){
        // let final = []
        // console.log(this.geofences);
        // this.geofences.forEach(g => {
        //   console.log(g.name.toUpperCase())
        // })
        // this.csvData.forEach(csvD => {
        //   let geofence = this.geofences.find(geo => csvD.From.toLowerCase().trim() == geo.name.toLowerCase().trim())
        //   if(geofence){
        //     let obj = Object.assign({},geofence,{tolls:[]})
        //     let csvs = this.csvData.filter(csv => csv.From.toLowerCase().trim() == geofence.name.toLowerCase().trim())
        //     if(csvs){
        //         csvs.forEach(csv => {
        //             let geos = this.geofences.filter(g => g.name.toLowerCase().trim() == csv.To.toLowerCase().trim())
        //             if(geos){
        //                 geos.forEach(geo => {
        //                     let tObj = Object.assign({},geo,{price:[
        //                         {className: "class1", price: parseFloat(csv['Class 1'])},
        //                         {className: "class2", price: parseFloat(csv['Class 2'])},
        //                         {className: "class3", price: parseFloat(csv['Class 3'])},
        //                         {className: "class4", price: parseFloat(csv['Class 4'])},
        //                         {className: "class5", price: parseFloat(csv['Class 5'])},
        //                     ]})
        //                     obj.tolls.push(tObj)
        //                 })
        //             }
        //         })
        //     }
        //     final.push(obj)
        //   }
        // })
        this.geofences.forEach(geofence => {
            let obj = Object.assign({},geofence,{tolls:[]})
            let csvs = this.csvData.filter(csv => csv.From.toLowerCase().trim() == geofence.name.toLowerCase().trim())
            if(csvs){
                csvs.forEach(csv => {
                    let geos = this.geofences.filter(g => g.name.toLowerCase().trim() == csv.To.toLowerCase().trim())
                    if(geos){
                        geos.forEach(geo => {
                            let tObj = Object.assign({},geo,{price:[
                                {className: "class1", price: parseFloat(csv['Class 1'])},
                                {className: "class2", price: parseFloat(csv['Class 2'])},
                                {className: "class3", price: parseFloat(csv['Class 3'])},
                                {className: "class4", price: parseFloat(csv['Class 4'])},
                                {className: "class5", price: parseFloat(csv['Class 5'])},
                            ]})
                            obj.tolls.push(tObj)
                        })
                    }
                })
            }
            final.push(obj)
        })
        // final = final.filter( (value, index, self) => index === self.findIndex((t) => (t.id === value.id)))
        // console.log("FINAL",final)
        // final.forEach(async toll => {
        //   await db.collection("closedToll").doc("geotoll"+toll.id).get().then(doc => {
        //     console.log(doc.id, doc.data(),toll.id);
        //   })
        // })
        // this.saveToFirebase(final)
    },
    async saveToFirebase(closedTolls){
      console.log(closedTolls);
      for(let i = 0;i<closedTolls.length;i++){
          let  toll = closedTolls[i]
          console.log(i+1, closedTolls.length, toll);
          await db.collection("closedToll").doc(`geotoll${toll.id}`).set(toll)
      }
    },
    async readCsv(csvString) {
      return await csvtojsonV2({}).fromString(csvString).then(csvRow => csvRow)
    },
    downloadJSON(){
      const data = JSON.stringify(this.geofences)
      const blob = new Blob([data], { type: 'text/plain' })
      const e = document.createEvent('MouseEvents'),
        a = document.createElement('a')
      a.download = 'fields.json'
      a.href = window.URL.createObjectURL(blob)
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
      e.initEvent(
        'click',
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      )
      a.dispatchEvent(e)
      this.finishedDialog = true
    },
    read(event) {
      const reader = new FileReader();

      const csv = event.target.files[0];
      reader.readAsText(csv);

      reader.onload = e => {
        this.readCsv(e.target.result);
        console.log(e.target.result);
        /* document.querySelector('.output').innerText = e.target.result; */
      };
    },
    tollData() {
      let geoName = this.geofencesName.forEach(e => {
        return e.name;
        console.log(geofenceName.name);
      });
      /* this.CsvData.filter(csv.to===) */
    }
    /* formattedgeofences(){
             let x= this.geofences.map(geofence =>{
                   let tolls = this.formatCsvData.filter( toll => 
                        geofence.name.toLowerCase()===toll.name.toLowerCase()
                   )
                   return {
                       ...geofence,
                       tolls
                   }
                   db.collection("testclosedtolls").add({
                      
                   })
               })
               console.log(x);
               return x
           }, */
  }
};
</script>
