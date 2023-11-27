<template>
  <div class="container p-5">
    <h2 class="text-center mb-4">Programação de Férias</h2>

    <form @submit.prevent="programarFerias">
      <div class="mb-3">
        <label for="nome" class="form-label">Nome do Funcionário</label>
        <input
          v-model="nome"
          type="text"
          class="form-control bg-custom bg-white rounded-pill text-dark"
          required
        />
      </div>
      <div class="mb-3">
        <label for="cpf" class="form-label">CPF do Funcionário</label>
        <input
          v-model="cpf"
          type="number"
          class="form-control bg-custom bg-white rounded-pill text-dark"
          required
        />
      </div>
      <div class="mb-3">
        <label for="departamento" class="form-label"
          >Departamento do Funcionário</label
        >
        <input
          v-model="departamento"
          type="text"
          class="form-control bg-custom bg-white rounded-pill text-dark"
          required
        />
      </div>

      <div class="mb-3">
        <label for="dataInicio" class="form-label">Data de Início</label>
        <input
          v-model="dataInicio"
          type="date"
          class="form-control bg-custom bg-white rounded-pill text-dark"
          required
        />
      </div>

      <div class="mb-3">
        <label for="dataFim" class="form-label">Data de Fim</label>
        <input
          v-model="dataFim"
          type="date"
          class="form-control bg-custom bg-white rounded-pill text-dark"
          required
        />
      </div>

      <div
        class="d-flex align-items-center justify-content-center mt-3"
        aria-label="Basic mixed styles example"
      >
        <button
          type="submit"
          class="btn btn-white rounded-pill btn-lg bg-white text-dark bg-custom"
          style="width: 200px"
          @click="submit"
        >
          Cadastrar
        </button>
      </div>
    </form>

    <div
      v-if="feriasProgramadas.length > 0"
      class="mt-4 form-control bg-custom bg-white text-dark"
    >
      <h2>Férias Programadas</h2>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(ferias, index) in feriasProgramadas"
          :key="index"
        >
          <strong>{{ ferias.nome }}</strong> -
          {{ formatarData(ferias.dataInicio) }} a
          {{ formatarData(ferias.dataFim) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      cpf: "",
      departamento: "",
      dataInicio: "",
      dataFim: "",
      feriasProgramadas: [],
    };
  },
  methods: {
    programarFerias() {
      // Validações e lógica para programar férias
      if (this.nome && this.dataInicio && this.dataFim) {
        this.feriasProgramadas.push({
          nome: this.nome,
          cpf: this.cpf,
          departamento: this.departamento,
          dataInicio: this.dataInicio,
          dataFim: this.dataFim,
        });

        // Limpar campos após programar férias
        this.nome = "";
        this.cpf = "";
        this.departamento = "";
        this.dataInicio = "";
        this.dataFim = "";
      }
    },

    formatarData(data) {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return new Date(data).toLocaleDateString("pt-BR", options);
    },
  },
};
</script>

<style scoped></style>
