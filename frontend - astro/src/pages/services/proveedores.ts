import type { APIRoute } from "astro";
import { API } from "../../app/constants";
import type { Proveedor } from "../../types/api";

export const getProveedores = async () => {
  const res = await fetch(API + `/proveedores`);
  return (await res.json()) as Proveedor;
}

export const GET: APIRoute = async () => {
  const response = await fetch(API + "/proveedores", {
    headers: {
      "Content-Type": "application/json"
    }
  })
  return new Response(JSON.stringify(await response.json()))
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const nombreComercial = data.get("nombre_add") as string;
  const documento = data.get("documento_add") as any;
  const estado = (data.get("estado_add")?.toString() == 'true') as boolean

  await fetch(API + "/proveedores", {
    method: "POST",
    body: JSON.stringify({ nombreComercial, documento, estado } as Proveedor),
    headers: { 'Content-Type': 'application/json' }
  });

  return new Response(
    JSON.stringify({
      message: "Saved!"
    }),
    { status: 200 }
  );
};

export const PUT: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id_edit") as any;
  const nombreComercial = data.get("nombre_edit") as string;
  const documento = data.get("documento_edit") as any;
  const estado = (data.get("estado_edit")?.toString() == 'true') as boolean

  await fetch(API + "/proveedores", {
    method: "POST",
    body: JSON.stringify({ id, nombreComercial, documento, estado } as Proveedor),
    headers: { 'Content-Type': 'application/json' }
  });

  return new Response(
    JSON.stringify({
      message: "Edited!"
    }),
    { status: 200 }
  );
};

export const DELETE: APIRoute = async ({ request }) => {

  const requestObject = await request.json();
  const id = requestObject.id;

  await fetch(API + `/proveedores/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return new Response(
    JSON.stringify({
      message: "Deleted!"
    }),
    { status: 200 }
  );
}