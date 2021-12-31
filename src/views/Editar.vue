<template>
  <div class="container">
    <h1 class="my-4 fw-bold text-center">
      Editando la opinión de: {{ juego }}
    </h1>
    <form>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nombre:</label>
        <input
          type="text"
          class="form-control"
          id="exampleInput1"
          v-model="nombre"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Opiniones</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="opinion"
        ></textarea>
      </div>
      <button type="button" class="btn btn-secondary" @click="regresar">
        Regresar
      </button>
      <button
        type="button"
        class="btn btn-info"
        @click="actualizarOpinion(id - 1)"
      >
        Guardar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      juego: "",
      nombre: "",
      opinion: "",
    };
  },

  methods: {
    regresar() {
      this.$router.go(-1);
    },
    actualizarOpinion() {
      let data = {
        index: this.id - 1,
        opinion: {
          juego: this.filtrarOpiniones.juego,
          nombre: this.nombre,
          opinion: this.opinion,
        },
      };
      
      this.$store.commit("actualizarOpinion", data);
      alert(`${this.nombre}, ¡Tu opinión ha sido actualizada!`);
    
    },
  },

  computed: {
    traerId() {
      return this.$route.params.id - 1;
    },

    filtrarOpiniones() {
      return this.$store.getters.filtrarOpiniones(this.traerId);
    },
  },

  mounted() {
    this.nombre = this.filtrarOpiniones.nombre;
    this.opinion = this.filtrarOpiniones.opinion;
    this.juego = this.filtrarOpiniones.juego;
  },
};
</script>

<style scoped>
.btn {
  margin-right: 20px;
}
</style>