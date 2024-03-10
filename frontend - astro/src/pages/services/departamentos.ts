import type { APIRoute } from "astro";
import type { Departamento } from "../../types/api";

export const getAll = async () => {
  const res = await fetch(`http://localhost:8080/api/v1/departamentos`);
  return (await res.json()) as Departamento;
}

export const getById = async ({ id }: { id: number }) => {
  const res = await fetch(`http://localhost:8080/api/v1/departamentos/${id}`);
  return (await res.json()) as Departamento;
}

export const GET: APIRoute = async () => {
  const response = await fetch("http://localhost:8080/api/v1/departamentos", {
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

  await fetch("http://localhost:8080/api/v1/departamentos", {
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

  await fetch("http://localhost:8080/api/v1/departamentos", {
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

  await fetch(`http://localhost:8080/api/v1/departamentos/${id}`, {
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