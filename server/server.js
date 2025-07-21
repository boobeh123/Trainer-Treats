const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/database')
const apiRoutes = require('./routes/api')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(cors());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', apiRoutes)

// app.get('/api/:name', (request, response) => {
//     const muscleName = request.params.name.toLowerCase();
//     console.log(request.params.name);
//     if (stretches[muscleName]) {
//         response.json(stretches[muscleName]);
//     } else {
//         response.json(stretches.unknown);
//     }
// })

// app.put('/addUpvote', (request, response) => {
//     db.collection('stretches').findOneAndUpdate({name: request.body.name, likes: request.body.likes}, {
//         $set: {
//             likes: request.body.likes + 1
//           }
//     },{
//         sort: {_id: -1},
//         upsert: true
//     })
//     .then(result => {
//         console.log('Added One Like')
//         response.json('Like Added')
//     })
//     .catch(error => console.error(error))
// })

// originally commented out
// app.get('/', async (request, response) => {
    // const todoItems = await db.collection('stretches').find().toArray()
    // const itemsLeft = await db.collection('stretches').countDocuments()
    // response.render('index.ejs', { items: todoItems, left: itemsLeft })
    // db.collection('todos').find().toArray()
    // .then(data => {
    //     db.collection('todos').countDocuments({completed: false})
    //     .then(itemsLeft => {
    //         response.render('index.ejs', { items: data, left: itemsLeft })
    //     })
    // })
    // .catch(error => console.error(error))
// });
// originally commented out

// app.post('/addStretch', (request, response) => {
//     db.collection('stretches').insertOne(
//         {
//             name: request.body.stretchName, 
//             muscle: request.body.muscleRegion, 
//             difficulty: request.body.stretchDiff, 
//             instructions: request.body.stretchDir,
//             likes: 0
//         })
//     .then(result => {
//         console.log('Stretch Added')
//         response.redirect('/')
//     })
//     .catch(error => console.error(error))
// })

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});

