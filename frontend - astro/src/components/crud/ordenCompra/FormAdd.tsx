import { useState, type FormEvent, useEffect } from "react";
import type { Marca, UnidadMedida } from "../../../types/api";

export default function FormAdd() {
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    await fetch("/services/articulos", {
      method: "POST",
      body: formData,
    });
    location.reload();
  }
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [unidadesMedida, setUnidadesMedida] = useState<UnidadMedida[]>([]);
  const articulosDropdown = ["marcas", "unidadesmedida"];
  
  useEffect(() => {
  (async () => {
    articulosDropdown.map(async (drop) => {
      const response = await fetch(`/services/${drop}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (drop == "marcas")
      setMarcas((await response.json()) as Marca[]);
      if (drop == "unidadesmedida")
      setUnidadesMedida((await response.json()) as UnidadMedida[]);
    });
  })();
}, []);

  return (
    <div
      id="drawer-create-product-default"
      className="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800"
      tabIndex={-1}
      aria-labelledby="drawer-label"
      aria-hidden="true"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Nuevo artículo
      </h5>
      <button
        type="button"
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
      <form onSubmit={submit} action="/crud/articulos">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="descripcion_add"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              name="descripcion_add"
              id="descripcion_add"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="estado_add"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Marca
            </label>
            <select
              id="marca_add"
              name="marca_add"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            >
              <option value="">--Seleccione--</option>
              {marcas?.filter(marca => marca.estado).map((marca, i) => (
                    <option key={i} value={marca.id}>{marca.nombre}</option>
                  ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="estado_add"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Unidad de medida
            </label>
            <select
              id="unidadMedida_add"
              name="unidadMedida_add"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            >
              <option value="">--Seleccione--</option>
              {unidadesMedida?.filter(unidadesMedida => unidadesMedida.estado).map((medida, i) => (
                      <option key={i} value={medida.id as unknown as string}>{medida.descripcion}</option>
                    ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="descripcion_add"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Existencia
            </label>
            <input
              type="text"
              name="existencia_add"
              id="existencia_add"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            >
              <option value="">--Seleccione--</option>
              <option value="true">Activo</option>
              <option value="false">Inactivo</option>
            </select>
          </div>
          <div className="left-0 flex justify-center w-full pt-10 space-x-4 md:px-4 md:absolute">
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
  );
}
