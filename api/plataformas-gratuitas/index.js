const plataformas = require('../../data/plataformasGratuitas.json');

export default function handler(req, res) {
  res.status(200).json(plataformas);
}