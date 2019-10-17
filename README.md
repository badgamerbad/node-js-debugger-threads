# NODE JS Debugger Tester
This repository hosts a simple node js server forking child processes using cluster module, to demonstrate the node debugger capabilities. </br>
Crypto moudule is used to create CPU intensive task which will take some time to send the response.

### Installation
```
npm install
```

### Starting Server
```
npm run dev
```

After starting the server hit the following routes
* For CPU heavy task - http://localhost:3000/performOperation
* for normal response - http://localhost:3000/