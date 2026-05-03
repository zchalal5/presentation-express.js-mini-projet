// routes/todos.js
// Ce fichier gère toutes les opérations sur les tâches (CRUD)

const express = require('express');
const router = express.Router();

// On importe notre modèle Todo
const Todo = require('../models/todo');

// ─────────────────────────────────────────
// GET /todos  →  Récupérer toutes les tâches
// ─────────────────────────────────────────
router.get('/', async (req, res) => {
  try {
    // findAll() = SELECT * FROM Todos
    const todos = await Todo.findAll();
    res.json(todos);

  } catch (erreur) {
    res.status(500).json({ message: 'Erreur lors de la récupération', erreur: erreur.message });
  }
});

// ─────────────────────────────────────────
// GET /todos/:id  →  Récupérer une seule tâche
// ─────────────────────────────────────────
router.get('/:id', async (req, res) => {
  try {
    // findByPk() = SELECT * FROM Todos WHERE id = ?
    // "Pk" = Primary Key = notre colonne "id"
    const todo = await Todo.findByPk(req.params.id);

    // Si aucune tâche trouvée avec cet id
    if (!todo) {
      return res.status(404).json({ message: 'Tâche introuvable' });
    }

    res.json(todo);

  } catch (erreur) {
    res.status(500).json({ message: 'Erreur lors de la récupération', erreur: erreur.message });
  }
});

// ─────────────────────────────────────────
// POST /todos  →  Créer une nouvelle tâche
// ─────────────────────────────────────────
router.post('/', async (req, res) => {
  try {
    // On récupère le titre envoyé dans le body de la requête
    const { title, completed } = req.body;

    // Vérification : le titre est obligatoire
    if (!title) {
      return res.status(400).json({ message: 'Le titre est obligatoire' });
    }

    // create() = INSERT INTO Todos (title, completed) VALUES (?, ?)
    const nouveauTodo = await Todo.create({
      title,
      completed: completed || false, // false par défaut si non précisé
    });

    // 201 = "Created" — la ressource a bien été créée
    res.status(201).json(nouveauTodo);

  } catch (erreur) {
    res.status(500).json({ message: 'Erreur lors de la création', erreur: erreur.message });
  }
});

// ─────────────────────────────────────────
// PUT /todos/:id  →  Modifier une tâche
// ─────────────────────────────────────────
router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: 'Tâche introuvable' });
    }

    const { title, completed } = req.body;

    // update() = UPDATE Todos SET title=?, completed=? WHERE id=?
    // On met à jour seulement les champs envoyés (si title n'est pas envoyé, il ne change pas)
    await todo.update({
      title:     title     !== undefined ? title     : todo.title,
      completed: completed !== undefined ? completed : todo.completed,
    });

    res.json(todo);

  } catch (erreur) {
    res.status(500).json({ message: 'Erreur lors de la modification', erreur: erreur.message });
  }
});

// ─────────────────────────────────────────
// DELETE /todos/:id  →  Supprimer une tâche
// ─────────────────────────────────────────
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: 'Tâche introuvable' });
    }

    // destroy() = DELETE FROM Todos WHERE id=?
    await todo.destroy();

    res.json({ message: 'Tâche supprimée avec succès' });

  } catch (erreur) {
    res.status(500).json({ message: 'Erreur lors de la suppression', erreur: erreur.message });
  }
});

module.exports = router;