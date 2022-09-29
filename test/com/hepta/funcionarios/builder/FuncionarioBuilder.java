package com.hepta.funcionarios.builder;

import com.hepta.funcionarios.entity.Setor;
import com.hepta.funcionarios.entity.Funcionario;

public class FuncionarioBuilder {

    private Funcionario funcionario;

    private FuncionarioBuilder(Funcionario funcionario){
        this.funcionario= funcionario;
    }

    public static FuncionarioBuilder umFuncionario(){
        return new FuncionarioBuilder(new Funcionario());
    }

    public FuncionarioBuilder comId(Integer id){
        this.funcionario.setId(id);
        return this;
    }

    public FuncionarioBuilder comNome(String nome){
        this.funcionario.setNome(nome);
        return this;
    }

    public FuncionarioBuilder comSetor(Setor set){
        this.funcionario.setSetor(set);
        return this;
    }

    public FuncionarioBuilder comSalario(Double salario){
        this.funcionario.setSalario(salario);
        return this;
    }

    public FuncionarioBuilder comEmail(String email){
        this.funcionario.setEmail(email);
        return this;
    }

    public FuncionarioBuilder comIdade(Integer idade){
        this.funcionario.setIdade(idade);
        return this;
    }

    public Funcionario teste(){
        return this.funcionario;
    }
}