const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/api/hello', (req, res) => {
    res.send({message : 'Heelo Express'});
});

app.get('/api/hello2', (req, res) => {
    res.send([
        {
            'id' : "1",
            'image' : "https://placeimg.com/64/64/1",
            'name' : '홍길동',
            'birthday' : '941001',
            'gender' : '남자1',
            'job' : '학생1'
        },
        {
            'id' : "2",
            'image' : "https://placeimg.com/64/64/2",
            'name' : '홍길동2',
            'birthday' : '941002',
            'gender' : '남자2',
            'job' : '학생2'
        },
        {
            'id' : "3",
            'image' : "https://placeimg.com/64/64/3",
            'name' : '홍길동3',
            'birthday' : '941003',
            'gender' : '남자3',
            'job' : '학생3'
        }
    ]);
});

app.listen(port,()=> console.log(`Listening on port ${port}`));