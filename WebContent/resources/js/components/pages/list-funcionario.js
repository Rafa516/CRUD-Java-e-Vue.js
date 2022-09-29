var listFuncionario = Vue.component('list-funcionario', {
    template: `
      <div >
        <h4>Lista de Funcionários</h4>
        <table class="table">
          <tr>
            <th>Nome</th>
            <th>Setor</th>
            <th>Salário</th>
            <th>E-mail</th>
            <th>Idade</th>
            <th></th>
           
          </tr>
          <tbody id="event-table" >
            <tr v-for="funcionario in listaFuncionarios">
              <td>{{ funcionario.nome }}</td> 
              <td>{{ funcionario.setor.nome }}</td> 
              <td>R$ {{ funcionario.salario }}</td> 
              <td>{{ funcionario.email }}</td> 
              <td>{{ funcionario.idade }}</td>
              <td>
                <router-link :to="{name : 'alteracao-funcionario', params: { id : funcionario.id } }" 
                      class="btn btn-success">&#9998; Alterar</router-link>
                  <button type="button" @click="remover(funcionario)" class="btn btn-danger">&#10006; Remover</button>
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    
    data: function(){
        return {
            listaFuncionarios: [],
            funcionarioService: null
        };
    },
    methods: {
        listarFuncionarios: function (){
            this.funcionarioService.listar().then(response => {
                this.listaFuncionarios = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        
        
        
        remover: function (funcionario){
            
            let componente = this;
            
            this.funcionarioService.remover(funcionario.id).then(response => {
                let indice = componente.listaFuncionarios.indexOf(funcionario);
                
                componente.listaFuncionarios.splice(indice, 1)
                componente.$root.mostrarMensagem("Funcionário Removido Com sucesso", "danger") 
            }).catch(function (error) {
                console.log(error);
            });
        }
    },
    
    created: function (){
       this.funcionarioService = new FuncionarioService();
       this.listarFuncionarios();
    }
  });