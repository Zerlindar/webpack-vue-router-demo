<template>
    <div>
        <h2>表单元素绑定</h2>
        <div v-for="(key, value) in checkNames">
            <input type="checkbox" id="{{value}}" v-model="checkedNames[key]">
            <label for="{{value}}">value: {{value}}  key: {{key}}</label>
        </div>
        <br>
        <span>Checked names: {{ checkedNames }}  first ->{{checkedNames.first}}</span>

        <div v-for="(index, value) in radioNmaes">
            <input type="radio" id="{{value}}" value="{{value}}" v-model="radioNames">
            <label for="{{value}}">{{value}}</label>
        </div>
        <br>
        <span>Picked: {{ radioNames }}</span>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                checkedNames: {},
                radioNames: "",
                checkNames: {first: "Jack", secend: "John", third: "Mike"},
                radioNmaes: ["Tom", "Cindy", "Jay"]
            }
        }
    }
</script>