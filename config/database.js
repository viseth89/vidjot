if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI:
    'mongodb://vibol:vibol1@ds139614.mlab.com:39614/vidjot-prod'
  }
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}