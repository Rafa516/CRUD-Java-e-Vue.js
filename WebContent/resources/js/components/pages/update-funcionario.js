var updateFuncionario = Vue.component('alteracao-funcionario', {
    template: `
        <div class="col-9 col-xs-8 col-sm-7 col-md-6 col-lg-5 col-xl-4 mx-auto mt-5">
            
  
		    <h4>Alteração de dados</h4>	    

            <form  @submit.prevent="salvar">
            
                 <div class="alert alert-danger" v-if="errors.all().length">
                    <div v-for="error in errors.all()">* {{ error }}</div>
                </div>
                
                <input-text label="Nome: " id="nome" v-model="funcionario.nome" 
                    :valor="funcionario.nome" v-validate.continues="'required|max:30|alpha_spaces'" data-vv-name="Nome">
                </input-text>
                
               <input-select label="Setor: " id="setor" v-model="funcionario.setor" 
                    :valor="funcionario.setor" v-validate.continues="'required'" data-vv-name="Setor" 
                    :lista="listaSetores">
                </input-select>
                
                <input-text label="Salário: " id="salario" v-model="funcionario.salario" tipo="number"
                    :valor="funcionario.salario" v-validate.continues="'required|min_value:0|decimal:0'" 
                    data-vv-name="Salário">
                </input-text>
                
                   <input-text label="E-mail: " id="email" v-model="funcionario.email" tipo="email" 
                    :valor="funcionario.email">
                </input-text>
              
                
                 <input-text label="Idade: " id="idade" v-model="funcionario.idade" tipo="number" 
                    :valor="funcionario.idade" v-validate.continues="'required|min_value:0|decimal:2'" 
                    data-vv-name="Idade">
                </input-text>
                
                <input type="submit" class="btn btn-success" value="Alterar"/>
                  <router-link :to="{name: 'funcionarios'}" class="btn btn-secondary">Voltar</router-link>
                
            </form>
        </div>
    `,
    data: function (){
        return { 
            funcionario: new Funcionario(),
            listaSetores: [],
            setorService: null,
            funcionarioService: null,
            id: this.$route.params.id
        };
    },
    methods: {
        salvar: function (){
            
            let componente = this;
            
            this.$validator.validateAll().then(sucesso => {
                if(sucesso){
                     this.funcionarioService.salvar(componente.funcionario)
                        .then(function (response) { 
                            componente.$root.mostrarMensagem("Dados alterados com sucesso", "success");
                            componente.$router.push({name: 'funcionarios'});  
                     })
                     .catch(function (error) {
                         console.log(error);
                         componente.$root.mostrarMensagem(error.response.data, "danger"); 
                     });
                }else{
                    console.log('erro');
                }
            });
        }
    },
    created: function (){
        
        let componente = this;
        
        this.setorService = new SetorService();
        this.funcionarioService = new FuncionarioService();
        this.setorService.listar().then(response => {
            this.listaSetores = response.data
                .map(function(setor){
                    return {valor: setor.id, texto: setor.nome};
                });
        }).catch(function (error) {
            console.log(error);
        });
        
        if(this.id){
            this.funcionarioService.buscar(this.id)
                .then(response => {
                    componente.funcionario = response.data;
                    componente.funcionario.setor = componente.funcionario.setor.id;
                })
                .catch(error => {
                    componente.$root.mostrarMensagem(error.response.data, "danger"); 
                });
        }
     }
  });