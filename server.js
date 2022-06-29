const express = require('express');
const http = require('http');

const Routes = require('./routes');
const subProcess = require('child_process')

class Server {
  constructor() {
    this.app = express();
    this.http = http.Server(this.app);
  }

  includeRoutes() {
    new Routes(this.app).routesConfig();
  }

  startMicroServices(){
    const ports = [
      {
        path:'user',
        port:3000
      },
      {
        path:'products',
        port:3001
      },
      {
        path:'cart',
        port:3002
      },
      {
        path:'order',
        port:3003
      },
      {
        path:'admin',
        port:3004
      }];

      subProcess.exec('cd user && npm start', (err, stdout, stderr) => {
        if (err) {
          console.error(err)
          process.exit(1)
        } else {
          console.log(`The stdout Buffer from shell: ${stdout.toString()}`)
          console.log(`The stderr Buffer from shell: ${stderr.toString()}`)
        }
      })
      subProcess.exec('cd products && npm start', (err, stdout, stderr) => {
        if (err) {
          console.error(err)
          process.exit(1)
        } else {
          console.log(`The stdout Buffer from shell: ${stdout.toString()}`)
          console.log(`The stderr Buffer from shell: ${stderr.toString()}`)
        }
      })
      subProcess.exec('cd cart && npm start', (err, stdout, stderr) => {
        if (err) {
          console.error(err)
          process.exit(1)
        } else {
          console.log(`The stdout Buffer from shell: ${stdout.toString()}`)
          console.log(`The stderr Buffer from shell: ${stderr.toString()}`)
        }
      })
      subProcess.exec('cd order && npm start', (err, stdout, stderr) => {
        if (err) {
          console.error(err)
          process.exit(1)
        } else {
          console.log(`The stdout Buffer from shell: ${stdout.toString()}`)
          console.log(`The stderr Buffer from shell: ${stderr.toString()}`)
        }
      })
      subProcess.exec('cd admin-products && npm start', (err, stdout, stderr) => {
        if (err) {
          console.error(err)
          process.exit(1)
        } else {
          console.log(`The stdout Buffer from shell: ${stdout.toString()}`)
          console.log(`The stderr Buffer from shell: ${stderr.toString()}`)
        }
      })

      




  }


  startTheServer() {
    this.includeRoutes();

    const port = process.env.NODE_SERVER_POST || 8000;
    const host = process.env.NODE_SERVER_HOST || 'localhost';

    this.http.listen(port, host, () => {
      console.log(`Listening on http://${host}:${port}`);
    });

  }


}

module.exports = new Server();