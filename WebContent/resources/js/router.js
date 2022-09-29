var routes = [ {
    path : '/',
    component : index,
    titulo : 'Início',
    name : 'inicio',
    menu : true
},{
    path : '/funcionarios',
    component : listFuncionario,
    titulo : 'Funcionários',
    name : 'funcionarios',
    menu : true
},{
    path : '/funcionario/cadastro',
    component : createFuncionario,
    titulo : 'Cadastro de Funcionário',
    name : 'cadastro-funcionario',
    menu : true
},{
    path : '/setores',
    component : listSetor,
    titulo : 'Setores',
    name : 'lista-setor',
    menu : true
},{
    path : '/setor/cadastro',
    component : createSetor,
    titulo : 'Cadastro do Setor',
    name : 'cadastro-setor',
    menu : true
},{
    path : '/setor/alterar/:id',
    component : updateSetor,
    titulo : 'Alteração de cadastro',
    name : 'alteracao-setor',
    menu : false
},{
    path : '/funcionario/alterar/:id',
    component : updateFuncionario,
    titulo : 'Alteração de cadastro',
    name : 'alteracao-funcionario',
    menu : false
} ] 