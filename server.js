const express = require('express');
const app = express();
const companiesRoutes = require('./routes/companies');

app.use(express.json());
app.use('/companies', companiesRoutes);
app.listen(4000);