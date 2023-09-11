const { User } = require('../models');

async function postUser(req, res) {
  try {
    const { lastName, firstName, email, password } = req.body;
    const newUser = { firstName, lastName, email, password };

    if (!lastName || !firstName || !email || !password) {
      return res.json({ error: 'Informacion Incompleta' });
    }
    const existUser = await User.findOne({ where: { email } });
    if (existUser) return res.status(404).send(' email ya registrado');

    await User.create(newUser);
    return res.status(200).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
    return;
  }
}

module.exports = { postUser };
