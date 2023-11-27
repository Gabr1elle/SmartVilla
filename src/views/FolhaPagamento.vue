<template>
  <div class="container p-5">
    <h2 class="text-center mb-4">Folha de Pagamento</h2>

    <!-- Pesquisa por CPF -->
    <div class="row mb-3">
      <div class="col-md-6">
        <label for="cpf" class="form-label font"
          ><h4>Pesquisar por CPF</h4></label
        >
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-8">
            <input
              v-model="cpfPesquisa"
              type="text"
              class="btn btn-white btn-sm bg-white text-dark bg-custom"
            />
          </div>
          <div class="col-md-4">
            <button
              class="btn btn-primary btn btn-white btn-sm bg-white text-dark bg-custom"
              @click="pesquisarFuncionario"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Dados do Funcionário -->
    <div v-if="funcionarioEncontrado">
      <h4 class="mb-3">Dados do Funcionário</h4>
      <p><strong>Nome:</strong> {{ funcionario.nome }}</p>
      <p><strong>Setor:</strong> {{ funcionario.setor }}</p>
      <p><strong>Admissão:</strong> {{ funcionario.admissao }}</p>

      <!-- Lançamentos na Folha -->
      <h4 class="mt-4 mb-3">Lançamentos na Folha</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(lancto, index) in lancamentos" :key="index">
            <td>{{ lancto.descricao }}</td>
            <td>{{ lancto.valor }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Totais -->
      <h4 class="mt-4">Totais</h4>
      <p><strong>Salário Bruto:</strong> {{ calcularSalarioBruto() }}</p>
      <p><strong>Desconto:</strong> {{ desconto }}</p>
      <p><strong>Salário Líquido:</strong> {{ calcularSalarioLiquido() }}</p>
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
import { useRouter } from "vue-router"; // Importe o Vue Router

export default {
  setup() {
    const router = useRouter(); // Obtenha a instância do Vue Router

    const logout = () => {
      // Redirecione para a página de Dashboard
      router.push({ name: "dashboard" });
    };

    return { logout };
  },

  data() {
    return {
      cpfPesquisa: "",
      funcionarioEncontrado: false,
      funcionario: {},
      lancamentos: [
        { descricao: "Salário", valor: 3000 },
        { descricao: "INSS", valor: 200 },
        { descricao: "IRRF", valor: 150 },
        { descricao: "DSR", valor: 500 },
        { descricao: "Vale Transporte", valor: 100 },
        // Adicione outros lançamentos conforme necessário
      ],
      desconto: 0, // Adicione o desconto aqui
    };
  },

  methods: {
    pesquisarFuncionario() {
      // Simular pesquisa de funcionário por CPF (pode ser substituído por lógica real)
      this.funcionario = {
        nome: "João Silva",
        setor: "RH",
        admissao: "01/01/2022",
        // Adicione outros campos conforme necessário
      };
      this.funcionarioEncontrado = true;
    },
    calcularSalarioBruto() {
      return this.lancamentos.reduce(
        (total, lancto) => total + lancto.valor,
        0
      );
    },
    calcularSalarioLiquido() {
      return this.calcularSalarioBruto() - this.desconto;
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
