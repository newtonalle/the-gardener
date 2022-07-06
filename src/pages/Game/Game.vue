<template>
  <div class="text-center">
    <div class="container">
      <div class="row">
        <div class="col-sm"><garden /></div>
        <div class="col-sm"><stock /></div>
        <div class="col-sm"><mixing /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Garden from "./components/Garden.vue";
import Stock from "./components/Stock.vue";
import Mixing from "./components/Mixing.vue";

export default {
  data: () => ({
    setIntervalId: 0,
  }),

  components: { Garden, Stock, Mixing },

  methods: {
    resetState() {
      this.$store.dispatch("resetState");
    },

    goToTutorial() {
      this.$router.push({ name: "tutorial" });
    },

    goToAlmanac() {
      this.$router.push({ name: "almanac" });
    },

    updateGame() {
      this.$store.dispatch("updateGame");
    },
  },

  created() {
    this.setIntervalId = setInterval(() => {
      this.updateGame();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.setIntervalId);
  },
};
</script>

<style scoped>
button {
  width: 150px;
}
</style>