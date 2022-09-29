package com.hepta.funcionarios.rest;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.hepta.funcionarios.entity.Setor;
import com.hepta.funcionarios.persistence.SetorDAO;

@Path("/setores")
public class SetorService {

    @Context
    private HttpServletRequest request;

    @Context
    private HttpServletResponse response;

    private SetorDAO dao;

    public SetorService() {
	dao = new SetorDAO();
    }

    protected void setRequest(HttpServletRequest request) {
	this.request = request;
    }

    /**
     * Adiciona novo setor
     * 
     * @param fabricante: Novo setor
     * @return response 201 (Created) - Conseguiu adicionar
     */
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @POST
    public Response fabricanteCreate(Setor setor) {

	try {

	    List<Setor> verificacao = dao.verificaco(setor.getId(),
		    setor.getNome());

	    if (verificacao.isEmpty()) {
		dao.save(setor);
		return Response.status(Status.CREATED).build();
	    } else {
		return Response.status(Status.BAD_REQUEST).entity("Setor já está cadastrado!!!").build();
	    }

	} catch (Exception e) {
	    return Response.status(Status.INTERNAL_SERVER_ERROR).build();
	}

    }

    /**
     * Lista todos os setores
     * 
     * @return response 200 (OK) - Conseguiu listar
     */
    @Path("/listar")
    @Produces(MediaType.APPLICATION_JSON)
    @GET
    public Response fabricanteRead() {
	List<Setor> setores = new ArrayList<>();
	try {
	    setores = dao.getAll();
	} catch (Exception e) {
	    return Response.status(Status.INTERNAL_SERVER_ERROR).entity("Erro ao buscar fabricantes").build();
	}

	GenericEntity<List<Setor>> entity = new GenericEntity<List<Setor>>(setores) {
	};
	return Response.status(Status.OK).entity(entity).build();
    }

    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @GET
    public Response setorFind(@PathParam("id") Integer id) {
	try {
	    Setor setor = dao.find(id);
	    return Response.status(Status.OK).entity(setor).build();
	} catch (Exception e) {
	    e.printStackTrace();
	    return Response.status(Status.INTERNAL_SERVER_ERROR).entity("Erro ao tentar buscar um setor").build();
	}
    }

    /**
     * Atualiza um setor
     * 
     * @param id:         id do setor
     * @param fabricante: Setor atualizado
     * @return response 200 (OK) - Conseguiu atualizar
     */
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @PUT
    public Response setorUpdate(@PathParam("id") Integer id, Setor setor) {
	try {
	    dao.update(setor);
	    return Response.status(Status.OK).build();
	} catch (Exception e) {
	    e.printStackTrace();
	    return Response.status(Status.INTERNAL_SERVER_ERROR).entity("Erro ao tentar atualizar um setor")
		    .build();
	}
    }

    /**
     * Remove um setor
     * 
     * @param id: id do setor
     * @return response 200 (OK) - Conseguiu remover
     */
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @DELETE
    public Response setorDelete(@PathParam("id") Integer id) {
	try {
	    dao.delete(id);
	    return Response.status(Status.OK).build();
	} catch (Exception e) {
	    e.printStackTrace();
	    return Response.status(Status.INTERNAL_SERVER_ERROR).entity("Erro ao tentar remover setor").build();
	}
    }

}
