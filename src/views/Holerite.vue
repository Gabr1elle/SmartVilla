<template>
  <div class="d-flex align-items-center justify-content-center mt-5">
    <img src="../assets/Component4.png" class="w-full" />
  </div>
  <div class="container mt-5">
    <div class="mb-3">
      <label for="cpfInput" class="form-label">CPF:</label>
      <input
        type="text"
        class="form-control btn btn-white  bg-white text-dark"
        id="cpfInput"
        v-model="cpf"
      />
    </div>

    <button
      class="btn btn-white btn-sm bg-white text-dark"
      @click="emitirHolerite"
    >
      Emitir Holerite
    </button>

    <div v-if="holerite">
      <h2 class="mt-3">{{ holerite.mes }} - Holerite de {{ holerite.nome }}</h2>
      <p><strong>CPF:</strong> {{ holerite.cpf }}</p>
      <p>
        <strong>Salário Bruto:</strong> R$
        {{ holerite.salarioBase ? holerite.salarioBase.toFixed(2) : "N/A" }}
      </p>
      <p>
        <strong>VT:</strong> R$
        {{ holerite.VT ? holerite.VT.toFixed(2) : "N/A" }}
      </p>
      <p>
        <strong>INSS:</strong> R$
        {{ holerite.INSS ? holerite.INSS.toFixed(2) : "N/A" }}
      </p>
      <p>
        <strong>IRRF:</strong> R$
        {{ holerite.IRRF ? holerite.IRRF.toFixed(2) : "N/A" }}
      </p>
      <p><strong>Descontos:</strong> R$ {{ calcularDescontos().toFixed(2) }}</p>
      <p>
        <strong>Salário Líquido:</strong> R$
        {{ calcularSalarioLiquido().toFixed(2) }}
      </p>
      <!-- Adicione mais campos do holerite conforme necessário -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cpf: "",
      holerite: null,
      // Simulando dados do holerite
      holerites: {
        "123.456.789-01": {
          nome: "João Silva",
          cpf: "123.456.789-01",
          salarioBase: 5000,
          IRRF: 500,
          INSS: 150,
          VT: 200,
          mes: "Novembro",
        },
        // Adicione mais dados conforme necessário
      },
    };
  },
  methods: {
    emitirHolerite() {
      // Simulando a busca do holerite pelo CPF
      this.holerite = this.holerites[this.cpf] || null;
    },
    calcularDescontos() {
      if (this.holerite) {
        // Calcula os descontos (VT + INSS + IRRF)
        const descontos =
          (this.holerite.VT || 0) +
          (this.holerite.INSS || 0) +
          (this.holerite.IRRF || 0);
        return descontos;
      }
      return 0;
    },
    calcularSalarioLiquido() {
      if (this.holerite) {
        // Calcula o salário líquido (Salário Bruto - Descontos)
        const salarioLiquido =
          (this.holerite.salarioBase || 0) - this.calcularDescontos();
        return salarioLiquido;
      }
      return 0;
    },
  },
};
</script>

<style scoped>
/* Adicione estilos conforme necessário */
</style>
