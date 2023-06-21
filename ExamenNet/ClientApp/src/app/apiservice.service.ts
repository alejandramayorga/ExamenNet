import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService  {
  readonly apiUrl = 'https://localhost:9999/';
  readonly photoUrl = "http://localhost:50306/Photos/";

  constructor(private http: HttpClient) { }

  // Tiendas
  getTiendasList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'api/Tiendas');
  }

  addTienda(tienda: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'api/Tiendas', tienda, httpOptions);
  }

  addTiendaArticulos(tiendaArticulos: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'api/Articulos/TiendaArticulos', tiendaArticulos, httpOptions);
  }

  updateTienda(tienda: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'api/Tiendas/', tienda, httpOptions);
  }

  deleteTienda(idTienda: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'api/Tiendas/' + idTienda, httpOptions);
  }

    // Clientes
    getClientesList(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl + 'api/Clientes');
    }
  
    addCliente(cliente: any): Observable<any> {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.post<any>(this.apiUrl + 'api/Clientes', cliente, httpOptions);
    }
  
    addClienteArticulos(clienteArticulos: any): Observable<any> {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.post<any>(this.apiUrl + 'api/Clientes/ClienteArticulos', clienteArticulos, httpOptions);
    }
  
    updateCliente(cliente: any): Observable<any> {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.put<any>(this.apiUrl + 'api/Clientes/', cliente, httpOptions);
    }
  
    deleteCiente(idCliente: number): Observable<number> {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.delete<number>(this.apiUrl + 'api/Clientes/' + idCliente, httpOptions);
    }

      // Articulos
      getArticulosList(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl + 'api/Articulos');
      }
    
      addArticulos(articulo: any): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<any>(this.apiUrl + 'api/Articulos', articulo, httpOptions);
      }
    
      addArticuloTienda(articuloTienda: FormData): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<any>(this.apiUrl + 'api/Articulos/ArticuloTienda', articuloTienda, httpOptions);
      }
    
      updateArticulo(articulo: any): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.put<any>(this.apiUrl + 'api/Articulos/', articulo, httpOptions);
      }
    
      deleteArticulos(idArticulo: number): Observable<number> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.delete<number>(this.apiUrl + 'api/Articulos/' + idArticulo, httpOptions);
      }


}