const dicas = require('../../data/dicas.json');

export default function handler(req, res) {
  res.status(200).json(dicas);
}