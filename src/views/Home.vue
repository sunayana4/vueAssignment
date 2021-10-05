<template>
  <div class="page-css">
    <b-table hover :items="items" :fields="fields">
      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="deleteItem(row.item, row.index, $event.target)"
          class="mr-1"
          variant="primary"
        >
          Delete
        </b-button>
      </template>
    </b-table>

    <b-form @submit.prevent="submitForm">
      <b-form-group label="Name">
        <b-form-input
          type="text"
          v-model.trim.lazy="formValues.username"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Job">
        <b-form-input
          type="text"
          v-model.trim.lazy="formValues.job"
        ></b-form-input>
      </b-form-group>
      <br />
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>


 <div class="calc-container">
      <div class="inner-container">
        <div class="display"></div>
      </div>
      <div class="inner-container">
        <div class="calc-rows-first-row-col">
          <h2>{{ current }}</h2>
        </div>
        <div class="calc-rows" @click="clearDisplay()">
          <div
            class="calc-cols-second-row-col"
            :style="{ textAlign: 'center', width: '75%', padding: '15px' }"
          >
            <div class="button-container">
              <p>clear</p>
            </div>
          </div>
          <div
            class="calc-cols1"
            @click="handleOperator('/')"
            :style="{
              paddingLeft: '5px',
              width: '25%',
              border: 'red 1px solid',
              textAlign: 'center',
              paddingTop: '15px',
            }"
          >
            <div class="button-container">
              <p class="button">/</p>
            </div>
          </div>
        </div>
        <div class="calc-rows">
          <div class="calc-cols" @click="appendNumber('7')">
            <div class="button-container">
              <p class="button">7</p>
            </div>
          </div>
          <div class="calc-cols" @click="appendNumber('8')">
            <div class="button-container">
              <p class="button">8</p>
            </div>
          </div>
          <div class="calc-cols" @click="appendNumber('9')">
            <div class="button-container">
              <p class="button">9</p>
            </div>
          </div>
          <div class="calc-cols" @click="handleOperator('-')">
            <div class="button-container">
              <p :style="{ paddingLeft: '5px' }" class="button">-</p>
            </div>
          </div>
        </div>
        <div class="calc-rows">
          <div class="calc-cols" @click="appendNumber('4')">
            <div class="button-container">
              <p class="button">4</p>
            </div>
          </div>
          <div class="calc-cols" @click="appendNumber('5')">
            <div class="button-container">
              <p class="button">5</p>
            </div>
          </div>
          <div class="calc-cols" @click="appendNumber('6')">
            <div class="button-container">
              <p class="button">6</p>
            </div>
          </div>
          <div class="calc-cols" @click="handleOperator('+')">
            <div class="button-container">
              <p class="button">+</p>
            </div>
          </div>
        </div>
        <div class="calc-rows">
          <div class="calc-cols" @click="appendNumber('1')">
            <div class="button-container">
              <p class="button">1</p>
            </div>
          </div>
          <div class="calc-cols" @click="appendNumber('2')">
            <div class="button-container">
              <p class="button">2</p>
            </div>
          </div>
          <div class="calc-cols" @click="appendNumber('3')">
            <div class="button-container">
              <p class="button">3</p>
            </div>
          </div>
          <div class="calc-cols" @click="handleOperator('=')">
            <div class="button-container">
              <p class="button">=</p>
            </div>
          </div>
        </div>
      </div>
    </div><br/>

    <div>
      <div class="clock-header">
        <b-icon icon="clock" font-scale="2"></b-icon>
        <span :style="{ 'font-size': '40px', 'margin-left': '10px' }"
          >Digital Clock</span
        >
      </div>

      <div class="clock-body">
        <div>
          <div :style="{ 'text-align': 'center', paddingTop: '15px' }">
            <div class="custom-control custom-switch" @change="handleChange()">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitches"
              />
              <label class="custom-control-label" for="customSwitches"></label>
              <b-icon icon="calendar"></b-icon>
            </div>
          </div>
          <div class="clock-element">
            <div class="clock-content">
              <div :style="{ 'white-space': 'pre' }">
                {{ displayClockContent }}
              </div>
              <div class="date-content">{{ displayDateContent }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import "../App.css";

//import HelloWorld from './components/HelloWorld.vue'
export default {
  name: "Home",
  data() {
    return {
      current: "",
      previous: null,
      operator: null,
      clickedOperator: false,
      displayClockContent: '',
      displayDateContent: this.getCurrentTime(),
      isClockActive: false,
      formValues: {
        username: "",
        job: "",
      },
      fields: [
        {
          key: "name",
          label: "Name",
          class: "table-class",
        },
        {
          key: "job",
          label: "Job",
        },
        { key: "actions", label: "Remove" },
      ],
      items: [
        { id: 1001, name: "Sunayana", job: "Developer" },
        { id: 1002, name: "John", job: "Administrator" },
        { id: 1003, name: "Sarita", job: "Doctor" },
        { id: 1004, name: "Suman", job: "Network Marketing" },
      ],
    };
  },
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    clearDisplay() {
      this.current = "";
      this.previous = null;
      this.operator = null;
      this.clickedOperator = false;
    },
    handleChange() {
      // var that = this;
      //  var timeInterval = '';
      this.isClockActive = !this.isClockActive;
      console.log(this.isClockActive);

      if (this.isClockActive) {
        this.timeInterval = setInterval(this.getCurrentTime, 1000);
      } else {
        this.displayDateContent = "";
        clearInterval(this.timeInterval);
      }
    },
    handleOperator(newOperator) {
      // console.log
      const numberValue = parseFloat(this.current);
      if (this.operator && this.clickedOperator) {
        this.operator = newOperator;
      }
      if (this.previous == null) {
        this.previous = numberValue;
      } else if (this.operator) {
        const result = this.calculate(
          this.previous,
          numberValue,
          this.operator
        );
        console.log("resut=== ", result);
        this.current = String(result);
        this.previous = result;
      }
      this.clickedOperator = true;
      this.operator = newOperator;
    },
    calculate(first, second, operator) {
      switch (operator) {
        case "+":
          return first + second;
        case "-":
          return first - second;
        case "×":
          return first * second;
        case "/":
          return first / second;
        default:
          return second;
      }
    },
    appendNumber(number) {
      console.log("number ===", number);
      if (this.clickedOperator) {
        this.clickedOperator = false;
        this.current = number;
      } else {
        this.current =
          this.current === "0" ? number : `${this.current}${number}`;
      }
    },
    getCurrentTime() {
      const month = new Date().toLocaleString("default", { month: "long" });

      const weekday = new Date().toLocaleString("default", {
        weekday: "short",
      });

      const day = new Date().toLocaleString("default", { day: "2-digit" });
      this.displayClockContent = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
      this.displayDateContent = `${weekday} ${day} ${month} ${new Date().getUTCFullYear()}`;
    },

   
    submitForm() {
      var newItemsArray = this.items.push({
        name: this.formValues.username,
        job: this.formValues.job,
      });
      this.formValues.username = "";
      this.formValues.job = "";
      return newItemsArray;
    },
    deleteItem(rowItem, rowIndex, event) {
      console.log(
        "rowItem ==",
        rowItem,
        "rowIndex ==",
        rowIndex,
        "event == ",
        event
      );
      return this.items.splice(rowIndex, 1);
    },
  },

   created(){
      this.displayClockContent = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;

    },
};
</script>


