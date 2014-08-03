# Jacke
Jacke is a minimalistic Continuous Integration server.

![jacke](http://dl.dropbox.com/u/1152970/jacke_screenshot_hi.png)

_Note: I don't have a lot of time to maintain, so I'm looking for folks who'd like to contribute. Post an issue if you'd like to toss some time towards new features, issues, or pull requests._

## Quickstart

> Note: This project requires a MongoDB instance

    npm install -g jacke
    git clone git://github.com/you/yourrepo.git
    cd yourrepo
    git config --add jacke.runner "coffee test/unit.coffee"
    jacke .
    open http://localhost:4567

## Usage
    Usage: jacke [-hpv] path_to_git_repo

    Options:
      -h, --host     The hostname or ip of the host to bind to  [default: "0.0.0.0"]
      -p, --port     The port to listen on                      [default: 4567]
      --help         Show this message
      -v, --version  Show version

## Setting the test runner
    git config --add jacke.runner "coffee test/unit.coffee"

## Setting the branch
    git config --add jacke.branch deploy

## Adding HTTP Basic authentication
    git config --add jacke.user username
    git config --add jacke.pass password

## Post build
After building Jacke will run `.git/hooks/build-failed` or `.git/hooks/build-worked` depending on test outcome. Like all git hooks, they're just shell scripts so put whatever you want in there.


Jacke is **heavily** inspired by [CI Joe](https://github.com/defunkt/cijoe)
