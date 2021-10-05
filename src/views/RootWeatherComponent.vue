<template>
  <div :style="{ marginTop:'15px'}">
    <HeaderCmp></HeaderCmp>
    <CurrentWhtCmp :name="whetherData"></CurrentWhtCmp>
    <DailyWhtCmp :name="whetherData"></DailyWhtCmp>
    <HourlyWhtCmp :name="whetherData"> </HourlyWhtCmp>
  </div>
</template>

<script>
import HeaderCmp from "./HeaderComponent.vue";
import CurrentWhtCmp from "./CurrentWthComponent.vue";
import DailyWhtCmp from "./DailyWthComponent.vue";
import HourlyWhtCmp from "./HourlyWthComponent.vue";
import axios from "axios";

export default {
  name: "RootWeatherComponent",
  components: {
    HeaderCmp,
    CurrentWhtCmp,
    DailyWhtCmp,
    HourlyWhtCmp,
  },
  data() {
    return {
      whetherData: [],
      name: "sfsfs",
    };
  },
  created() {
    var that = this;
    var baseUrl = window.location.origin;
    //console.log('this.baseUrl ===',url);
    axios
      .get(baseUrl+"/whether.json")
      .then((response) => {
        that.whetherData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>