<template>
    <div>
        <input type="checkbox" v-model="selectAll" @click="toggleAll($event)">
        <label>All</label>
        <br>
        <input type="checkbox" value="Navy" :disabled="selectAll" v-model="checkedNames">
        <label>Navy</label>
        <br>
        <input type="checkbox" value="Army" :disabled="selectAll" v-model="checkedNames">
        <label>Army</label>
        <br>
        <input type="checkbox" value="Air Forces" :disabled="selectAll" v-model="checkedNames">
        <label>Air Forces</label>
        <br>
        <input type="checkbox" value="Marine Corps" :disabled="selectAll" v-model="checkedNames">
        <label>Marine Corps</label>
        <br>
        <span>Checked Name: {{checkedNames}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selectAll: true,
            checkedNames: ["Navy", "Army", "Air Forces", "Marine Corps"],
        }
    },
    methods:{
        toggleAll(event){
            if(event.target.checked){
                this.checkedNames = ["Navy", "Army", "Air Forces", "Marine Corps"];
            } else{
                this.checkedNames = []
            }
        }
    }
}
</script>

<style>

</style>