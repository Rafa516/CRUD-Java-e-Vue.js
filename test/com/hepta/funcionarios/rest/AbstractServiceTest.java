package com.hepta.funcionarios.rest;
import javax.ws.rs.client.WebTarget;

public abstract class AbstractServiceTest {

    protected static WebTarget service;
    protected static final String URL_LOCAL = "http://localhost:8080/funcionarios/rest/funcionarios/";
	

}
