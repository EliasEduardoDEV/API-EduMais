const tecnicas = require('../../data/tecnicasMemorizacao.json');

export default function handler(req, res) {
  res.status(200).json(tecnicas);
}