<template>
    <div>
      <h2 class=" text-center p-3">Cadastro de Funcionário</h2>
    </div>
    <div class="container justify-content-center mt-5">
      <form class="form">
        <div class="row ">
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
            <label for="dataNascimento" class="form-label"
              >Data de Nascimento</label
            >
            <input type="date" class="form-control bg-custom" id="dataNascimento" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-2">
            <label for="Vt" class="form-label">VT</label>
            <input type="number" class="form-control bg-custom valor " id="Vt" />
          </div>
          <div class="col-md-6 mb-2">
            <label for="IRRF" class="form-label">IRRF</label>
            <input type="number" class="form-control bg-custom valor" id="IRRF" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-2">
            <label for="INSS" class="form-label">INSS</label>
            <input type="number" class="form-control bg-custom valor" id="INSS" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-2">
            <label for="complemento" class="form-label">Complemento</label>
            <input type="text" class="form-control bg-custom" id="complemento" />
          </div>
        </div>
        <div
          class="d-flex align-items-center justify-content-center mt-3"
          aria-label="Basic mixed styles example"
        >
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
  </template>
  
  <script setup></script>
  
  <style scoped>
  .bg-custom {
      background-color: #D9D9D9;
      color: black;
      font-family: Helvetica;
      font-weight: bold;
  
  }
  
  .valor::before {
      content: "R$";
  }</style>
  