const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour le parsing du JSON et gestion du CORS
app.use(express.json());
app.use(cors());

// Connexion à la base MongoDB nommée "WeatherPlus"
// Assurez-vous que MongoDB fonctionne sur localhost ou adaptez la chaîne de connexion si nécessaire.
mongoose.connect('mongodb://localhost:27017/WeatherPlus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connecté à MongoDB'))
.catch((error) => console.error('Erreur de connexion à MongoDB:', error));

// Exemple de route pour l'inscription
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  // Ici, ajoutez la logique pour enregistrer l'utilisateur dans MongoDB,
  // par exemple via un modèle Mongoose.
  res.json({ message: 'Utilisateur enregistré avec succès' });
});

// Exemple de route pour la connexion
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Ici, ajoutez la logique de vérification des identifiants dans MongoDB.
  res.json({ message: 'Connexion réussie', token: 'fake-jwt-token' });
});

// Exemple de route pour récupérer les favoris
app.get('/api/favorites', (req, res) => {
  // Ici, ajoutez la logique pour récupérer les favoris stockés dans MongoDB.
  res.json({ favorites: [] });
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
