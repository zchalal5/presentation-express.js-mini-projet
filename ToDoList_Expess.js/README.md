# Todo List API — Express.js + MySQL

## Prérequis
- Node.js installé
- XAMPP installé (Apache + MySQL démarrés)

## Installation

1. Cloner le projet
2. Installer les dépendances :
   npm install

3. Ouvrir phpMyAdmin → créer une base de données nommée : todolist

4. Démarrer le serveur :
   node app.js

## Structure
- app.js              → point d'entrée, connexion MySQL
- config/database.js  → configuration Sequelize
- models/todo.js      → modèle de la table Todos
- routes/todos.js     → routes CRUD (GET, POST, PUT, DELETE)
- index.html          → interface utilisateur

## Routes API
| Méthode | Route        | Description              |
|---------|--------------|--------------------------|
| GET     | /todos       | Récupérer toutes tâches  |
| GET     | /todos/:id   | Récupérer une tâche      |
| POST    | /todos       | Créer une tâche          |
| PUT     | /todos/:id   | Modifier une tâche       |
| DELETE  | /todos/:id   | Supprimer une tâche      |

## Technologies
- Express.js
- Sequelize (ORM)
- MySQL (via XAMPP)