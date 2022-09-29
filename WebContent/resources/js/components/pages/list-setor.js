var listSetor = Vue.component('lista-setor', {
    fabricanteService: null,
    template: `
      <div >
        <h4>Lista de Setores</h4>
        <table class="table">
          <tr>
            <th>Nome</th>
            <th></th>
           
          </tr>
          <tbody id="event-table" >
            <tr v-for="setor in listaSetores">
              <td>{{ setor.nome }}</td> 
              <td>
              <router-link :to="{name: 'alteracao-setor', params: { id : setor.id } }" class="btn btn-success">&#9998; Alterar</router-link>
                  <button type="button" @click="remover(setor)" class="btn btn-danger">&#10006; Remover</button>
                  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    data: function(){
        return {
            listaSetores: [],
            setorService: null
        };
    },
    
    methods: {
        listarSetores: function (){
            this.setorService.listar().then(response => {
                this.listaSetores = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        
        remover: function (setor){
            
            let componente = this;
            
            this.setorService.remover(setor.id).then(response => {
                let indice = componente.listaSetores.indexOf(setor);
                componente.listaSetores.splice(indice, 1)
                componente.$root.mostrarMensagem("Setor Removido Com sucesso", "danger") 
            }).catch(function (error) {
                console.log(error);
            });;
            
        }
    },
    
    created: function (){
       this.setorService = new SetorService();
       this.listarSetores();
    }
  });