<template>
  <div class="text-center">
    <h2>Almanac</h2>
    <p>You got {{ uniquePlantsFound }}/68 unique plants!</p>
    <br />
    <br />
    <div v-for="(plant, index) in stock" :key="`${plant}-${index}`">
      <div v-if="plant.found">
        <h3>{{ plant.label }}</h3>
        <br />
        <img
          :src="require(`../../assets/${plant.name}/SproutStage3.png`)"
          width="300px"
          height="300px"
        />
        <br />
        <br />
        <p>{{ plant.lore }}</p>
        <p>Growth Time: {{ plants[plant.name].growthTime }}s</p>
        <p>Type: {{ plants[plant.name].type }}</p>
        <br />
        <br />
      </div>
    </div>
    <button @click="goToGame" class="btn btn-success">Back to Game</button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  computed: {
    plants() {
      return this.$store.getters.getPlants;
    },

    stock() {
      return this.$store.getters.getStock;
    },

    uniquePlantsFound() {
      return this.$store.getters.getNumberOfUniquePlantsFound;
    },
  },

  methods: {
    goToGame() {
      this.$router.push({ name: "game" });
    },
  },
};
</script>

<style scoped>
button {
  width: 200px;
}
</style>