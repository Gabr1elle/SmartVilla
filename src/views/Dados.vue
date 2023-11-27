<template>
  <div class="d-flex align-items-center justify-content-center">
    <img src="../assets/Component4.png" class="w-full p-5" />
  </div>
  <div class="container mt-5">
    <!-- Botões -->
    <div class="d-flex justify-content-between mb-4">
      <div class="col-6 mb-4">
        <!-- Botão 1 -->
        <button
          type="button"
          class="btn btn-custom"
          @click="redirectToPage('CadastrarFuncionario')" 
        >
          <div class="custom mb-3">
            <!-- Ícone do botão 1 -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 640 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
              />
            </svg>
          </div>
          Cadastrar Novo funcionário
        </button>
      </div>

      <div class="col-6 mb-4">
        <!-- Botão 2 -->
        <button
          type="button"
          class="btn btn-custom"
          @click="redirectToPage('DadosFuncionarios')"
        >
          <div class="custom mb-3">
            <!-- Ícone do botão 2 -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 640 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
              />
            </svg>
          </div>
          Dados dos Funcionários
        </button>
      </div>
    </div>
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

<!-- Restante do seu código Vue.js ... -->

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  // Redirecione para a página de Dashboard
  router.push({ name: "dashboard" });
};

const redirectToPage = (page) => {
  // Redirecionar para a página
  router.push("/" + page);
};
</script>

<style scoped>
.btn-custom {
  background-color: #D9D9D9;
  color: black;
  padding: 50px 50px;
  font-size: 20px;
  width: 90%;
  font-family: Helvetica;
  font-weight: bold;
  border-radius: 40px;
}
.sair {
  background-color: #D9D9D9;
  padding: 10px 20px;
  border-radius: 10px;
}
</style>
