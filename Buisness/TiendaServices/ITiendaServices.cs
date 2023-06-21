using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entitys;

namespace Buisness.TiendaServices
{
    public interface ITiendaServices
    {

        IEnumerable<Tienda> GetTiendas();
        Tienda GetTiendaByID(int id);

        void InsertTienda(Tienda tienda);

        void DeleteTienda(int id);

        void UpdateTienda(Tienda tienda);

        void Save();
    }
}
