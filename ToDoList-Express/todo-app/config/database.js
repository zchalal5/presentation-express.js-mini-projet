// config/database.js
// Ce fichier configure la connexion à notre base de données MySQL

// On importe Sequelize 
const { Sequelize } = require('sequelize');

// On crée une connexion avec 4 informations essentielles :
const sequelize = new Sequelize(
  'todolist',    // Nom de la base de données qu'on vient de créer dans phpMyAdmin
  'root',        // Nom d'utilisateur MySQL (par défaut avec XAMPP c'est "root")
  '',            // Mot de passe (par défaut avec XAMPP )
  {
    host: 'localhost',  // MySQL tourne sur notre propre machine
    dialect: 'mysql',   // On lui dit qu'on utilise MySQL
    logging: false,     // Désactive les logs SQL dans le terminal 
  }
);

// On exporte la connexion pour pouvoir l'utiliser dans d'autres fichiers
module.exports = sequelize;