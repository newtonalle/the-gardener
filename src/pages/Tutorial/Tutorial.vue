<template>
  <div class="text-center">
    <h2>Como Jogar</h2>
    <br />
    <p class="fs-3">
      Seu objetivo nesse jogo é conseguir a maior variedade de plantas o
      possível:
    </p>
    <br />
    <p class="fs-4">
      - Para ganhar uma planta plante suas sementes e espere ela crescer...
    </p>

    <p class="fs-4">
      - Para ganhar sementes de uma planta use a planta que você colheu e
      transforme-a em mais sementes
    </p>

    <p class="fs-4">
      - Para ganhar uma nova variedade de planta misture as sementes de duas
      plantas, criando uma planta híbrida!
    </p>

    <p class="fs-4">
      - Regue as plantas para duplicar a velocidade com que crescem!
    </p>

    <p class="fs-4">
      - A cada nova variedade de planta que você descubrir ganhará mais um
      espaço no seu jardim!
    </p>

    <p class="fs-4">
      - A cada iteração feita com suas plantas iniciais, a chance de uma
      combinação dar resultado diminui!
    </p>
    <br />
    <button @click="goToGame" class="btn btn-success">
      Voltar para o jogo
    </button>
  </div>
</template>

<script>
export default {
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