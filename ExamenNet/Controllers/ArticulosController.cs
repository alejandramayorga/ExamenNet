using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Transactions;
using Buisness;
using Buisness.ArticuloServices;
using Entitys;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json.Linq;

namespace ExamenNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticulosController : ControllerBase
    {
        private readonly IArticuloServices _articulosSrvices;

        public ArticulosController(IArticuloServices articulosServices)
        {
            _articulosSrvices = articulosServices;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var articulos = _articulosSrvices.GetArticulos();
            return new OkObjectResult(articulos);
        }

        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            var articulo = _articulosSrvices.GetArticuloByID(id);
            return new OkObjectResult(articulo);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Articulos articulos)
        {
            _articulosSrvices.InsertArticulos(articulos);
            return CreatedAtAction(nameof(Get), new { id = articulos.Id }, articulos);
        }

        [HttpPost("TiendaArticulos")]
        public IActionResult TiendaArticulos([FromBody] List<ArticuloTienda> articulosTienda)
        {
            _articulosSrvices.InsertTiendaArticulo(articulosTienda);
            return new OkResult();
        }

        [HttpPut]
        public IActionResult Put([FromBody] Articulos product)
        {
            if (product != null)
            {
                    _articulosSrvices.UpdateArticulo(product);
                    return new OkResult();
            }
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _articulosSrvices.DeleteArticulos(id);
            return new OkResult();
        }

        //[HttpPost, DisableRequestSizeLimit]
        //public async Task<IActionResult> PostAsync([FromBody] Articulos articulo)
        //{
        //    try
        //    {
        //        var formCollection = await Request.ReadFormAsync();
        //        var file = formCollection.Files.First();
        //        var folderName = Path.Combine("Resources", "Images");
        //        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
        //        if (file.Length > 0)
        //        {
        //            var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim();
        //            var fullPath = Path.Combine(pathToSave, fileName.ToString());
        //            var dbPath = Path.Combine(folderName, fileName.ToString());
        //            using (var stream = new FileStream(fullPath, FileMode.Create))
        //            {
        //                file.CopyTo(stream);
        //            }
        //            return Ok(new { dbPath });
        //        }
        //        else
        //        {
        //            return BadRequest();
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, $"Internal server error: {ex}");
        //    }
        //}
    }
}
