// ===== Lignes à ajouter en TOP =====
require('dotenv').config();
const connectDB = require('./config/db');

// Connexion à la DB (avant les routes)
connectDB();
// ==================================
