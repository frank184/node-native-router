// Native Modules
var http = require('http');

// Custom Modules
var log = require('./router/log');
var router = require('./router');

// Controllers
var users_controller = require('./controllers/users_controller');

// Sortta Restful Routing, should be it's own file
router.extensions = [ ".html", ".css", ".js", ".png", ".jpg", ".gif", ".xml", ".txt" ];
// url: "/"
router.set(/^(\/)$/, function(request, resonse) {
  fs.readFile(path.join(__dirname, "public", "index.html"), function(err, data) {
    if (err) throw err;
    response.end(data);
  });
});
// url: "/users"
router.set(/^(\/users)/, function(request, response) {
  users_controller(request, response);
});

// HTTP Server
var port = 9000;
log.log(" [*] Server started on http://localhost:" + port);
http.createServer(function(request, response) {
  handler = router.get(request);
  handler.start(request, response);
}).listen(port);
