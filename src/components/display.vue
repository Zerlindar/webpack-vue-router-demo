<template>
    <div>
        <h3>state的数值为： {{counterValue}}</h3>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
    export default {
      computed: {
        counterValue() {
          console.log("getters count； ", this.$store);
          return this.$store.state.count;
        }
      }
    }
</script>
