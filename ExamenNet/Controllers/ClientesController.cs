using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Transactions;
using Buisness;
using Buisness.CienteServices;
using Entitys;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json.Linq;


namespace ExamenNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : Controller
    {
        private readonly IClienteServices _clientesSrvices;

        public ClientesController(IClienteServices clientesSrvices)
        {
            _clientesSrvices = clientesSrvices;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var articulos = _clientesSrvices.GetClientes();
            return new OkObjectResult(articulos);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var articulo = _clientesSrvices.GetClienteByID(id);
            return new OkObjectResult(articulo);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Clientes clientes)
        {
            _clientesSrvices.InsertCliente(clientes);
            return CreatedAtAction(nameof(Get), new { id = clientes.Id }, clientes);
        }

        [HttpPost("ClienteArticulos")]
        public IActionResult TiendaArticulos([FromBody] List<ClienteArticulo> clienteArticulos)
        {
            _clientesSrvices.InsertClienteArticulo(clienteArticulos);
            return new OkResult();
        }

        [HttpPut]
        public IActionResult Put([FromBody] Clientes clientes)
        {
            if (clientes != null)
            {
                _clientesSrvices.UpdateCliente(clientes);
                return new OkResult();
            }
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _clientesSrvices.DeleteCliente(id);
            return new OkResult();
        }
    }
}
