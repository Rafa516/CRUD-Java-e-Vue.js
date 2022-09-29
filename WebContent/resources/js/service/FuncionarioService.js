class FuncionarioService {
    
    constructor(){
        this.url = '/funcionarios/rest/funcionarios';
    }
    
    salvar(funcionario){
        
        funcionario.setor = { id: funcionario.setor };
        
        if(funcionario.id){
            return axios.put(this.url + '/' + funcionario.id, funcionario);
        }
        
        return axios.post(this.url, funcionario);
            
    }
    
    listar(){
        return axios.get(this.url + "/listar");
        
    }
    
    remover(id){
        return axios.delete(this.url + "/" + id);
    }
    
    buscar(id){
        return axios.get(this.url + "/" + id);
    }
}