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
</template>

<script setup>
import { ref } from "vue";

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
</script>

<style scoped>
.campo-custom {
  color: #d9d9d9; /* Substitua pelo seu código de cor personalizado para o texto */
}
</style>
