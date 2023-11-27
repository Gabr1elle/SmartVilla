<template> 
    <div class="text-center p-2">
        <img src="../assets/Component4.png" alt="">
    </div>
    <div class="container">
      <img src="../assets/planilha.jpg" class="imagem-centralizada">
    </div>
    <div
        class="d-flex align-items-center justify-content-center mt-3"
        aria-label="Basic mixed styles example"
      >
        <button
          type="submit"
          class="btn btn-white rounded-pill btn-lg bg-white text-dark bg-custom mt-2"
          style="width: 200px"
        >
          Imprimir
        </button>
      </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;

  }
  
  .imagem-centralizada {
    max-width: 90%;
    height: auto;
  }
  </style>
  