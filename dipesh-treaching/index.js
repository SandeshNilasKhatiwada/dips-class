const express = require('express');
const PORT = 4000;
const app = express();
app.get('/', (req, res) => {
  const data = ['Sandesh', 'Depish', 'Samip'];

  res.status(404).json({ status: true, message: data });
});
app.get('/:name', (req, res) => {
  const data = ['Sandesh', 'Depish', 'Samip'];
  const name = req.params.name;
  data.includes(name)
    ? res
        .status(200)
        .json({ status: true, message: `User found at ${data.at(name)}` })
    : res.status(404).json({ status: 404, message: 'User not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
