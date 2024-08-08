import { Request, Response } from 'express';
import { Curso } from '../models/curso';

export class CursoController {
  static async getAll(req: Request, res: Response) {
    const cursos = await Curso.getAll();
    res.json(cursos);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const curso = await Curso.getById(parseInt(id, 10));
    res.json(curso);
  }

  static async create(req: Request, res: Response) {
    const { nome, descricao } = req.body;
    const result = await Curso.create(nome, descricao);
    res.json(result);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, descricao } = req.body;
    const result = await Curso.update(parseInt(id, 10), nome, descricao);
    res.json(result);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const result = await Curso.delete(parseInt(id, 10));
    res.json(result);
  }
}