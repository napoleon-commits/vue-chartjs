<template>
  <div>
      <input type="checkbox" v-model="selectAll" @click="toggleAll($event)">
      <label>All</label>
      <br>
      <input type="checkbox" value="Navy" v-model="checkedNames" @click="toggleDivision($event)" :disabled="selectAll">
      <label>Navy</label>
      <br>
      <input type="checkbox" value="Army" v-model="checkedNames" @click="toggleDivision($event)" :disabled="selectAll">
      <label>Army</label>
      <br>
      <input type="checkbox" value="Air Forces" v-model="checkedNames" @click="toggleDivision($event)" :disabled="selectAll">
      <label>Air Forces</label>
      <br>
      <input type="checkbox" value="Marine Corps" v-model="checkedNames" @click="toggleDivision($event)" :disabled="selectAll">
      <label>Marine Corps</label>
      <br>
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
    methods: {
        toggleDivision(event){
            if(event.target.checked){
                this.checkedNames.push(event.target.value);
            } else{
                const index = this.checkedNames.indexOf(event.target.value);
                this.checkedNames.splice(index, 1);
            }
            this.$store.commit('setCheckedNames', this.checkedNames);
        },
        toggleAll(event){
            if(event.target.checked){
                this.checkedNames = ["Navy", "Army", "Air Forces", "Marine Corps"];
            } else {
                this.checkedNames = [];
            }
            this.$store.commit('setCheckedNames', this.checkedNames);
        }
    }
}
</script>

<style>

</style>