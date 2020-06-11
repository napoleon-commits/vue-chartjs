<template>
    <div class="chart-container">
        <pie-chart :chartData="chartData" :options="options"/>
    </div>
</template>

<script>

import PieChart from '../chartjs/PieChart';

export default {
    components:{
        PieChart,
    },
    data(){
        return {
            options: {}
        }
    },
    computed:{
        checkedNames(){
            return this.$store.state.checkedNames;
        },
        chartData(){
            return {
                labels: this.checkedNames,
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: ['red', "blue", "black", "green"],
                        data: (()=>{
                            const a0 = [];
                            for(let i = 0; i < this.checkedNames.length; i+=1){
                                a0.push(Math.random()*25)
                            }
                            return a0;
                        })()
                    }
                ]
            }
        }
    },
}
</script>

<style>
    .chart-container{
        width: 25vw;
    }
</style>