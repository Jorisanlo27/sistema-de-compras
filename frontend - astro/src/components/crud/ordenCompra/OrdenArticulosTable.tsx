import { useContext } from "react";
import type { OrdenesArticulos } from "../../../types/api";
import { OrdenCompraContext } from "./context/OrdenCompraContext";
import { initialStateOrdenArticulo } from "./utils/initialStates";

function OrdenArticulosTable() {
  const {
    articulos,
    ordenArticulos,
    setOrdenArticulos,
    setOrdenArticulo,
    setIsEditOrdenArticuloMode,
  } = useContext(OrdenCompraContext);

  const handleEditTable = (
    event: React.MouseEvent<HTMLAnchorElement> | undefined,
    ordAr: OrdenesArticulos,
    arrayIndex: number
  ) => {
    const updateIsEditState = new Promise((resolve, reject) => {
      setIsEditOrdenArticuloMode({
        edit: true,
        articuloEditIndex: arrayIndex,
      });

      resolve(true);
    });

    updateIsEditState.then(() =>
      document.getElementById("orden_articulo_modal_toggle")?.click()
    );
  };

  const handleRemoveOrdenArticulo = (index: number) => {
    const newState = [...ordenArticulos];
    newState.splice(index, 1);
    setOrdenArticulos(newState);
    setOrdenArticulo(initialStateOrdenArticulo);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {["Nombre articulo", "Cantidad", "Costo unitario"].map(
                (th, i) => (
                  <th key={i} scope="col" className="px-3 py-3">
                    {th}
                  </th>
                )
              )}
              <th scope="col" className="px-3 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {ordenArticulos.map((ordAr, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                >
                  <a
                    href="#"
                    onClick={(e) => handleEditTable(e, ordAr, i)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </a>
                  {
                    articulos.find((art) => art.id == ordAr.articulo.id)
                      ?.descripcion
                  }
                </th>
                <td className="px-3 py-4">{ordAr.cantidad}</td>
                <td className="px-3 py-4">{ordAr.costoUnitario}</td>
                <td className="px-3 py-4 text-left">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    data-modal-target="deleteModal"
                    data-modal-toggle="deleteModal"
                    onClick={() => handleRemoveOrdenArticulo(i)}
                  >
                    Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OrdenArticulosTable;
