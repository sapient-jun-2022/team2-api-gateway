const httpProxy = require('express-http-proxy');


const productServiceProxy = httpProxy('http://localhost:3000');
const orderServiceProxy = httpProxy('http://localhost:2000');

class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {

    this.app.get("/", (req, res) => {
      res.json("API GATEWAY CALLED... ")
    })


    this.app.get("/product/", (req, res) => {
      productServiceProxy(req, res);
    })

    this.app.get('/product/:productId', (req, res) => {
      productServiceProxy(req, res);
    });


    // TODO 
    this.app.get("/order/", (req, res) => {
      orderServiceProxy(req, res);
    })

    this.app.get('/order/:orderId', (req, res) => {
      orderServiceProxy(req, res);
    });

  }
  routesConfig() {
    this.appRoutes();
  }

}

module.exports = Routes;