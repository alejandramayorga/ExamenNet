using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Transactions;
using Buisness;
using Buisness.TiendaServices;
using Entitys;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json.Linq;

namespace ExamenNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TiendasController : Controller
    {
        private readonly ITiendaServices _tiendaSrvices;

        public TiendasController(ITiendaServices tiendaServices)
        {
            _tiendaSrvices = tiendaServices;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var articulos = _tiendaSrvices.GetTiendas();
            return new OkObjectResult(articulos);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var articulo = _tiendaSrvices.GetTiendaByID(id);
            return new OkObjectResult(articulo);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Tienda tienda)
        {
            _tiendaSrvices.InsertTienda(tienda);
            return CreatedAtAction(nameof(Get), new { id = tienda.Id }, tienda);
        }


        [HttpPut]
        public IActionResult Put([FromBody] Tienda tienda)
        {
            if (tienda != null)
            {
                _tiendaSrvices.UpdateTienda(tienda);
                return new OkResult();
            }
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _tiendaSrvices.DeleteTienda(id);
            return new OkResult();
        }
    }
}
