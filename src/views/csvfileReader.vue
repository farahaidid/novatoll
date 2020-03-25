<template>
  <div class="container">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sit a molestias excepturi quisquam officiis mollitia. Cum quas rerum voluptatum tempore alias a quidem quasi. Non amet asperiores alias officiis?</p>
    <input type="file" @change="read" />
       {{geofencesName}}
<!--     {{CsvData}} -->
    <!-- <div class="output"></div> -->
  <!--   {{formatCsvData}} -->
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import csvtojsonV2 from "csvtojson/v2"
export default {
    data() {
        return {
            CsvData:[]
        }
    },
    created(){
        
        ;
  /*       this.readCsv() */
    
        /* console.log(this.geofencesName)  */
        console.log(this.CsvData);
       /*  console.log(this.geofencesName);
        console.log(this.tollData); */
       /* let x=[...new Set(this.geofencesName)]
        console.log(x);  */
        console.log(this.geofencesName);
        
       
    },
    computed: {
           ...mapGetters("dashboardFields",["geofences"]),
           geofencesName(){
             let x= this.geofences.map(geofence =>{
                   let tolls = this.formatCsvData.filter( toll => 
                        geofence.name.toLowerCase()===toll.name.toLowerCase()
                   )
                   return {
                       ...geofence,
                       tolls
                   }
                   
               })
               console.log(x);
               return x
           },
             formatCsvData(){
             return this.CsvData.map( eachData=>{
                  return  {
                    name:eachData.From, 
                    destination:eachData.To, 
                    price: [{
                                       className:'Class 1', 
                                       price:+eachData["Class 1"]
                            },
                            {
                                        className:'Class 2', 
                                        price:+eachData["Class 2"]
                            },
                             {
                                        className:'Class 3', 
                                        price:+eachData["Class 3"]
                             },
                            {
                                        className:'Class 4', 
                                        price:+eachData["Class 4"]
                            },
                            {
                                 className:'Class 5', 
                                 price:+eachData["Class 5"]
                            }

                        ], 
                 }
                 })
            }
    },
    methods: {
        async readCsv(csvString){
            
            
            csvtojsonV2({
                //noheader:true,
                //output: "csv"
            })
            .fromString(csvString)
            .then((csvRow)=>{ 
               /*  console.log(csvRow)  */
                this.CsvData=csvRow
                console.log(this.CsvData);
            })
    
            // Async / await usage
            //const jsonArray=await csvtojsonV2().fromFile(csvFilePath);
            //console.log(jsonArray);
        },
        read(event){
            const reader = new FileReader()

            const csv = event.target.files[0]
            reader.readAsText(csv)
            
            reader.onload =e=> {
                this.readCsv(e.target.result)
                console.log(e.target.result);
                /* document.querySelector('.output').innerText = e.target.result; */
            }
        },
        tollData(){
            let geoName= this.geofencesName.forEach(e => {
                return e.name
                console.log(geofenceName.name);
            });
            /* this.CsvData.filter(csv.to===) */
        },
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
}
</script>