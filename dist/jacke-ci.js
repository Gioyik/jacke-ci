(function() {
  var argv, colors, git, optimist, startServer, usage, version;

  process.title = 'Jacke-CI';

  version = '1.0.1';

  colors = require('colors');

  usage = 'Usage: jacke-ci [-hpv] path_to_git_repo';

  optimist = require('optimist');

  argv = optimist.usage('Usage: jacke-ci [-hpv] path_to_git_repo'.green).options('h', {
    alias: 'host',
    describe: "The hostname or ip of the host to bind to",
    "default": '0.0.0.0'
  }).options('d', {
    alias: 'basedir',
    describe: "Application base path for mounted instances",
    "default": "/"
  }).options('p', {
    alias: 'port',
    describe: "The port to listen on",
    "default": 4567
  }).options('help', {
    describe: "Show this message"
  }).options('v', {
    alias: 'version',
    describe: "Show version"
  }).argv;

  if (argv.help) {
    optimist.showHelp();
    process.exit(1);
  }

  if (argv.v) {
    console.log(("Jacke-CI v" + version).green);
    process.exit(1);
  }

  if (argv._.length === 0) {
    optimist.showHelp();
    console.log('You must specify a Git repo'.red);
    process.exit(1);
  }

  startServer = function() {
    var server;
    global.currentNamespace = argv.d;
    server = require('./server');
    server.listen(argv.p, argv.h);
    return console.log("Jacke-CI listening on port %d with host %s in directory %s".green, argv.p, argv.h, argv.d);
  };

  git = require('./git');

  git.init(argv._[0], startServer);

}).call(this);
