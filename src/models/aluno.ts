import { db } from '../db';

export class Aluno {
  private id: number;
  private nome: string;
  private email: string;
  private idCurso: number;

  constructor(id: number, nome: string, email: string, idCurso: number) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.idCurso = idCurso;
  }

  static async getAll() {
    const [rows] = await db.query('SELECT * FROM ALUNOS');
    return rows;
  }

  static async getById(id: number) {
    const [rows] = await db.query('SELECT * FROM ALUNOS WHERE ID = ?', [id]);
    return rows;
  }

  static async create(nome: string, email: string, idCurso: number) {
    const [result] = await db.query('INSERT INTO ALUNOS (NOME, EMAIL, ID_CURSO) VALUES (?, ?, ?)', [nome, email, idCurso]);
    return result;
  }

  static async update(id: number, nome: string, email: string, idCurso: number) {
    const [result] = await db.query('UPDATE ALUNOS SET NOME = ?, EMAIL = ?, ID_CURSO = ? WHERE ID = ?', [nome, email, idCurso, id]);
    return result;
  }

  static async delete(id: number) {
    const [result] = await db.query('DELETE FROM ALUNOS WHERE ID = ?', [id]);
    return result;
  }
}