
[![](https://img.shields.io/pypi/status/ok)](https://travis-ci.org/joemccann/dillinger)
## Processo Seletivo Hepta

**Essa é uma aplicação de um CRUD para a participação no processo seletivo da Hepta**
## Tecnologias
>Back-end em Java, usando Jersey para construção de APIs REST  
>Front-end ultilizando VueJS, um framework baseada em angular  
Testes de Integração com Java e JUnit  
Banco de Dados em MySQL  
Bootstrap CSS para front-end junto com VueJS  

## Objetivo
>Dar continuidade no sistema de cadastro de funcionários e setores, implementando da melhor maneira possível.

## Desenvolvimento

-**Back end** 
>TemplateMethod Pattern na parte de DAO  
Facade Pattern na parte Controller-Service  
Reflections em Utils  

<center><img src="/fotos/backend.png" width="600"></center>

-**Front end** 
  >Componentização   
Programação orientada a reuso  

<center><img src="/fotos/frontend.png" width="600"></center>


-**Testes** 
>Teste Funcional e de Integração

## Banco de dados do Sistema
**Diagrama Entidade Relacionamento**
<center><img src="/fotos/diagramaBD.png" width="600"></center>

>Relacionamento 1:N um para muitos, um setor possui város funcionários, mas um funcionário só pertence a um setor.

**Tabela dos funcionários**
<center><img src="/fotos/tb_funcionario.png" width="600"></center>


**Tabela dos setores**
<center><img src="/fotos/tb_setor.png" width="600"></center>

## CRUD Sistema

**Create Funcionário**

>Cadastro de um novo funcionário.
<center><img src="/fotos/cadastro_funcionario.png" width="600"></center>
<center><img src="/fotos/funcionario_cadastrado.png" width="600"></center>

**Create Setor**

>Cadastro de um novo Setor.
<center><img src="/fotos/cadastro_setor.png" width="600"></center>
<center><img src="/fotos/setor_cadastrado.png" width="600"></center>

**Read Funcionário e Setor**

>Listando os Funcionário.
<center><img src="/fotos/lista_funcionarios.png" width="600"></center>

>Listando os Setores.
<center><img src="/fotos/lista_setores.png" width="600"></center>

**Update Funcionário**

>Alterando dados de um Funcionário.
<center><img src="/fotos/alterar_funcionario.png" width="600"></center>
<center><img src="/fotos/altera_nome_salario.png" width="600"></center>
<center><img src="/fotos/funcionario_alterado.png" width="600"></center>

**Update Setor**

>Alterando dados de um Setor.
<center><img src="/fotos/alterar_setor.png" width="600"></center>
<center><img src="/fotos/setor_alterado.png" width="600"></center>

**Delete Funcionário e Setor**

>Deletando um Funcionário.
<center><img src="/fotos/excluir_funcionario.png" width="600"></center>

>Deletando um Setor.
<center><img src="/fotos/setor_removido.png" width="600"></center>

**Logs do Hibernate**

>Logs de algumas queries geradas.
<center><img src="/fotos/log do hibernate.png" width="600"></center>

-**Build do projeto** 
>Gerando o arquivo **.war** através **comando mvn clean compile install -X**

<center><img src="/fotos/build.png" width="600"></center>

-**Verificação do consumo da API restFull** 
>Listando funcionarios

<center><img src="/fotos/rest_listar_funcionarios.png" width="600"></center>

>Listando Setores

<center><img src="/fotos/rest_listar_setor.png" width="600"></center>








