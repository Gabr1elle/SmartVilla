<template>
  <div>
    <h2 class="text-center p-3">Cadastro de Funcionário</h2>
  </div>
  <div class="container justify-content-center mt-5">
    <form class="form">
      <div class="row">
        <div class="col-md-6 mb-2">
          <label for="nome" class="form-label">Nome</label>
          <input type="text" class="form-control bg-custom" id="nome" />
        </div>
        <div class="col-md-6 mb-2">
          <label for="sobrenome" class="form-label">Sobrenome</label>
          <input type="text" class="form-control bg-custom" id="sobrenome" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-2">
          <label for="email" class="form-label">E-mail</label>
          <input type="email" class="form-control bg-custom" id="email" />
        </div>
        <div class="col-md-6 mb-2">
          <label for="cargo" class="form-label">Cargo</label>
          <input type="text" class="form-control bg-custom" id="cargo" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-2">
          <label for="salario" class="form-label">Salário</label>
          <input type="number" class="form-control bg-custom valor" id="salario" />
        </div>
        <div class="col-md-6 mb-2">
          <label for="dataAdmissao" class="form-label">Data de Admissão</label>
          <input type="date" class="form-control bg-custom" id="dataAdmissao" />
        </div>
      </div>
      <!-- ... outros campos existentes ... -->
      <div class="row">
        <div class="col-md-6 mb-2">
          <label for="pis" class="form-label">PIS</label>
          <input type="text" class="form-control bg-custom" id="pis" />
        </div>
        <div class="col-md-6 mb-2">
          <label for="cpf" class="form-label">CPF</label>
          <input type="text" class="form-control bg-custom" id="cpf" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-2">
          <label for="rg" class="form-label">RG</label>
          <input type="text" class="form-control bg-custom" id="rg" />
        </div>
        <div class="col-md-6 mb-2">
          <label for="endereco" class="form-label">Endereço com Rua</label>
          <input type="text" class="form-control bg-custom" id="endereco" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-2">
          <label for="cep" class="form-label">CEP</label>
          <input type="text" class="form-control bg-custom" id="cep" />
        </div>
        <div class="col-md-6 mb-2">
          <label for="cidade" class="form-label">Cidade</label>
          <input type="text" class="form-control bg-custom" id="cidade" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-2">
          <label for="pais" class="form-label">País</label>
          <input type="text" class="form-control bg-custom" id="pais" />
        </div>
        <div class="col-md-6 mb-2">
          <label for="nomeMae" class="form-label">Nome da Mãe</label>
          <input type="text" class="form-control bg-custom" id="nomeMae" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-2">
          <label for="id" class="form-label">ID</label>
            <input type="number" class="form-control bg-custom" id="ID" />
        </div>
        </div>
      <div class="d-flex align-items-center justify-content-center mt-3" aria-label="Basic mixed styles example">
        <button
          type="submit"
          class="btn btn-white rounded-pill btn-lg bg-white text-dark bg-custom"
          style="width: 200px"
          @click="submitForm"
        >
          Cadastrar
        </button>
      </div>
    </form>
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
  import { useRouter } from "vue-router";

  const router = useRouter();

    // Redirecione para a página de Dashboard
    const logout = () => {
      router.push({ name: "dados" });
    };


</script>
  
  <style scoped>
  .bg-custom {
      background-color: #D9D9D9;
      color: black;
      font-family: Helvetica;
      font-weight: bold;
  
  }
  .sair {
  background-color: #d9d9d9;
  padding: 10px 20px;
  border-radius: 10px;
}
 </style>
  