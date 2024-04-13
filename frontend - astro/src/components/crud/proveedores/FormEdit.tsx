import { useEffect, useState, type FormEvent } from "react";
import type { Proveedor } from "../../../types/api";

export default function FormEdit({ proveedor }: { proveedor: Proveedor }) {
  const [estado, setEstado] = useState<string>(String(proveedor?.estado));

  useEffect(() => {
    setEstado(String(proveedor?.estado));
  }, [proveedor]);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const documento: HTMLFormElement | null = form.querySelector(
      'input[name="documento_edit"]'
    );
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/services/proveedores", {
      method: "PUT",
      body: formData,
    });

    if (response.ok) {
      location.reload();
    } else if (documento && response.status == 403) {
      alert("Cédula/RNC inválido");
    }
  }

  return (
    <div
      id="drawer-update-product-default"
      className="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800"
      tabIndex={-1}
      aria-labelledby="drawer-label"
      aria-hidden="true"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Editar
      </h5>
      <button
        type="button"
        data-drawer-dismiss="drawer-update-product-default"
        aria-controls="drawer-update-product-default"
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
      <form onSubmit={submit} id="form_edit">
        <div className="space-y-4">
          <div>
            <input
              type="number"
              name="id_edit"
              id="id_edit"
              className="hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              defaultValue={proveedor?.id}
              required
            />
          </div>
          <div>
            <label
              htmlFor="nombre_edit"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre Comercial
            </label>
            <input
              type="text"
              name="nombre_edit"
              id="nombre_edit"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              defaultValue={proveedor?.nombreComercial}
              required
            />
          </div>
          <div>
            <label
              htmlFor="documento_edit"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Documento
            </label>
            <input
              type="number"
              maxLength={11}
              name="documento_edit"
              id="documento_edit"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              defaultValue={proveedor?.documento}
              required
            />
          </div>
          <div>
            <label
              htmlFor="estado_edit"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Estado
            </label>
            <select
              id="estado_edit"
              value={estado}
              name="estado_edit"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="">...</option>
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
