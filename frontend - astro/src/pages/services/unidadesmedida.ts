import type { APIRoute } from "astro";
import type { UnidadMedida } from "../../types/api";

export const getUnidadesMedida = async () => {
  const res = await fetch(`http://localhost:8080/api/v1/unidadmedida`);
  return (await res.json()) as UnidadMedida;
}

export const getUnidadMedidaById = async ({ id }: { id: number }) => {
  const res = await fetch(`http://localhost:8080/api/v1/unidadmedida/${id}`);
  return (await res.json()) as UnidadMedida;
}

export const GET: APIRoute = async () => {
  const response = await fetch("http://localhost:8080/api/v1/unidadmedida", {
    headers: {
      "Content-Type": "application/json"
    }
  })
  return new Response(JSON.stringify(await response.json()))
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const descripcion = data.get("descripcion_add") as string;
  const estado = (data.get("estado_add")?.toString() == 'true') as boolean

  await fetch("http://localhost:8080/api/v1/unidadmedida", {
    method: "POST",
    body: JSON.stringify({ descripcion, estado } as UnidadMedida),
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
  const descripcion = data.get("descripcion_edit") as string;
  const estado = (data.get("estado_edit")?.toString() == 'true') as boolean

  await fetch("http://localhost:8080/api/v1/unidadmedida", {
    method: "POST",
    body: JSON.stringify({ id, descripcion, estado } as UnidadMedida),
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

  await fetch(`http://localhost:8080/api/v1/unidadmedida/${id}`, {
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