const express = require('express');
const cors = require('cors');
const app = express();
const companiesRoutes = require('./routes/companies');

app.use(cors());
app.use(express.json());
app.use('/companies', companiesRoutes);
app.listen(4000);