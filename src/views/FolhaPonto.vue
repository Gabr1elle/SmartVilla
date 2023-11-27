<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Folha de Ponto</h2>
    <form @submit.prevent="adicionarRegistro">
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="name" class="form-label">Funcionário</label>
          <input
            v-model="novoRegistro.nome"
            type="text"
            class="form-control bg-custom bg-white rounded-pill text-dark"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="cpf" class="form-label">CPF</label>
          <input
            v-model="novoRegistro.cpf"
            type="number"
            class="form-control bg-custom bg-white rounded-pill text-dark"
            required
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="funcao" class="form-label">Função</label>
          <input
            v-model="novoRegistro.funcao"
            type="text"
            class="form-control bg-custom bg-white rounded-pill text-dark"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="data" class="form-label">Data</label>
          <input
            v-model="novoRegistro.data"
            type="date"
            class="form-control bg-custom bg-white rounded-pill text-dark"
            required
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="entrada" class="form-label">Entrada</label>
          <input
            v-model="novoRegistro.entrada"
            type="time"
            class="form-control bg-custom bg-white rounded-pill text-dark"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="almoco" class="form-label">Início Almoço</label>
          <input
            v-model="novoRegistro.almoco"
            type="time"
            class="form-control bg-custom bg-white rounded-pill text-dark"
            required
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="volta" class="form-label">Volta Almoço</label>
          <input
            v-model="novoRegistro.volta"
            type="time"
            class="form-control bg-custom bg-white rounded-pill text-dark"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="saida" class="form-label">Saída</label>
          <input
            v-model="novoRegistro.saida"
            type="time"
            class="form-control bg-custom bg-white rounded-pill text-dark bg-custom bg-white rounded-pill text-dark "
            required
          />
        </div>
      </div>
      <div>
          <button
            type="submit"
            class="btn btn-white rounded-pill btn-lg bg-white text-dark bg-custom"
            style="width: 200px"
            @click="submitF"
          >
            Registrar
          </button>
      </div>

    </form>

    <table class="col-md-2 table mt-4 mb-4">
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Função</th>
          <th>Data</th>
          <th>Entrada</th>
          <th>Início Almoço</th>
          <th>Volta Almoço</th>
          <th>Saída</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(registro, index) in registros" :key="index">
          <td>{{ registro.nome }}</td>
          <td>{{ registro.cpf }}</td>
          <td>{{ registro.funcao }}</td>
          <td>{{ registro.data }}</td>
          <td>{{ registro.entrada }}</td>
          <td>{{ registro.almoco }}</td>
          <td>{{ registro.volta }}</td>
          <td>{{ registro.saida }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <!-- botao voltar -->
    <button
      type="button"
      class="sair position-absolute top-0 start-0 m-3"
      @click="logout"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const novoRegistro = ref({
  nome: "",
  cpf: "",
  funcao: "",
  data: "",
  entrada: "",
  almoco: "",
  volta: "",
  saida: "",
});

const registros = ref([]);

function adicionarRegistro() {
  registros.value.push({
    nome: novoRegistro.value.nome,
    cpf: novoRegistro.value.cpf,
    funcao: novoRegistro.value.funcao,
    data: novoRegistro.value.data,
    entrada: novoRegistro.value.entrada,
    almoco: novoRegistro.value.almoco,
    volta: novoRegistro.value.volta,
    saida: novoRegistro.value.saida,
  });

  // Limpa os campos após adicionar um registro
  novoRegistro.value = {
    nome: "",
    cpf: "",
    funcao: "",
    data: "",
    entrada: "",
    almoco: "",
    volta: "",
    saida: "",
  };
}

const logout = () => {
  // Redirecione para a página de Dashboard
  router.push({ name: "dashboard" });
};
</script>

<style scoped>
.campo-custom {
  color: #d9d9d9; /* Substitua pelo seu código de cor personalizado para o texto */
}
.sair {
  background-color: #D9D9D9;
  padding: 10px 20px;
  border-radius: 10px;
}
</style>
