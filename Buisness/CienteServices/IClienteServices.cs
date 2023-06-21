using Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Buisness.CienteServices
{
    public interface IClienteServices
    {

        IEnumerable<Clientes> GetClientes();
        Clientes GetClienteByID(int id);

        void InsertCliente(Clientes tienda);

        void DeleteCliente(int id);

        void UpdateCliente(Clientes tienda);

        void Save();

        void InsertClienteArticulo(List<ClienteArticulo> clienteArticulos);
    }
}
