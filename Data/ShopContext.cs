
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entitys;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class ShopContext : DbContext
    {

        public ShopContext(DbContextOptions<ShopContext> options) : base(options)
        {
        }
        public DbSet<Articulos> Articulos { get; set; }
        public DbSet<Clientes> Clientes { get; set; }

        public DbSet<Tienda> Tiendas { get; set; }

        public DbSet<ArticuloTienda> ArticuloTienda { get; set; }

        public DbSet<ClienteArticulo> ClienteArticulo { get; set; }
    }
}
