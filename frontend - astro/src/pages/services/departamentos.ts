import type { APIRoute } from "astro";
import { API } from "../../app/constants";
import type { Departamento } from "../../types/api";

export const getDepartametos = async () => {
  const res = await fetch(API + "/departamentos");
  return (await res.json()) as Departamento;
}

export const GET: APIRoute = async () => {
  const response = await fetch(API + "/departamentos", {
    headers: {
      "Content-Type": "application/json"
    }
  })
  return new Response(JSON.stringify(await response.json()))
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const nombre = data.get("nombre_add") as string;
  const estado = (data.get("estado_add")?.toString() == 'true') as boolean

  await fetch(API + "/departamentos", {
    method: "POST",
    body: JSON.stringify({ nombre, estado } as Departamento),
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
  const nombre = data.get("nombre_edit") as string;
  const estado = (data.get("estado_edit")?.toString() == 'true') as boolean

  await fetch(API + "/departamentos", {
    method: "POST",
    body: JSON.stringify({ id, nombre, estado } as Departamento),
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

  await fetch(API + `/departamentos/${id}`, {
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