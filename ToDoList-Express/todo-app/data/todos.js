
// Ce fichier n'est plus utilisé depuis l'intégration de MongoDB.
// Il est conservé uniquement pour montrer l'évolution du projet :
 

/**
 * Tableau contenant les tâches par défaut au démarrage du serveur.
 * Dans un projet réel, ces données viendraient d'une vraie base de données
 * (ex : MongoDB, MySQL, PostgreSQL...).
 *
 * Chaque tâche contient :
 *   - id     : identifiant unique (nombre entier)
 *   - titre  : description de la tâche (chaîne de caractères)
 *   - statut : état de la tâche — "fait" ou "pas fait"
 *
 * Avec MongoDB, l'id devient "_id" généré automatiquement par Mongoose,
 * et les données sont sauvegardées définitivement dans la base de données.
 */
let todos = [
  { id: 1, titre: 'Faire les courses', statut: 'pas fait' },
  { id: 2, titre: 'Apprendre Express', statut: 'fait' },
  { id: 3, titre: 'Finir le projet', statut: 'pas fait' },
];

/* Exportation du tableau pour l'utiliser dans les routes
  Ce module n'est plus importé dans routes/todos.js
 car les données viennent maintenant de MongoDB → models/todo.js*/
module.exports = todos;