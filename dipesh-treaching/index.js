const express = require('express');
const router = require('./routes/index.routes');
const PORT = 4000;
const app = express();
const path = require('path');

app.use(express.json());

app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
