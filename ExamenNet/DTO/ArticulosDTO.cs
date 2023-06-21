using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Entitys
{
    public class ArticulosDTO
    {
        public int Id { get; set; }
        public string? Codigo { get; set; }
        public string? Descripcion { get; set; }
        public double Precio { get; set; }
        public string[] UploadedPhotoorDocName
        {
            get;
            set;
        }
        public IList<IFormFile> Files
        {
            get;
            set;
        }
        public int Stock { get; set; }

    }
}
