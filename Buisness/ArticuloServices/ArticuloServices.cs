using Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data;
using Microsoft.EntityFrameworkCore;
using System.Transactions;

namespace Buisness.ArticuloServices
{
    public class ArticuloServices : IArticuloServices
    {
        private readonly ShopContext _contex;
        public ArticuloServices(ShopContext contex)
        {
            _contex = contex;
        }

        public void DeleteArticulos(int id)
        {
            var articulo = _contex.Articulos.Find(id);
            if (articulo != null)
            {
                _contex.Articulos.Remove(articulo);
                Save();
            }
        }

        public Articulos GetArticuloByID(int id)
        {
            return _contex.Articulos.Find(id)??new Articulos();
        }

        public IEnumerable<Articulos> GetArticulos()
        {
            return _contex.Articulos.ToList();
        }

        public void InsertArticulos(Articulos articulo)
        {
            using (var scope = new TransactionScope())
            {
                _contex.Articulos.Add(articulo);
                Save();
                scope.Complete();
            }
        }

        public void InsertTiendaArticulo(List<ArticuloTienda> articuloTienda)
        {
            foreach (var tiendaArticulo in articuloTienda)
            {
                _contex.ArticuloTienda.Add(tiendaArticulo);
                Save();
            }
        }

        public void Save()
        {
            _contex.SaveChanges();
        }

        public void UpdateArticulo(Articulos articulo)
        {
            if (articulo != null)
            {
                using (var scope = new TransactionScope())
                {
                    _contex.Entry(articulo).State = EntityState.Modified;
                    _contex.SaveChanges();
                    scope.Complete();
                }
            }
          
        }
    }
}
