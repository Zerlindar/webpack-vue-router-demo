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
          return this.$store.getters.getCount;
        }
      }
    }
</script>
