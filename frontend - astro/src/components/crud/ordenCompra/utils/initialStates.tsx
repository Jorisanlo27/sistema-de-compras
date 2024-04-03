import type {
  Articulo,
  Departamento,
  Marca,
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

// export const initialStateArticuloFull = {
//   id: 0,
//   descripcion: "",
//   estado: false,
//   existencia: 0,
//   unidadMedida: { id: 0, descripcion: "", estado: false } as UnidadMedida,
//   marca: { id: 0, nombre: "", estado: false } as Marca,
// } as Articulo;

// export const initialStateOrdenArticuloFull = {
//   id: 0,
//   cantidad: 0,
//   costoUnitario: 0,
//   unidadMedida: {
//     id: 0,
//   } as UnidadMedida,
//   articulo: initialStateArticulo,
// } as OrdenesArticulos;

// export const initialStateOrdenCompraFull = {
//   id: 0,
//   numero: "",
//   descripcion: "",
//   departamento: {
//     id: 0,
//   } as Departamento,
//   proveedor: {
//     id: 0,
//   } as Proveedor,
//   estado: false,
//   fecha: new Date(),
//   articulos: [] as OrdenesArticulos[],
// } as OrdenCompra;
