<template>
  <div>
    <h2>Stock</h2>
    <br />

    <!-- Plant/Seed amount -->

    <div v-for="(plant, index) in stock" :key="`${plant.name}-${index}`">
      <div v-if="plant.found">
        <h4>{{ plant.label }}</h4>
        <p>Seeds x{{ plant.seedAmount }}</p>
        <p>Harvested x{{ plant.plantAmount }}</p>

        <!-- Seed planting -->

        <button
          class="btn btn-success"
          :disabled="plant.seedAmount <= 0 || numberOfAvailableSlots <= 0"
          @click="plantSeed(plant.name)"
        >
          Plant {{ plant.label }} Seeds
        </button>

        <br />
        <br />

        <!-- Seed making -->

        <button
          class="btn btn-success"
          :disabled="plant.plantAmount <= 0"
          @click="makeSeed(plant.name)"
        >
          Make {{ plant.label }} Seeds
        </button>

        <br />
        <br />

        <h5 class="text-primary">
          x{{ plants[plant.name].seedsPerPlant }} Seeds per plant
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    plants() {
      return this.$store.getters.getPlants;
    },

    garden() {
      return this.$store.getters.getGarden;
    },

    numberOfAvailableSlots() {
      return this.$store.getters.getNumberOfAvailableSlots;
    },

    stock() {
      return this.$store.getters.getStock;
    },
  },

  methods: {
    plantSeed(plant) {
      this.$store.dispatch("plantSeed", plant);
    },

    makeSeed(plant) {
      this.$store.dispatch("makeSeed", plant);
    },
  },
};
</script>

<style scoped>
button {
  width: 200px;
}
</style>