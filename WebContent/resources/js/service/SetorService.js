class SetorService {
    
    constructor(){
        this.url = '/funcionarios/rest/setores';
    }
    
    salvar(setor){
        
        if(setor.id){
            return axios.put(this.url + '/' + setor.id, setor);
        }
        
        return axios.post(this.url, setor);
            
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