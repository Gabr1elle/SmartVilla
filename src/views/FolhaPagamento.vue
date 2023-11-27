<template>
  <div class="container p-5">
    <h2 class="text-center mb-4">Folha de Pagamento</h2>

    <!-- Pesquisa por CPF -->
    <div class="row mb-3">
      <div class="col-md-6">
        <label for="cpf" class="form-label font"><h4>Pesquisar por CPF</h4></label>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-8">
            <input v-model="cpfPesquisa" type="text" class="btn btn-white btn-sm bg-white text-dark bg-custom" />
          </div>
          <div class="col-md-4">
            <button class="btn btn-primary btn btn-white btn-sm bg-white text-dark bg-custom" @click="pesquisarFuncionario">OK</button>
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
</template>

<script>
export default {
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
      return this.lancamentos.reduce((total, lancto) => total + lancto.valor, 0);
    },
    calcularSalarioLiquido() {
      return this.calcularSalarioBruto() - this.desconto;
    },
  },
};
</script>

<style scoped>
/* Adicione estilos personalizados conforme necessário */
</style>


