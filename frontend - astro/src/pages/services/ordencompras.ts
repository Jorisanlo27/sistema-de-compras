import type { APIRoute } from "astro";
import { API } from "../../app/constants";
import type { OrdenCompra } from "../../types/api";

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

export const POST: APIRoute = async ({ request }) => {
  const ordenCompra = (await request.json()) as OrdenCompra;

  await fetch(API + "/ordenesCompra", {
    method: "POST",
    body: JSON.stringify(ordenCompra),
    headers: { "Content-Type": "application/json" },
  } as RequestInit);

  return new Response(
    JSON.stringify({
      message: "Saved!",
    }),
    { status: 200 }
  );
};


export const PUT: APIRoute = async ({ request }) => {
  const ordenCompra = (await request.json()) as OrdenCompra;

  await fetch(API + "/ordenesCompra", {
    method: "POST",
    body: JSON.stringify(ordenCompra),
    headers: { "Content-Type": "application/json" },
  } as RequestInit);

  return new Response(
    JSON.stringify({
      message: "Saved!",
    }),
    { status: 200 }
  );
};


export const DELETE: APIRoute = async ({ request }) => {
  const requestObject = await request.json();
  const id = requestObject.id;

  await fetch(API + `/ordenesCompra/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return new Response(
    JSON.stringify({
      message: "Deleted!",
    }),
    { status: 200 }
  );
};
