<template>
  <div class="small">
    <pie-chart :chart-data="datacollection"></pie-chart>
    <button @click="fillData()">Randomize</button>
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
        datacollection: {}
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ["Navy", "Marine Corps", "Army", "Air Force"],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: ['#f87979', "blue", "black", "green"],
              data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt()]
            },
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>