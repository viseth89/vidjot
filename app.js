const express   = require('express');
const exphbs    = require('express-handlebars');
const mongoose  = require('mongoose')

const app = express();

// Map global promise - get rid of warning (depreciated)
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect('mongodb://localhost/vidjog-dev', {
  useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// Load Idea Model
require('./models/Idea');
const Idea = mongoose.model('ideas');


// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// How middleware WOrks
app.use(function(req, res, next){
  console.log(Date.now());
  req.name = 'Viseth SEN';
  next()
});

// Index Route
app.get('/', (req, res) =>{
  const title='Welcome';
  res.render('index', {
    title:title
  });
});

// About Route
app.get('/about', (req, res) =>{
  res.render('ABOUT');
});



const port = 5000;

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
