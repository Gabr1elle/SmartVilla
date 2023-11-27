<template>
  <div class="container py-5">
    <h2 class="text-center py-4">Cadastre sua empresa!</h2>

    <form class="row g-3" @submit.prevent="login">
      <div class="col-md-6">
        <label for="inputCnpj" class="form-label">CNPJ</label>
        <input
          type="cnpj"
          class="form-control bg-secondary text-white"
          id="inputCnpj"
        />
      </div>
      <div class="col-md-6">
        <label for="inputSenha" class="form-label">Senha</label>
        <input
          type="password"
          class="form-control bg-secondary text-white"
          id="inputSenha"
        />
      </div>

      <div class="col-md-12">
        <label for="inputName" class="form-label">Nome da Empresa</label>
        <input
          type="name"
          class="form-control bg-secondary text-white"
          id="inputName4"
        />
      </div>

      <div class="col-12">
        <label for="inputAddress" class="form-label">Endereço</label>
        <input
          type="text"
          class="form-control bg-secondary text-white"
          id="inputAddress"
        />
      </div>
      <div class="col-12">
        <label for="inputComplement" class="form-label">Complemento</label>
        <input
          type="text"
          class="form-control bg-secondary text-white"
          id="inputComplement"
        />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Cidade</label>
        <input
          type="text"
          class="form-control bg-secondary text-white"
          id="inputCity"
        />
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">Estado</label>
        <select id="inputState" class="form-select bg-secondary text-white">
          <option selected>AL</option>
          <option selected>AP</option>
          <option selected>AM</option>
          <option selected>BA</option>
          <option selected>SP</option>
          <option>Outros</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">País</label>
        <input
          type="text"
          class="form-control bg-secondary text-white"
          id="inputZip"
        />
      </div>
      <div
        class="col-12 d-flex align-items-center justify-content-center py-4"
        aria-label="Basic mixed styles example"
      >
        <a
          href="/login"
          class="btn btn-secondary rounded-pill btn-sm bg-secondary text-white"
          style="width: 200px"
          @click="cadastrarEmpresa"
        >
          Cadastrar empresa
        </a>
      </div>
    </form>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const cnpj = ref('');
const senha = ref('');
const nomeEmpresa = ref('');

const cadastrarEmpresa = () => {
  // Armazene temporariamente os dados no localStorage
  localStorage.setItem('cnpj', cnpj.value);
  localStorage.setItem('senha', senha.value);
  localStorage.setItem('nomeEmpresa', nomeEmpresa.value);

  // ... seu código de redirecionamento ou lógica adicional ...
};
</script>

<style scoped></style>
