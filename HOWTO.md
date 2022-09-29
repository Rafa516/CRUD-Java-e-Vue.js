# Execução do Projeto
#### Requisitos :
 >Apache TomCat 9;  
  JDK 8;   
  MySQL.  

#### Preparo antes da Execução
 > Instalar JDK devidamente, configurando a variável de Ambiente JAVA_HOME;   
  Baixar o APACHE TomCat 9, decompacta-lo na sua pasta de preferencia;  
  Instalar um  servidor MySql devidamete configurado, com usuario **root** e senha **root** ou sem senha.  

#### Execução do projeto
 > Pelo terminal, entrar na pasta raiz do projeto (mesmo local onde fica o arquivo pom.xml)  
  >Executar o seguinte comando :  
```
mvn clean compile install -X  
```
 > Após a execução do comando acima, na pasta target, será gerado um arquivo com final **.war**;  
 Copiar o arquivo;  
 Ir até a pasta do servidor APACHE TomCat 9;  
  Abrir a pasta webapps e colar o arquivo dentro da pasta;  
 Iniciar o tomcat;   
 Configurar o MySQL;  
  No seu navegador, acessar a aplicação com o endereço http://localhost:8080/funcionarios/index.html  
 
