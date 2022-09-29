var createSetor = Vue.component('cadastro-setor', {
    fabricanteService: null,
    template: `
        <div class="col-9 col-xs-8 col-sm-7 col-md-6 col-lg-5 col-xl-4 mx-auto mt-5">
            
            <h4>Cadastro do Setor</h4>
            
            <form  @submit.prevent="salvar">
            
                <div class="alert alert-danger" v-if="errors.all().length">
                    <div v-for="error in errors.all()">* {{ error }}</div>
                </div>
                
                
                <input-text label="Nome: " id="nome" v-model="setor.nome" 
                    v-validate.continues="'required|max:30'" data-vv-name="Nome">
                 </input-text>
                                
                <input type="submit" class="btn btn-primary" value="salvar"/>
                <router-link :to="{name: 'lista-setor'}" class="btn btn-secondary">Voltar</router-link>
                
            </form>
        </div>
    `,
    data: function (){
        return { 
            tipoMensagem: 'info',
            setor: new Setor(),
            id: this.$route.params.id
        };
    },
    methods: {
        salvar: function (){
            
            
            let componente = this;
            componente.$root.esconderMensagem();
           
            this.$validator.validateAll()
                  .then(sucesso => { 
                      if(sucesso){
                          setorService.salvar(componente.setor)
                              .then(function (response) { 
                                  
                                  componente.$root.mostrarMensagem("Setor cadastrado com sucesso", "success");
                                  componente.$router.push({name: 'lista-setor'});  
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
    
    created: function(){
        let componente = this;
        setorService = new SetorService();
        
        if(this.id){
            setorService.buscar(this.id)
                .then(response => {
                    componente.setor = response.data;
                })
                .catch(error => {
                    componente.$root.mostrarMensagem(error.response.data, "danger"); 
                });
        }
    },
    
    
  });