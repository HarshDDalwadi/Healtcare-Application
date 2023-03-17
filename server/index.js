const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.get('/login', (req, res) => {
	console.log("Hi Gandus....")
})

app.post('/login', (req, res) => {
	console.log(req.body.info);
	res.send("Hi Gandus");
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));