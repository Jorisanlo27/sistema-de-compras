import { useEffect, useState } from "react";

import { OrdenCompraContext } from "./OrdenCompraContext";
import {
  initialStateOrdenArticulo,
  initialStateOrdenCompra,
} from "../utils/initialStates";
import type {
  Articulo,
  Departamento,
  OrdenCompra,
  OrdenesArticulos,
  Proveedor,
  UnidadMedida,
} from "../../../../types/api";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function OrdenCompraProvider({ children }: Props) {

  useEffect(() => {
    (async () => {
      ["departamentos", "proveedores", "articulos", "unidadesmedida"].map(
        async (drop) => {
          const response = await fetch(`/services/${drop}`, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (drop == "departamentos")
            setDepartamentos((await response.json()) as Departamento[]);
          if (drop == "proveedores")
            setProveedores((await response.json()) as Proveedor[]);
          if (drop == "articulos")
            setArticulos((await response.json()) as Articulo[]);
          if (drop == "unidadesmedida")
            setUnidadMedida((await response.json()) as UnidadMedida[]);
        }
      );
    })();
  }, []);

  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [articulos, setArticulos] = useState<Articulo[]>([]);
  const [unidadMedida, setUnidadMedida] = useState<UnidadMedida[]>([]);
  const [ordenArticulo, setOrdenArticulo] = useState<OrdenesArticulos>(
    initialStateOrdenArticulo
  );
  const [ordenArticulos, setOrdenArticulos] = useState<OrdenesArticulos[]>([]);
  const [ordenCompra, setOrdenCompra] = useState<OrdenCompra>(
    initialStateOrdenCompra
  );
  const [isEditOrdenArticuloMode, setIsEditOrdenArticuloMode] = useState({
    edit: false,
    articuloEditIndex: NaN,
  });

  return (
    <OrdenCompraContext.Provider
      value={{
        departamentos,
        setDepartamentos,
        proveedores,
        setProveedores,
        unidadMedida,
        setUnidadMedida,
        ordenCompra,
        setOrdenCompra,
        articulos,
        setArticulos,
        ordenArticulo,
        setOrdenArticulo,
        ordenArticulos,
        setOrdenArticulos,
        isEditOrdenArticuloMode,
        setIsEditOrdenArticuloMode,
      }}
    >
      {children}
    </OrdenCompraContext.Provider>
  );
}

export default OrdenCompraProvider;
