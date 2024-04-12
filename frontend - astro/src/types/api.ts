
export type Departamento = {
map(arg0: (departamento: { id: number; nombre: string; estado: boolean; }) => any): Departamento;
    id: number;
    nombre: string;
    estado: boolean;
}

export type Marca = {
    id: number;
    nombre: string;
    estado: boolean;
}

export type UnidadMedida = {
    id: number;
    descripcion: string;
    estado: boolean;
}

export type Articulo = {
    id: number;
    descripcion: string;
    marca: Marca;
    unidadMedida: UnidadMedida;
    existencia: number;
    estado: boolean;
}

export type Proveedor = {
    id: number;
    documento: number;
    nombreComercial: string;
    estado: boolean;
}

export interface OrdenCompra {
    id:           number;
    numero:       string;
    descripcion:  string;
    departamento: Departamento;
    proveedor:    Proveedor;
    estado:       boolean;
    fecha:        Date;
    idAsiento:    number | null;
    articulos:    OrdenesArticulos[];
    monto: number;
}

export interface OrdenesArticulos {
    id:            number;
    articulo:      Articulo;
    cantidad:      number;
    unidadMedida:  UnidadMedida;
    costoUnitario: number;
}

export interface AsientoContable {
    descripcion:   string;
    auxiliar:      number;
    fecha:         Date;
    monto:         number;
    estado:        number;
    moneda:        number;
    transacciones: Transaccion[];
}

export interface Transaccion {
    cuenta:         number;
    tipoMovimiento: number;
    monto:          number;
}