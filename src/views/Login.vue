<template>
  <div>
    <!-- <iframe
      name="simple_form"
      src="http://fleet.novatrack.biz/login.html?client_id=Dashboard&access_type=0X100&activation_time=0&duration=2592000&lang=en&flags=0&user=novademo&redirect_uri=http://localhost:8080/dashboard&response_type=token"
      scrolling="no"
      style="width: 100%; height: 500px; border: 0; margin: 10px;"
    ></iframe> -->
    <!-- <iframe
      name="simple_form"
      src="http://fleet.novatrack.biz/login.html?client_id=Dashboard&access_type=0X100&activation_time=0&duration=2592000&lang=en&flags=0&user=novademo&redirect_uri=http://localhost:8080/dashboard&response_type=token"
      scrolling="no"
      style="width: 100%; height: 500px; border: 0; margin: 10px;"
    ></iframe> -->
  </div>
</template>

<script>
export default {
  created(){

     window.location = "http://fleet.novatrack.biz/login.html?access_type=-1&redirect_uri=https://nova-toll.web.app/toll-report"
    // window.location = "http://fleet.novatrack.biz/login.html?access_type=-1&redirect_uri=http://103.6.245.78:80/toll-report"
    // window.location = "http://fleet.novatrack.biz/login.html?access_type=-1&redirect_uri=http://localhost:5080/toll-report"
    
  }
};
</script>

<style>
</style>