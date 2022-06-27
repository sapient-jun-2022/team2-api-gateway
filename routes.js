const httpProxy = require('express-http-proxy');


const userServiceProxy = httpProxy('http://localhost:3000');
const cartServiceProxy = httpProxy('http://localhost:3001');

class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {

    this.app.get("/", (req, res) => {
      res.json("API GATEWAY CALLED... ")
    })


    this.app.get("/user/*", (req, res) => {
      userServiceProxy(req, res);
    })

    // TODO 
    this.app.get("/cart/*", (req, res) => {
      cartServiceProxy(req, res);
    })

   
  }
  routesConfig() {
    this.appRoutes();
  }

}

module.exports = Routes;