const express = require('express');
const Projects = require('./route/projects/projects');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

//서버 실행
app.listen(port, () => console.log('example app listening on port 5000'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());

//Projects 요청 처리
app.use(Projects);
