const httpProxy = require('express-http-proxy');


const userServiceProxy = httpProxy('http://localhost:3000');
const productServiceProxy = httpProxy('http://localhost:3001');
const cartServiceProxy = httpProxy('http://localhost:3002');
const orderServiceProxy = httpProxy('http://localhost:3003');
const adminProductServiceProxy = httpProxy('http://localhost:3004');

class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {

    this.app.get("/", (req, res) => {
      res.json("API GATEWAY CALLED... ")
    })


    this.app.all("/user/*", (req, res) => {
      console.log('user login post');
      userServiceProxy(req, res);
    })
    this.app.get("/products/*", (req, res) => {
      productServiceProxy(req, res);
    })

    // CART 
    this.app.get("/cart/*", (req, res) => {
      cartServiceProxy(req, res);
    })

    // ADMIN 
    this.app.get("/admin/*", (req, res) => {
      adminProductServiceProxy(req, res);
    })

    // ORDER 
    this.app.get("/order/*", (req, res) => {
      orderServiceProxy(req, res);
    })

   
  }
  routesConfig() {
    this.appRoutes();
  }

}

module.exports = Routes;