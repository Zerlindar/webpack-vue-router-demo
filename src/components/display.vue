<template>
    <div>
      <p>{{title}}</p>
        <h3 class = "c" id = "i" v-model = "counterValue" :value = "counterValue" @click = "getEvent($event)">state的数值为： {{counterValue}}</h3>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
    export default {
      methods: {
        getEvent(e){
          console.log("event" , e);
        }
      },
      computed: {
        counterValue() {
          return this.$store.getters.getCount;
        }
      },
//      props: ['title'],
      props: {
//        title: String,
        title: {
          type: String,
          required: true
        }
      },
    }
</script>
