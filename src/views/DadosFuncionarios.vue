<template>
  <div class="container">
    <div class="mb-4">
      <h1 class="text-center p-4">Dados dos Funcionários</h1>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Pesquisar por ID"
          v-model="searchQuery"
        />
        <button class="btn btn-secondary" @click="searchEmployee">
          Pesquisar
        </button>
      </div>
    </div>

    <!-- Tabela de dados dos funcionários -->
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Admissão</th>
          <th>Desconto VT</th>
          <th>INSS</th>
          <th>IRRF</th>
          <th>VR</th>
          <th>Salário</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        <!-- Utilize v-for para percorrer a lista de funcionários filtrados -->
        <tr v-for="employee in filteredEmployees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.position }}</td>
          <td>{{ employee.admissionDate }}</td>
          <td>{{ employee.vtDiscount }}</td>
          <td>{{ employee.inss }}</td>
          <td>{{ employee.irrf }}</td>
          <td>{{ employee.vr }}</td>
          <td>{{ employee.salario }}</td>
          <td>
            <button class="btn btn-warning" @click="showDetails(employee.id)">
              Ver Mais
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Seção de detalhes do funcionário -->
    <div v-if="selectedEmployee" class="mb-5">
      <h2>Detalhes do Funcionário</h2>
      <p>ID: {{ selectedEmployee.id }}</p>
      <p>Nome: {{ selectedEmployee.name }}</p>
      <p>Cargp: {{ selectedEmployee.position }}</p>
      <p>Admissão: {{ selectedEmployee.admissionDate }}</p>
      <p>VT: {{ selectedEmployee.vtDiscount }}</p>
      <p>INSS: {{ selectedEmployee.inss }}</p>
      <p>VR: {{ selectedEmployee.vr }}</p>
      <p>Salário: {{ selectedEmployee.irrf }}</p>
      <p>Salário: {{ selectedEmployee.salario }}</p>

      <button class="btn btn-danger" @click="hideDetails">
        Fechar Detalhes
      </button>

      <!-- Imprimir -->
      <button v-if="selectedEmployee"
      type="submit"
      class="btn btn-warning"
      style="margin-left: 10px;"
    >
      Imprimir
    </button>
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

<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

// Redirecione
const logout = () => {
  router.push({ name: "dados" });
};

const employees = ref([
  {
    id: 92482,
    name: "Nathan Estevam Leite Mayerhofer",
    position: "Comercial",
    admissionDate: "01-01-2022",
    vtDiscount: "6%",
    inss: "7,5%",
    vr: "8%",
    irrf: "7,5%",
    salario: "R$3.500,00",
  },
  {
    id: 92483,
    name: "Vivaldo Figueiredo Morais",
    position: "Marketing",
    admissionDate: "31-01-2023",
    vtDiscount: "6%",
    inss: "7,5%",
    vr: "8%",
    irrf: "7,5%",
    salario: "R$3.500,00",
  },
  {
    id: 23185,
    name: "Gabrielle Zago Valle França",
    position: "Recursos Humanos",
    admissionDate: "29-12-2022",
    vtDiscount: "6%",
    inss: "7,5%",
    vr: "8%",
    irrf: "7,5%",
    salario: "R$4.500,00",
  },
  {
    id: 99904,
    name: "Kamilly Ubaldo Gadelha",
    position: "Analista de Riscos",
    admissionDate: "12-04-2023",
    vtDiscount: "6%",
    inss: "7,5%",
    vr: "8%",
    irrf: "7,5%",
    salario: "R$5.500,00",
  },
  {
    id: 95131,
    name: "Valesca Santana",
    position: "Analista de TI",
    admissionDate: "18-05-2023",
    vtDiscount: "6%",
    inss: "7,5%",
    vr: "8%",
    irrf: "7,5%",
    salario: "R$3.500,00",
  },
  {
    id: 96851,
    name: "Carlos",
    position: "Analista de Dados",
    admissionDate: "2022-03-01",
    vtDiscount: "6%",
    inss: "7,5%",
    vr: "8%",
    irrf: "7,5%",
    salario: "R$6.000,00",
  },
  {
    id: 96852,
    name: "Ana Clara Rezende Pinho",
    position: "BDA",
    admissionDate: "01-01-2024",
    vtDiscount: "6%",
    inss: "7,5%",
    vr: "8%",
    irrf: "7,5%",
    salario: "R$6.500,00",
  },
  {
    id: 96851,
    name: "Carlos",
    position: "Analista de Dados",
    admissionDate: "25-02-2020",
    vtDiscount: "6%",
    inss: "7,5%",
    vr: "8%",
    irrf: "7,5%",
    salario: "R$6.000,00",
  },
  // Adicione mais funcionários conforme necessário
]);

const searchQuery = ref("");
const filteredEmployees = ref(employees.value);
const selectedEmployee = ref(null);

const searchEmployee = () => {
  const query = searchQuery.value.toLowerCase();
  if (query === "") {
    filteredEmployees.value = employees.value;
  } else {
    filteredEmployees.value = employees.value.filter((employee) =>
      employee.id.toString().includes(query)
    );
  }
};

const showDetails = (id) => {
  selectedEmployee.value = employees.value.find(
    (employee) => employee.id === id
  );
};

const hideDetails = () => {
  selectedEmployee.value = null;
};
</script>

<style scoped>
.sair {
  background-color: #bebcbc;
  padding: 10px 20px;
  border-radius: 10px;
}
</style>