const express = require('express');
const router = require('./routes/index.routes');
const PORT = 4000;
const app = express();

app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
