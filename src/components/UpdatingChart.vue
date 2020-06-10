<template>
  <div class="small">
    <div>
      <input type="checkbox" v-model="selectAll" @click="toggleAll($event)">
      <label>All</label>
      <br>
      <input type="checkbox" value="Navy" :disabled="selectAll" v-model="checkedNames" @click="toggleSingle($event)">
      <label>Navy</label>
      <br>
      <input type="checkbox" value="Army" :disabled="selectAll" v-model="checkedNames" @click="toggleSingle($event)">
      <label>Army</label>
      <br>
      <input type="checkbox" value="Air Forces" :disabled="selectAll" v-model="checkedNames" @click="toggleSingle($event)">
      <label>Air Forces</label>
      <br>
      <input type="checkbox" value="Marine Corps" :disabled="selectAll" v-model="checkedNames" @click="toggleSingle($event)">
      <label>Marine Corps</label>
      <br>
      <span>Checked Name: {{checkedNames}}</span>
    </div>
    <pie-chart :chart-data="datacollection"></pie-chart>
    <button @click="fillData(checkedNames)">Randomize</button>
  </div>
</template>

<script>
    import { Pie, mixins } from 'vue-chartjs'
    const { reactiveProp } = mixins

    const PieChart = {
        extends: Pie,
        mixins: [reactiveProp],
        props: ['options'],
        mounted () {
            // this.chartData is created in the mixin.
            // If you want to pass options please create a local options object
            this.renderChart(this.chartData, this.options)
        }
    }

  export default {
    components: {
      PieChart
    },
    data () {
      return {
        datacollection: {},
        selectAll: true,
        checkedNames: ["Navy", "Army", "Air Forces", "Marine Corps"],
      }
    },
    mounted () {
      this.fillData(this.checkedNames)
    },
    methods: {
      fillData (checkedNames) {
        this.datacollection = {
          labels: checkedNames,
          datasets: [
            {
              label: 'Data One',
              backgroundColor: (()=>{
                const t0 = ['#f87979', "blue", "black", "green"];
                const a0 = [];
                for(let i = 0; i < checkedNames.length; i+=1){
                  a0.push(t0[i]);
                }
                return a0;
              })(),
              data: (()=>{
                const a0 = [];
                for(let i = 0; i < checkedNames.length; i+=1){
                  a0.push(this.getRandomInt())
                }
                return a0;
              })()
            },
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      toggleAll(event){
        if(event.target.checked){
          this.checkedNames = ["Navy", "Army", "Air Forces", "Marine Corps"];
        } else{
          this.checkedNames = [];
        }
        this.fillData(this.checkedNames);
      },
      toggleSingle(event){
        if(event.target.checked){
          this.checkedNames.push(event.target.value);
        } else{
          const index = this.checkedNames.indexOf(event.target.value);
          this.checkedNames.splice(index, 1);
        }
        this.fillData(this.checkedNames);
      }
    }
  }
</script>

<style>
  .small {
    max-width: 400px;
  }
</style>