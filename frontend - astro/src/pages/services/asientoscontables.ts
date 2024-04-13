import type { APIRoute } from "astro";
import { API_CONTABILIDAD } from "../../app/constants";
import type {
  AsientoContable
} from "../../types/api";

export const POST: APIRoute = async ({ request }) => {
  const asientoContable = (await request.json()) as AsientoContable;

  const response = await fetch(API_CONTABILIDAD, {
    method: "POST",
    body: JSON.stringify(asientoContable),
    headers: { "Content-Type": "application/json" },
  } as RequestInit);

  return new Response(
    JSON.stringify((await response.json())),
    { status: 200 }
  );
};
