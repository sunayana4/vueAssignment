<template>
  <div>
    <h2 v-for="(data, index) in name" :key="index" :style="{ margin: '1px' }">
      <div class="whether-data">
        {{ data.current.place }}
        <div>{{ data.current.Celcius }} | {{ data.current.Fahrenheit }}</div>
        <div :style="{ fontSize: '50px', padding: '20px' }">
          {{ data.current.Celcius }}<span>&#176;</span>C
        </div>
        <div>{{ data.current.wheather }}</div>
        <div>
          <h5>Updated as of {{ data.current.time }}</h5>
        </div>
      </div>
    </h2>
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style  scoped>
.whether-data {
  width: 320px;
  height: 250px;
  background-color: blue;
  text-align: center;
}
</style>