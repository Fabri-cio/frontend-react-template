export type UsuarioEstado = "activo" | "inactivo";

export type UsuarioRol = "administrador" | "usuario";

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: UsuarioRol;
  estado: UsuarioEstado;
}