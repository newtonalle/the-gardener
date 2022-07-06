<template>
  <div>
    <!-- <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">The Gardener</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Pricing</a>
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
            <form class="d-flex">
              <button class="btn btn-outline-danger" type="submit">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav> -->

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{ name: 'game' }"
          >The Gardener</router-link
        >

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link
              :class="['nav-link', $route.name === 'game' ? 'active' : '']"
              :to="{ name: 'game' }"
              >Game</router-link
            >
            <router-link
              :class="['nav-link', $route.name === 'tutorial' ? 'active' : '']"
              :to="{ name: 'tutorial' }"
              >Tutorial</router-link
            >
            <router-link
              :class="['nav-link', $route.name === 'almanac' ? 'active' : '']"
              :to="{ name: 'almanac' }"
              >Almanac</router-link
            >
            <form class="d-flex">
              <button
                class="btn btn-outline-danger"
                style="margin-left: 10px"
                type="reset"
                @click="resetState"
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    <br />
  </div>
</template>

<script>
export default {
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
  },
};
</script>
