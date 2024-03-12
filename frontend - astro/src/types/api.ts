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