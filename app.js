const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

const mongoose = require('mongoose');

const grapQlSchema = require('./graphql/schema/index');
const grapQlResolvers = require('./graphql/resolvers/index');

const app = express();


app.use(bodyParser.json());

app.use(
    '/graphql',
    graphqlHttp({
    schema: grapQlSchema,
    rootValue: grapQlResolvers,
    graphiql: true
}));

/*mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}
@mongodb://localhost:27017/${process.env.MONGO_DB}?retryWrites=true`*/
/*mongoose.connect('mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017/test')
    .then(() =>{
    app.listen(2000);
})
    .catch(err => {
    console.log(err);
    });*/
mongoose.connect('mongodb://localhost:27017/nowa?retryWrites=true', {useNewUrlParser: true}).then(() =>{
    app.listen(2000);
})
    .catch(err => {
        console.log(err);
    });
