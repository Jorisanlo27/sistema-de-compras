import type { Departamento } from "../types/api";

export const getAll = async () => {
    const res = await fetch(`http://localhost:8080/api/v1/departamentos`);
    const departamentos = (await res.json()) as Departamento;
    return departamentos;
}

export const getById = async ({ id }: { id: number }) => {
    const res = await fetch(`http://localhost:8080/api/v1/departamentos/${id}`);
    const departamento = (await res.json()) as Departamento;
    return departamento;
}