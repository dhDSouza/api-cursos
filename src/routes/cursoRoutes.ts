import { Router } from 'express';
import { CursoController } from '../controllers/cursoController';

const router = Router();

router.get('/cursos', CursoController.getAll);
router.get('/cursos/:id', CursoController.getById);
router.post('/cursos', CursoController.create);
router.put('/cursos/:id', CursoController.update);
router.delete('/cursos/:id', CursoController.delete);

export default router;