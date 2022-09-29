package com.hepta.funcionarios.builder;

import com.hepta.funcionarios.entity.Setor;

public class SetorBuilder {

    public static SetorBuilder umSetor(){
        return new SetorBuilder(new Setor());
    }

    private  Setor setor;

    private SetorBuilder(Setor setor){
        this.setor = setor;
    }

    public SetorBuilder comNome(String nome){
        setor.setNome(nome);
        return this;
    }

    public SetorBuilder comId(Integer id){
        setor.setId(id);
        return this;
    }

    public Setor teste(){
        return this.setor;
    }
}
