// app.js
// Point d'entrée principal de notre application

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database'); // Notre connexion MySQL
const Todo = require('./models/todo');
const todoRoutes = require('./routes/todos');
const app = express();

// Middleware pour lire le JSON dans les requêtes
app.use(express.json());
app.use(cors());  
app.use('/todos', todoRoutes);

// Fonction de démarrage : on teste d'abord la connexion MySQL
async function demarrerServeur() {
  try {
    // authenticate() envoie un "ping" à MySQL pour vérifier que ça marche
    await sequelize.authenticate();
    console.log('✅ Connexion MySQL réussie !');

    // sync() crée automatiquement les tables si elles n'existent pas
    // { force: false } = ne pas supprimer les données existantes
    await sequelize.sync({ force: false });
    console.log('✅ Tables synchronisées avec la base de données');

    // Le serveur démarre APRÈS que la base de données est prête
    app.listen(3000, () => {
      console.log('🚀 Serveur démarré sur http://localhost:3000');
    });

  } catch (erreur) {
    // Si la connexion échoue, on affiche le problème clairement
    console.error('❌ Erreur de connexion MySQL :', erreur.message);
    console.error('👉 Vérifie que XAMPP est démarré et que MySQL est actif');
    process.exit(1); // On arrête le programme proprement
  }
}

// On lance la fonction de démarrage
demarrerServeur();