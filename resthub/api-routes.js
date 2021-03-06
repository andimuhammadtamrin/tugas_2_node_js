//api-routes.js
// initialize express router
let router = require('express').Router();

//set default API response
router.get('/',function(req,res){
  res.json({
    status: 'API its working',
    message: 'Welcome to Resthub crafted!'
  });
});

//import contactControler
var siswaControler = require('./siswaControler');

//contact apiRoutes
router.route('/siswa')
  .get(siswaControler.index)
  .post(siswaControler.new);

router.route('/siswa/:siswa1_id')
  .get(siswaControler.view)
  .patch(siswaControler.update)
  .put(siswaControler.update)
  .delete(siswaControler.delete);

//exports api
module.exports = router;
