import type {
  Articulo,
  Departamento,
  OrdenCompra,
  OrdenesArticulos,
  Proveedor,
  UnidadMedida,
} from "../../../../types/api";

export const initialStateArticulo = {
  id: 0,
} as Articulo;

export const initialStateOrdenArticulo = {
  cantidad: 0,
  unidadMedida: {
    id: 0,
  } as UnidadMedida,
  costoUnitario: 0,
  articulo: initialStateArticulo,
} as OrdenesArticulos;

export const initialStateOrdenCompra = {
  numero: "",
  descripcion: "",
  departamento: {
    id: 0,
  } as Departamento,
  proveedor: {
    id: 0,
  } as Proveedor,
  estado: false,
  articulos: [] as OrdenesArticulos[],
} as OrdenCompra;
