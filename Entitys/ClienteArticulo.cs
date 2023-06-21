using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Entitys
{
    public class ClienteArticulo
    {
        public int Id { get; set; }
        public int IdCliente { get; set; }
        public int IdArticulo { get; set; }
        public string? Fecha { get; set; }
    }
}
