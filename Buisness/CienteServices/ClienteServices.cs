using Data;
using Entitys;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Buisness.CienteServices
{
    public class ClienteServices : IClienteServices
    {
        private readonly ShopContext _contex;
        public ClienteServices(ShopContext contex)
        {
            _contex = contex;
        }
        public void DeleteCliente(int id)
        {
            var cliente = _contex.Clientes.Find(id);
            if (cliente != null)
            {
                _contex.Clientes.Remove(cliente);
                Save();
            }
        }

        public Clientes GetClienteByID(int id)
        {
            return _contex.Clientes.Find(id) ?? new Clientes();
        }

        public IEnumerable<Clientes> GetClientes()
        {
            return _contex.Clientes.ToList();
        }

        public void InsertCliente(Clientes cliente)
        {
            _contex.Clientes.Add(cliente);
            Save();
        }

        public void InsertClienteArticulo(List<ClienteArticulo> clienteArticulos)
        {
            foreach (var clienteArticulo in clienteArticulos)
            {
                _contex.ClienteArticulo.Add(clienteArticulo);
                Save();
            }
        }

        public void Save()
        {
            _contex.SaveChanges();
        }

        public void UpdateCliente(Clientes cliente)
        {
            _contex.Entry(cliente).State = EntityState.Modified;
            _contex.SaveChanges();
        }
    }
}
