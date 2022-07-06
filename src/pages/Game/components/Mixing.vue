<template>
  <div>
    <h2>Seed Mixing</h2>
    <br />
    <br />

    <!-- Seed Mixing -->

    <div class="container">
      <button
        :disabled="
          mainPlant === '' ||
          secondaryPlant === '' ||
          (stock[mainPlant].seedAmount <= 1 && mainPlant === secondaryPlant) ||
          stock[mainPlant].seedAmount <= 0 ||
          stock[secondaryPlant].seedAmount <= 0
        "
        @click="mixSeeds"
        class="btn btn-primary"
      >
        Mix Seeds
      </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50%" />
            <th scope="col" style="width: 50%" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <div class="dropdown">
                <button
                  class="btn btn-success dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Main Plant
                </button>
                <ul class="dropdown-menu">
                  <li
                    v-for="(plant, index) in stock"
                    :key="`${index}-${plant.label}`"
                  >
                    <a
                      v-if="plant.name === mainPlant && plant.found"
                      class="dropdown-item active"
                      >{{ plant.label }}</a
                    >
                    <a
                      v-if="plant.name != mainPlant && plant.found"
                      class="dropdown-item"
                      @click="mainPlant = plant.name"
                      >{{ plant.label }}</a
                    >
                  </li>
                </ul>
                <br />
                <br />
                <h5 class="fw-bold" v-if="mainPlant != ''">
                  {{ plants[mainPlant].label }}
                </h5>
              </div>
            </th>
            <td>
              <div class="dropdown">
                <button
                  class="btn btn-success dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Secondary Plant
                </button>
                <ul class="dropdown-menu">
                  <li
                    v-for="(plant, index) in stock"
                    :key="`${index}-${plant.label}`"
                  >
                    <a
                      v-if="plant.name === secondaryPlant && plant.found"
                      class="dropdown-item active"
                      >{{ plant.label }}</a
                    >
                    <a
                      v-if="plant.name != secondaryPlant && plant.found"
                      class="dropdown-item"
                      @click="secondaryPlant = plant.name"
                      >{{ plant.label }}</a
                    >
                  </li>
                </ul>
                <br />
                <br />
                <h5 class="fw-bold" v-if="secondaryPlant != ''">
                  {{ plants[secondaryPlant].label }}
                </h5>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Seed Mixing Log -->

    <h5
      v-for="(combination, index) in plantCombinationLog"
      :key="`${combination}-${index}`"
    >
      {{ combination }}
    </h5>

    <br />
    <br />

    <button
      v-if="plantCombinationLog.length > 0"
      @click="clearCombinationLog"
      class="btn btn-danger"
    >
      Clear Combination Log
    </button>

    <br />
    <br />
  </div>
</template>

<script>
export default {
  data: () => ({
    mainPlant: "",
    secondaryPlant: "",
  }),

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

    plantCombinationLog() {
      return this.$store.getters.getPlantCombinationLog;
    },
  },

  methods: {
    mixSeeds() {
      this.$store.dispatch("mixSeeds", {
        mainPlant: this.mainPlant,
        secondaryPlant: this.secondaryPlant,
      });
      this.mainPlant = "";
      this.secondaryPlant = "";
    },

    clearCombinationLog() {
      this.$store.dispatch("clearCombinationLog");
    },
  },
};
</script>

<style scoped>
button {
  width: 200px;
}
</style>