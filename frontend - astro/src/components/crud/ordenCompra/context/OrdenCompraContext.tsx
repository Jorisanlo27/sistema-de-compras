import { createContext } from 'react'
import type { Articulo, Departamento, OrdenCompra, OrdenesArticulos, Proveedor, UnidadMedida } from '../../../../types/api';



interface Props {
    departamentos: Departamento[];
    setDepartamentos: Function;
    proveedores: Proveedor[];
    setProveedores: Function;
    unidadMedida: UnidadMedida[];
    setUnidadMedida: Function;
    ordenCompra: OrdenCompra;
    setOrdenCompra: Function;
    articulos: Articulo[];
    setArticulos: Function;
    ordenArticulo: OrdenesArticulos;
    setOrdenArticulo: Function;
    ordenArticulos: OrdenesArticulos[];
    setOrdenArticulos: Function;
    isEditOrdenArticuloMode : any
    setIsEditOrdenArticuloMode: Function; 
  }


export const OrdenCompraContext = createContext({} as Props)
