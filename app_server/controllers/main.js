/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'Express Tralee' });
};

module.exports = {
  index
};