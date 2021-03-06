const http = require('http');
const setting = require('./setting');
const Render = require('./app/render');

let server = http.createServer(function (req, res) {
  const _render = new Render(req, res);
  _render.init();
});

server.listen(setting.port, function () {
  console.log('The node server is starting at port ' + setting.port);
});
