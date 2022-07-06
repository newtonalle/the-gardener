<template>
  <div class="text-center">
    <h2>Feliz aniversário!</h2>
    <p class="fs-4">Fiz esse jogo com muito carinho e espero que goste!</p>
    <p class="fs-4">
      Se você precisar de instruções você pode clicar no botão TUTORIAL ou me
      perguntar!
    </p>
    <br />
    <button @click="goToTutorial" class="btn btn-success">Tutorial</button>
    <br />
    <br />
    <button @click="startGame" class="btn btn-success">Começar o Jogo</button>
    <br />
    <br />
    <img src="../../assets/HipnoticGamesLogo.png" />
    <br />
    <br />
    <h3>Made by Hipnotic Games</h3>
    <br />
  </div>
</template>

<script>
export default {
  methods: {
    goToTutorial() {
      this.$router.push({ name: "tutorial" });
    },

    startGame() {
      this.$router.push({ name: "game" });
    },
  },
};
</script>

<style scoped>
button {
  width: 150px;
}
</style>