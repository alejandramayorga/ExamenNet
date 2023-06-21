using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data;
using Entitys;
using Microsoft.EntityFrameworkCore;

namespace Buisness.TiendaServices
{

    public class TiendaServices : ITiendaServices
    {
        private readonly ShopContext _contex;
        public TiendaServices(ShopContext contex)
        {
            _contex = contex;
        }
        public void DeleteTienda(int id)
        {
            var tienda = _contex.Tiendas.Find(id);
            if (tienda != null)
            {
                _contex.Tiendas.Remove(tienda);
                Save();
            }
        }

        public Tienda GetTiendaByID(int id)
        {
            return _contex.Tiendas.Find(id) ?? new Tienda();
        }

        public IEnumerable<Tienda> GetTiendas()
        {
            return _contex.Tiendas.ToList();
        }

        public void InsertTienda(Tienda tienda)
        {
            _contex.Tiendas.Add(tienda);
            Save();
        }

        public void Save()
        {
            _contex.SaveChanges();
        }

        public void UpdateTienda(Tienda tienda)
        {
            _contex.Entry(tienda).State = EntityState.Modified;
            _contex.SaveChanges();
        }
    }
}
