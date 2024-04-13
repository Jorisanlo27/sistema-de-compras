import React, { useContext, type FormEvent } from "react";
import type { OrdenesArticulos } from "../../../types/api";
import { OrdenCompraContext } from "./context/OrdenCompraContext";
import { initialStateOrdenArticulo } from "./utils/initialStates";

function FormOrdenArticulos() {
  const {
    unidadMedida,
    articulos,
    ordenArticulo,
    setOrdenArticulo,
    ordenArticulos,
    setOrdenArticulos,
    isEditOrdenArticuloMode,
    setIsEditOrdenArticuloMode,
  } = useContext(OrdenCompraContext);

  const handleOrdenArticulos = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEditOrdenArticuloMode.edit) {
      setOrdenArticulos((prevState: OrdenesArticulos[]) => [
        ...prevState,
        { ...ordenArticulo } as OrdenesArticulos,
      ]);
    } else {
      const ordArtEdit =
        ordenArticulos[isEditOrdenArticuloMode.articuloEditIndex];

      const modifiedordenArticulo = {
        ...ordArtEdit,
        cantidad: ordenArticulo.cantidad,
        costoUnitario: ordenArticulo.costoUnitario,
        unidadMedida: ordenArticulo.unidadMedida,
        articulo: ordenArticulo.articulo,
      } as OrdenesArticulos;

      const newOrdenArticulos = [...ordenArticulos];

      newOrdenArticulos[isEditOrdenArticuloMode.articuloEditIndex] =
        modifiedordenArticulo;

      setOrdenArticulos(newOrdenArticulos);

      setIsEditOrdenArticuloMode({
        edit: false,
        articuloEditIndex: NaN,
      });
    }
    setOrdenArticulo(initialStateOrdenArticulo);
    (
      document.getElementById("orden_articulo_close_button") as HTMLFormElement
    ).click();
  };

  const handleChangesArticulos = async (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const formElement = e.target;

    const isValidNumber = async (inputValue: string) => {
      if (inputValue == "" || isNaN(parseInt(inputValue))) {
        return 0;
      } else {
        return parseInt(inputValue);
      }
    };

    let modifiedOrdenArticulo = {
      ...ordenArticulo,
    };

    if (formElement.id == "articulo_add") {
      modifiedOrdenArticulo = {
        ...modifiedOrdenArticulo,
        articulo: {
          ...modifiedOrdenArticulo.articulo,
          id: parseInt(formElement.value),
        },
      };
    }

    if (formElement.id == "unidad_medida_add") {
      modifiedOrdenArticulo = {
        ...modifiedOrdenArticulo,
        unidadMedida: {
          ...modifiedOrdenArticulo.unidadMedida,
          id: parseInt(formElement.value),
        },
      };
    }

    if (formElement.id == "cantidad_add") {
      modifiedOrdenArticulo = {
        ...modifiedOrdenArticulo,
        cantidad: await isValidNumber(formElement.value),
      };
    }

    if (formElement.id == "costo_unitario_add") {
      modifiedOrdenArticulo = {
        ...modifiedOrdenArticulo,
        costoUnitario: await isValidNumber(formElement.value),
      };
    }

    setOrdenArticulo(modifiedOrdenArticulo);
  };

  const handleClosingModal = async () => {
    await setOrdenArticulo(initialStateOrdenArticulo);

    (document.getElementById("orden_articulo_form") as HTMLFormElement).reset();

    setIsEditOrdenArticuloMode({ articuloEditIndex: NaN, edit: false });
  };

  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        id="crud-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        data-modal-backdrop="static"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {isEditOrdenArticuloMode.edit
                  ? "Actualizar orden artículo"
                  : "Crear nueva orden articulo"}
              </h3>
              <button
                id="orden_articulo_close_button"
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
                onClick={handleClosingModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form
              id="orden_articulo_form"
              className="p-4 md:p-5"
              onSubmit={handleOrdenArticulos}
            >
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="articulo_add"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Articulo
                  </label>
                  <select
                    value={ordenArticulo?.articulo?.id}
                    id="articulo_add"
                    name="articulo_add"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={handleChangesArticulos}
                    required
                  >
                    <option value="">--Seleccione--</option>

                    {articulos
                      .filter((art) => art.estado)
                      .map((art, i) => (
                        <option key={i} value={art.id}>
                          {art.descripcion}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="cantidad_add"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Cantidad
                  </label>
                  <input
                    type="number"
                    name="cantidad_add"
                    id="cantidad_add"
                    value={ordenArticulo?.cantidad}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Digite la cantidad"
                    onChange={handleChangesArticulos}
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="unidad_medida_add"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Unidad de medida
                  </label>
                  <select
                    value={ordenArticulo?.unidadMedida?.id}
                    id="unidad_medida_add"
                    name="unidad_medida_add"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={handleChangesArticulos}
                    required
                  >
                    <option value="">--Seleccione--</option>
                    {unidadMedida
                      .filter((unidad) => unidad.estado)
                      .map((unidad, i) => (
                        <option key={i} value={unidad.id}>
                          {unidad.descripcion}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="costo_unitario_add"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Costo unitario
                  </label>
                  <input
                    type="number"
                    name="costo_unitario_add"
                    id="costo_unitario_add"
                    value={ordenArticulo?.costoUnitario}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Digite la cantidad"
                    onChange={handleChangesArticulos}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                //data-modal-toggle="crud-modal"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {isEditOrdenArticuloMode.edit
                  ? "Actualizar orden artículo"
                  : "Agregar orden artículo"}{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormOrdenArticulos;
