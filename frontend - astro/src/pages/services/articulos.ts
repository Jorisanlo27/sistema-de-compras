import type { APIRoute } from "astro";
import { API } from "../../app/constants";
import type { Articulo, Marca, UnidadMedida } from "../../types/api";

export const getArticulos = async () => {
  const res = await fetch(API + "/articulos");
  return (await res.json()) as Articulo;
};

export const GET: APIRoute = async () => {
  const response = await fetch(API + "/articulos", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return new Response(JSON.stringify(await response.json()));
};

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const descripcion = data.get("descripcion_add") as string;
  const marca = { id: data.get("marca_add") as unknown as number } as Marca;
  const unidadMedida = {
    id: data.get("unidadMedida_add") as unknown as number,
  } as UnidadMedida;
  const existencia = data.get("existencia_add") as unknown as number;
  const estado = (data.get("estado_add")?.toString() == "true") as boolean;

  await fetch(API + "/articulos", {
    method: "POST",
    body: JSON.stringify({
      descripcion,
      marca,
      unidadMedida,
      existencia,
      estado,
    }),
    headers: { "Content-Type": "application/json" },
  });

  return new Response(
    JSON.stringify({
      message: "Saved!",
    }),
    { status: 200 }
  );
};

export const PUT: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("id_edit") as any;

  const descripcion = data.get("descripcion_edit") as string;
  const marca = { id: data.get("marca_edit") as unknown as number } as Marca;
  const unidadMedida = {
    id: data.get("unidadMedida_edit") as unknown as number,
  } as UnidadMedida;
  const existencia = data.get("existencia_edit") as unknown as number;
  const estado = (data.get("estado_edit")?.toString() == "true") as boolean;

  await fetch(API + "/articulos", {
    method: "POST",
    body: JSON.stringify({
      id,
      descripcion,
      marca,
      unidadMedida,
      existencia,
      estado,
    } as UnidadMedida),
    headers: { "Content-Type": "application/json" },
  });
  return new Response(
    JSON.stringify({
      message: "Saved!",
    }),
    { status: 201 }
  );
};
export const DELETE: APIRoute = async ({ request }) => {
  const requestObject = await request.json();
  const id = requestObject.id;

  await fetch(API + `/articulos/${id}`, {
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
