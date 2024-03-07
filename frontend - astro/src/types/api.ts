export type Departamento = {
map(arg0: (departamento: { id: string; nombre: string | null; estado: boolean; }) => any): unknown;
    id:     number;
    nombre: string;
    estado: boolean;
}

export type Marca = {
[x: string]: any;
    id:     number;
    nombre: string;
    estado: boolean;
}

export type UnidadMedida = {
    id:          number;
    descripcion: string;
    estado:      boolean;
}

export type Articulo = {
    id:           number;
    descripcion:  string;
    marca:        Marca;
    unidadMedida: UnidadMedida;
    existencia:   number;
    estado:       boolean;
}

export type Proveedor = {
    id:              number;
    documento:       number;
    nombreComercial: string;
    estado:          boolean;
}