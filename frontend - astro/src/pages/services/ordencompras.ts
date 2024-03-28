import type { APIRoute } from "astro";
import { API } from "../../app/constants";
import type { OrdenCompra} from "../../types/api";

export const getOrdenCompras = async () => {
  const res = await fetch(API + "/ordenesCompra");
  return (await res.json()) as OrdenCompra;
};

export const GET: APIRoute = async () => {
  const response = await fetch(API + "/ordenesCompra/null", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return new Response(JSON.stringify(await response.json()));
};
