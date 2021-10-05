<template>
  <div class="whether-data">
    <h2>Hourly</h2>
    <h2 v-for="(data, index) in name" :key="index" :style="{ margin: '1px' }">
      <div>
        <carousel :items="3" :nav="false">
          <div
            v-for="(dailyData, index) in data.hourly"
            :key="index"
            :style="{ fontSize: '20px', padding: '20px' }"
          >
            <div>{{ dailyData.time }}</div>
            <div :style="{ fontSize: '20px', marginTop: '25px' }">
              {{ dailyData.Celcius }}<span>&#176;</span>
            </div>
            <div>{{ dailyData.wheather }}</div>
          </div>
        </carousel>
      </div>
    </h2>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "HourlyWthComponent",
  //hourlyData : [],
  props: ["name"],
  data() {
    return {
      // hourlyData: "",
    };
  },
  components: {
    carousel,
  },
};
</script>

<style scoped>
.whether-data {
  width: 320px;
  height: 250px;
  background-color: blue;
  text-align: center;
}

.owl-dots {
  margin-top: 0px !important;
}
</style>