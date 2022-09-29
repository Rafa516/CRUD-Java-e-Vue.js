package com.hepta.funcionarios.rest;

import com.hepta.funcionarios.builder.SetorBuilder;
import com.hepta.funcionarios.builder.FuncionarioBuilder;
import com.hepta.funcionarios.entity.Funcionario;
import com.hepta.funcionarios.utils.TestUtils;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import static org.junit.jupiter.api.Assertions.assertEquals;

class FuncionarioServiceTest extends AbstractServiceTest {

	private static Funcionario funcionario;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		service = TestUtils.generateWebTarget(URL_LOCAL,"funcionarios");

		funcionario = FuncionarioBuilder.umFuncionario()
				.comSalario(Double.valueOf(2000))
				.comEmail("joao@gmail.com")
				.comNome("João")
				.comIdade(23)
				.comSetor(
						SetorBuilder
							.umSetor()
							.comNome("Recursos Humanos")
							.teste()
				)
				.teste();
	}
		
	@Test
	void testFuncionarioRead() {
		Response response = service.request().get();
		assertEquals(Response.Status.OK.getStatusCode(),response.getStatusInfo().getStatusCode());
	}

	@Test
	void testFuncionarioCreate() {
		Response response = service.request().post(Entity.entity(funcionario, MediaType.APPLICATION_JSON_TYPE));
		assertEquals(Response.Status.OK.getStatusCode(),response.getStatusInfo().getStatusCode() );
	}

	@Test
	void testFuncionarioUpdate() {
		Response response = service.request().post(Entity.entity(funcionario, MediaType.APPLICATION_JSON_TYPE));
		assertEquals(Response.Status.OK.getStatusCode(),response.getStatusInfo().getStatusCode() );
	}

	@Test
	void testFuncionarioDelete() {
		Response response = service.request().post(Entity.entity(funcionario, MediaType.APPLICATION_JSON_TYPE));
		assertEquals(Response.Status.OK.getStatusCode(),response.getStatusInfo().getStatusCode() );
	}

}
