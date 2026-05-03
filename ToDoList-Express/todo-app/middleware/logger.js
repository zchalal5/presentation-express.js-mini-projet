// ============================================================
// middleware/logger.js — Middleware de journalisation des requêtes
// ============================================================

/**
 * Ce middleware s'exécute à chaque requête reçue par le serveur.
 * Il affiche dans la console l'heure, la méthode HTTP et l'URL appelée.
 * 
 * @param {Object} req  - L'objet requête Express
 * @param {Object} res  - L'objet réponse Express
 * @param {Function} next - Fonction pour passer au middleware/route suivant
 */
const logger = (req, res, next) => {
  // Récupération de l'heure locale au moment de la requête
  const heure = new Date().toLocaleTimeString();

  // Affichage du log dans la console : heure + méthode HTTP + URL
  console.log(`[${heure}] REQUÊTE : ${req.method} sur ${req.url}`);

  // Appel de next() obligatoire pour continuer le traitement de la requête
  next();
};

// Exportation du middleware pour l'utiliser dans app.js
module.exports = logger;
