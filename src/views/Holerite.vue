<template>
  <div class="d-flex align-items-center justify-content-center mt-5">
    <img src="../assets/Component4.png" class="w-full" />
  </div>
  <div class="container mt-5">
    <div class="mb-3">
      <label for="cpfInput" class="form-label">CPF:</label>
      <input
        type="text"
        class="form-control btn btn-white bg-white text-dark"
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

<script>

import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  // Redireciona para a página de Dashboard
  router.push({ name: "dashboard" });
  
};

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
        "123.456.789-01": {
          nome: "João Silva",
          cpf: "123.456.789-01",
          salarioBase: 5000,
          IRRF: 500,
          INSS: 150,
          VT: 200,
          mes: "Novembro",
        },
        "123.456.789-01": {
          nome: "João Silva",
          cpf: "123.456.789-01",
          salarioBase: 5000,
          IRRF: 500,
          INSS: 150,
          VT: 200,
          mes: "Novembro",
        },
        "123.456.789-01": {
          nome: "João Silva",
          cpf: "123.456.789-01",
          salarioBase: 5000,
          IRRF: 500,
          INSS: 150,
          VT: 200,
          mes: "Novembro",
        },
        "123.456.789-01": {
          nome: "João Silva",
          cpf: "123.456.789-01",
          salarioBase: 5000,
          IRRF: 200,
          INSS: 150,
          VT: 200,
          mes: "Novembro",
        },
        "123.456.789-02": {
          nome: "	Nathan Estevam Leite Mayerhofer",
          cpf: "123.456.789-02",
          salarioBase: 3500,
          IRRF: 200,
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
.sair {
  background-color: #D9D9D9;
  padding: 10px 20px;
  border-radius: 10px;
}
</style>
