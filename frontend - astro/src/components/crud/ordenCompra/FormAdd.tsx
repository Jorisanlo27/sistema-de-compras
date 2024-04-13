import { useContext, type FormEvent } from "react";
import type { Departamento, OrdenCompra, Proveedor } from "../../../types/api";
import OrdenArticulosTable from "./OrdenArticulosTable";
import { OrdenCompraContext } from "./context/OrdenCompraContext";
import {
  initialStateOrdenArticulo,
  initialStateOrdenCompra,
} from "./utils/initialStates";

export default function FormAdd() {
  const {
    departamentos,
    proveedores,
    ordenCompra,
    setOrdenCompra,
    setOrdenArticulo,
    ordenArticulos,
    setOrdenArticulos,
    isEditOrdenArticuloMode,
    setIsEditOrdenArticuloMode,
  } = useContext(OrdenCompraContext);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formOrdenCompra = {
      numero: "OC-" + ordenCompra.numero,
      descripcion: ordenCompra.descripcion,
      departamento: {
        id: ordenCompra.departamento.id,
      } as Departamento,
      proveedor: { id: ordenCompra.proveedor.id } as Proveedor,
      estado: ordenCompra.estado,
      articulos: ordenArticulos,
    } as OrdenCompra;

    await fetch("/services/ordencompras", {
      method: "POST",
      body: JSON.stringify(formOrdenCompra),
      headers: {
        "Content-Type": "application/json",
      },
    } as RequestInit);
    location.reload();
  }

  const handleOrdenCompras = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const formElement = e.target;

    let newOrdenCompra = {
      ...ordenCompra,
    } as OrdenCompra;

    if (formElement.id == "numero_add") {
      let formNumber = NaN;
      if (formElement.value == "" || isNaN(parseInt(formElement.value))) {
        formNumber = 0;
      } else {
        formNumber = parseInt(formElement.value);
      }

      newOrdenCompra = {
        ...newOrdenCompra,
        numero: formNumber.toString(),
      };
    }

    if (formElement.id == "descripcion_add") {
      newOrdenCompra = {
        ...newOrdenCompra,
        descripcion: formElement.value,
      };
    }

    if (formElement.id == "departamento_add") {
      newOrdenCompra = {
        ...newOrdenCompra,
        departamento: {
          ...newOrdenCompra.departamento,
          id: Number.isNaN(parseInt(formElement.value))
            ? 0
            : parseInt(formElement.value),
        },
      };
    }

    if (formElement.id == "proveedor_add") {
      newOrdenCompra = {
        ...newOrdenCompra,
        proveedor: {
          ...newOrdenCompra.proveedor,
          id: Number.isNaN(parseInt(formElement.value))
            ? 0
            : parseInt(formElement.value),
        },
      };
    }

    if (formElement.id == "estado_add") {
      newOrdenCompra = {
        ...newOrdenCompra,
        estado: formElement.value == "true" ? true : false,
      };
    }

    setOrdenCompra(newOrdenCompra);
  };

  const openOrdenArticuloModal = () => {
    if (isEditOrdenArticuloMode.edit == true) {
      const artEdit = ordenArticulos[isEditOrdenArticuloMode.articuloEditIndex];
      setOrdenArticulo(artEdit);
    }
  };

  const handleClosingAddModal = () => {
    setOrdenArticulo(initialStateOrdenArticulo);
    setOrdenArticulos([]);
    setOrdenCompra(initialStateOrdenCompra);
    (document.getElementById("orden_compra_form") as HTMLFormElement).reset();

    setIsEditOrdenArticuloMode({ articuloEditIndex: NaN, edit: false });
  };

  return (
    <>
      <div
        id="drawer-create-product-default"
        className="fixed top-0 right-0 z-40 w-full h-screen max-w-md p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="drawer-label"
        aria-hidden="true"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Nueva Orden De Compra
        </h5>
        <button
          type="button"
          onClick={handleClosingAddModal}
          data-drawer-dismiss="drawer-create-product-default"
          aria-controls="drawer-create-product-default"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <form
          id="orden_compra_form"
          onSubmit={submit}
          action="/crud/ordencompras"
        >
          <div className="space-y-4">
            <label
              htmlFor="numero_add"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Número
            </label>
            <div className="flex items-center w-full">
              <button
                id="dropdown-phone-button"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 mr-2"
                type="button"
              >
                OC-
              </button>
              <span className="flex-shrink-0 inline-flex items-center py-2.5  text-sm font-medium text-center  dark:text-white mr-2">
                -
              </span>
              <input
                type="number"
                name="numero_add"
                id="numero_add"
                value={ordenCompra?.numero}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={handleOrdenCompras}
                required
              />
            </div>
            <div>
              <label
                htmlFor="descripcion_add"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Descripción
              </label>
              <input
                type="text"
                name="descripcion_add"
                id="descripcion_add"
                value={ordenCompra?.descripcion}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={handleOrdenCompras}
                required
              />
            </div>
            <div>
              <label
                htmlFor="departamento_add"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Departamento
              </label>
              <select
                id="departamento_add"
                name="departamento_add"
                value={ordenCompra?.departamento?.id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={handleOrdenCompras}
                required
              >
                <option value="">--Seleccione--</option>
                {departamentos
                  ?.filter((dept) => dept.estado)
                  .map((dept, i) => (
                    <option key={i} value={dept.id}>
                      {dept.nombre}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="proveedor_add"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Proveedor
              </label>
              <select
                id="proveedor_add"
                name="proveedor_add"
                value={ordenCompra?.proveedor?.id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={handleOrdenCompras}
                required
              >
                <option value="">--Seleccione--</option>
                {proveedores
                  ?.filter((proveedor) => proveedor.estado)
                  .map((proveedor, i) => (
                    <option key={i} value={proveedor.id as unknown as string}>
                      {proveedor.nombreComercial}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="estado_add"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Estado
              </label>
              <select
                id="estado_add"
                name="estado_add"
                value={ordenCompra?.estado?.toString()}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={handleOrdenCompras}
                required
              >
                <option value="">--Seleccione--</option>
                <option value="true">Activo</option>
                <option value="false">Inactivo</option>
              </select>
            </div>
            {/* Modal */}
            <div className="pb-4">
              {/* <!-- Modal toggle --> */}
              <button
                id="orden_articulo_modal_toggle"
                data-modal-target="crud-modal"
                data-modal-toggle="crud-modal"
                className="block text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={openOrdenArticuloModal}
              >
                Agregar orden artículo
              </button>
            </div>
            {/* Table */}
            {ordenArticulos.length > 0 && <OrdenArticulosTable />}
            <div className="left-0 flex justify-center w-full pt-7 space-x-4 md:px-4 md:absolute">
              <button
                type="submit"
                className="text-white w-full justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
