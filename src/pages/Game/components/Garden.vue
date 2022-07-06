<template>
  <div>
    <h2>Garden</h2>
    <h4>({{ numberOfAvailableSlots }} slots available)</h4>

    <!-- Planted seeds/plants -->

    <p class="fs-5" v-if="garden.plants.length === 0">No seeds planted!</p>

    <div
      v-for="(plant, index) in garden.plants"
      :key="`${plant.label}-${index}`"
    >
      <p class="fs-5">Growing {{ plant.label }} ({{ plant.growthTime }}s)</p>
      <p v-if="plant.wateredTime > 0">Watered for {{ plant.wateredTime }}s</p>
      <button
        class="btn btn-primary"
        style="margin-right: 20px"
        :disabled="plant.wateredTime > 0"
        @click="waterPlant(index)"
      >
        Water
      </button>
      <button class="btn btn-danger" @click="removePlant(index)">Remove</button>
      <br />
      <br />

      <!-- Plant growth image logic -->

      <!-- Stage 1 (Lowest) -->

      <img
        v-if="plant.growthTime >= (plants[plant.name].growthTime / 3) * 2"
        :src="require(`../../../assets/${plant.name}/SproutStage1.png`)"
        width="300px"
        height="300px"
      />

      <!-- Stage 2 (Mid) -->

      <img
        v-if="
          plant.growthTime >= plants[plant.name].growthTime / 3 &&
          plant.growthTime < (plants[plant.name].growthTime / 3) * 2
        "
        :src="require(`../../../assets/${plant.name}/SproutStage2.png`)"
        width="300px"
        height="300px"
      />

      <!-- Stage 3 (Highest) -->

      <img
        v-if="
          plant.growthTime >= 0 &&
          plant.growthTime < plants[plant.name].growthTime / 3
        "
        :src="require(`../../../assets/${plant.name}/SproutStage3.png`)"
        width="300px"
        height="300px"
      />

      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    garden() {
      return this.$store.getters.getGarden;
    },
    plants() {
      return this.$store.getters.getPlants;
    },
    numberOfAvailableSlots() {
      return this.$store.getters.getNumberOfAvailableSlots;
    },
  },
  methods: {
    removePlant(index) {
      this.$store.dispatch("removePlant", index);
    },

    waterPlant(index) {
      this.$store.dispatch("waterPlant", index);
    },
  },
};
</script>

<style scoped>
button {
  width: 100px;
}
</style>
