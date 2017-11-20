<template>
  <div class="input-container-wrapper">
    <slot name="header"></slot>
    <div v-for="(value, key) in checkNames">
      <input type="checkbox" :value="value" v-model="checkedNames">
      <label>val: {{value}} key: {{key}}</label>
    </div>
    <br>

    <span>Checked names: {{checkedNames}}</span>

    <div v-for="(value, index) in radioNmaes">
      <input type="radio" :value="value" v-model="radioNames">
      <label>{{value}}</label>
    </div>
    <br>
    <span>Picked: {{ radioNames }}</span>
  </div>
</template>

<script type="text/javascript">
  export default {
    data(){
      return {
        checkedNames: ["Jack", "John"],
        radioNames: "Tom",
        checkNames: {first: "Jack", secend: "John", third: "Mike"},
        radioNmaes: ["Tom", "Cindy", "Jay"]
      }
    }
  }
</script>
