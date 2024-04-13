export const API = process.env.CI ? "https://compras-backend.onrender.com/api/v1" : "http://localhost:8080/api/v1";
export const API_CONTABILIDAD = "https://ap1-contabilidad.azurewebsites.net/Contabilidad/AsientoContable";
export const REMOTE_ASSETS_BASE_URL = `https://flowbite-admin-dashboard.vercel.app`;
export const SITE_TITLE = 'Compras';
export const RANDOMIZE = Boolean(import.meta.env.RANDOMIZE) || true;