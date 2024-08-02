const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

//Initializes express app
const app = express();
const PORT = process.env.PORT || 3000;

//Initializes sequelize
const sequelize = require('./config/connection');
const session = require('express-session');
//Integrates express with sessions
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({});

//configure session
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
