import { useContext, useEffect, useState } from "react";
import Datepicker, { type DateType, type DateValueType } from "react-tailwindcss-datepicker";
import type {
  OrdenCompra,
  OrdenesArticulos
} from "../../../types/api";
import { OrdenCompraContext } from "./context/OrdenCompraContext";
export default function OrdenCompras() {
  const [ordenCompras, setOrdenCompras] = useState<OrdenCompra[]>([]);
  const [selectedDateRange, setSelectedDateRange] = useState<{
    startDate: DateType;
    endDate: DateType;
  }>({ startDate: null, endDate: null });

  useEffect(() => {
    (async () => {
      ["ordencompras", "departamentos", "proveedores"].map(async (drop) => {
        const response = await fetch(`/services/${drop}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (drop == "ordencompras")
          setOrdenCompras((await response.json()) as OrdenCompra[]);
      });
    })();
  }, []);

  const {setOrdenCompra, setOrdenArticulos } =
    useContext(OrdenCompraContext);

  const handleClickEdit = (ordenCompra: OrdenCompra) => {
    (document.getElementById("form_edit") as HTMLFormElement).reset();
    setOrdenCompra(ordenCompra);

    setOrdenArticulos([...ordenCompra.articulos] as OrdenesArticulos[]);
    (
      document.getElementById("updateProductButton") as HTMLButtonElement
    ).click();
  };

  const handleDelete = async (id: number | null) => {
    await fetch("/services/ordencompras", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    location.reload();
  };

  const filteredOrdenCompras = ordenCompras.filter((ordenCompra) => {
    if (!selectedDateRange.startDate || !selectedDateRange.endDate) return true;

    const ordenCompraDate = new Date(ordenCompra.fecha);
    var nuevoAño = ordenCompraDate.getFullYear();
    var nuevoMes = ordenCompraDate.getMonth() + 1;
    var nuevoDía = ordenCompraDate.getDate();
    var ordenCompraFechaFormateada = nuevoAño + '-' + (nuevoMes < 10 ? '0' : '') + nuevoMes + '-' + (nuevoDía < 10 ? '0' : '') + nuevoDía;

    return (
      ordenCompraFechaFormateada >= selectedDateRange.startDate &&
      ordenCompraFechaFormateada <= selectedDateRange.endDate
    );
  });

  return (
    <>
      {ordenCompras ? (
        <div className="flex flex-col">
          <div className="w-2/5">
            <Datepicker
              popoverDirection="down"
              placeholder={"Buscar por fecha"}
              useRange={false}
              separator={"a"}
              showShortcuts={true}
              value={selectedDateRange}
              onChange={(value: DateValueType) => {
                if (value) {
                  setSelectedDateRange({
                    startDate: value.startDate,
                    endDate: value.endDate,
                  });
                }
              }}
            />
          </div>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      {[
                        "#",
                        "Codigo",
                        "Descripción",
                        "Monto",
                        "Fecha",
                        "Estado",
                        "No. Asiento",
                        "Acciones",
                      ].map((th, i) => (
                        <th
                          key={i}
                          scope="col"
                          className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                        >
                          {th}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {filteredOrdenCompras.map((ordenCompra: OrdenCompra, i) => (
                      <tr
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        key={i}
                      >
                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div className="text-base font-semibold text-gray-900 dark:text-white">
                            <data value="id">{i + 1}</data>
                          </div>
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <data value="numero">{ordenCompra.numero}</data>
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <data value="descripcion">
                            {ordenCompra.descripcion}
                          </data>
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <data value="monto">{ordenCompra.monto ?? "0"}</data>
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <data value="fecha">
                            {new Date(ordenCompra.fecha).toLocaleDateString()}
                          </data>
                        </td>
                        <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            {ordenCompra.estado ? (
                              <>
                                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" />
                                <span>Activo</span>
                              </>
                            ) : (
                              <>
                                <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2" />
                                <span>Inactivo</span>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <data value="idAsiento">
                            {ordenCompra.idAsiento ?? "NULL"}
                          </data>
                        </td>
                        <td className="p-4 space-x-2 whitespace-nowrap">
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            onClick={() =>
                              handleClickEdit({
                                ...ordenCompra,
                                numero: ordenCompra.numero.split("-")[1],
                              })
                            }
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <svg>
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path
                                  fillRule="evenodd"
                                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </svg>
                            Editar
                          </button>
                          <button
                            id="deleteProductButton"
                            onClick={() => handleDelete(ordenCompra.id)}
                            data-drawer-target="drawer-delete-product-default"
                            data-drawer-show="drawer-delete-product-default"
                            aria-controls="drawer-delete-product-default"
                            data-drawer-placement="right"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
