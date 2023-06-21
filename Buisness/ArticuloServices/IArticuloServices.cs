using Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Buisness.ArticuloServices
{
    public interface IArticuloServices
    {

        IEnumerable<Articulos> GetArticulos();
        Articulos GetArticuloByID(int id);

        void InsertArticulos(Articulos articulo);

        void DeleteArticulos(int id);

        void UpdateArticulo(Articulos articulo);

        void Save();

        void InsertTiendaArticulo(List<ArticuloTienda> articuloTienda);
    }
}
