// models/todo.js
// Ce fichier décrit la structure de notre table "todos" dans MySQL

// On importe les outils de Sequelize :
// - DataTypes : pour définir le type de chaque colonne (texte, booléen, etc.)
// - Model    : la classe de base dont notre Todo va hériter
const { DataTypes, Model } = require('sequelize');

// On importe notre connexion à la base de données
const sequelize = require('../config/database');

// On définit le modèle Todo — Sequelize va créer la table "todos" automatiquement
const Todo = sequelize.define(
  'Todo',       // Nom du modèle (Sequelize crée une table "Todos" avec un "s" automatiquement)
  {
    // Colonne 1 : id
    // Sequelize crée automatiquement un id auto-incrémenté — pas besoin de le déclarer !
    // Mais on peut le redéfinir si on veut être explicite :
    id: {
      type: DataTypes.INTEGER,    // Nombre entier
      autoIncrement: true,        // 1, 2, 3... automatiquement
      primaryKey: true,           // C'est la clé principale de la table
    },

    // Colonne 2 : title (le texte de la tâche)
    title: {
      type: DataTypes.STRING,     // Texte (VARCHAR 255 en SQL)
      allowNull: false,           // Obligatoire — on ne peut pas créer un todo sans titre
    },

    // Colonne 3 : completed (est-ce que la tâche est terminée ?)
    completed: {
      type: DataTypes.BOOLEAN,    // true ou false
      defaultValue: false,        // Par défaut, une nouvelle tâche n'est pas terminée
    },
  },
  {
    // Options du modèle :
    timestamps: true,   // Sequelize ajoute automatiquement createdAt et updatedAt
                        // → très utile pour savoir quand une tâche a été créée/modifiée
  }
);

// On exporte le modèle pour l'utiliser dans les routes
module.exports = Todo;