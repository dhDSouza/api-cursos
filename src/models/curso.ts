import { db } from '../db';

export class Curso {
  private id: number;
  private nome: string;
  private descricao: string;

  constructor(id: number, nome: string, descricao: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
  }

  static async getAll() {
    const [rows] = await db.query('SELECT * FROM CURSOS');
    return rows;
  }

  static async getById(id: number) {
    const [rows] = await db.query('SELECT * FROM CURSOS WHERE ID = ?', [id]);
    return rows;
  }

  static async create(nome: string, descricao: string) {
    const [result] = await db.query('INSERT INTO CURSOS (NOME, DESCRICAO) VALUES (?, ?)', [nome, descricao]);
    return result;
  }

  static async update(id: number, nome: string, descricao: string) {
    const [result] = await db.query('UPDATE CURSOS SET NOME = ?, DESCRICAO = ? WHERE ID = ?', [nome, descricao, id]);
    return result;
  }

  static async delete(id: number) {
    const [result] = await db.query('DELETE FROM CURSOS WHERE ID = ?', [id]);
    return result;
  }
}