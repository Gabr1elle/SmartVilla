<template>
  <div
    class="container d-flex align-items-center justify-content-center vh-100"
  >
    <div>
      <div class="d-flex align-items-center justify-content-center mb-4">
        <img src="../assets/Component4.png" class="w-full" />
      </div>
      <form @submit.prevent="submitForm">
        <div class="mb-1" style="width: 320px">
          <label for="cnpj" class="form-label"></label>
          <input
            type="text"
            class="form-control w-100 bg-white rounded-pill text-dark"
            id="cnpj"
            v-model="cnpj"
            aria-describedby="cnpjHelp"
            placeholder="CNPJ"
          />
        </div>
        <div class="mb-4">
          <label for="senha" class="form-label"></label>
          <input
            type="password"
            class="form-control bg-white rounded-pill"
            id="senha"
            v-model="senha"
            placeholder="Senha"
          />
        </div>
        <div
          class="d-flex align-items-center justify-content-center"
          aria-label="Basic mixed styles example"
        >
          <button
            type="submit"
            class="btn btn-white rounded-pill btn-sm bg-white text-dark"
            style="width: 200px"
            @click="submitForm"
          >
            Entrar
          </button>
        </div>
        <div class="d-flex align-items-center justify-content-center" @click="submitForm">
          <a href="/cadastrar" class="btn btn-link mt-2 text-white"
            >Cadastre-se agora!</a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const cnpj = ref('');
const senha = ref('');
const router = useRouter();

const submitForm = () => {
  // Obtenha as credenciais armazenadas no localStorage
  const storedCnpj = localStorage.getItem('cnpj');
  const storedSenha = localStorage.getItem('senha');

  // Compare com as credenciais inseridas
  if (cnpj.value === '52.801.988/0001-27' && senha.value === 'senha') {
    // Autenticação bem-sucedida, redirecionar para o dashboard
    router.push('/dashboard');
  } else {
    // Autenticação falhou, exiba uma mensagem de erro
    alert('CNPJ ou senha incorretos');
  }
};
</script>

<style scoped></style>
