<template>
  <button @click="plusCounter">plus</button>
  <button @click="minusCounter">minus</button>
  <button @click="doubleCounter">double</button>
</template>

<script>
export default {

    methods: {
        plusCounter() {
            console.log("add")
            this.$store.commit('plusCounter', 10);
        },
        minusCounter() {
            this.$store.commit('minusCounter');
        }
    },
    computed: {
        // doubleCounter() {
        //     console.log("double")
        //     return this.$store.getters.doubleCounter * 2;
        // }
        doubleCounter() {
            console.log("clicked")
            return this.$store.counter * 2;
        }
    }
}
</script>

<style>

</style>