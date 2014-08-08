# Jacke-CI
Jacke-CI is a minimalistic Continuous Integration server.

![jacke-ci](http://dl.dropbox.com/u/1152970/jacke-ci_screenshot_hi.png)

_Note: I don't have a lot of time to maintain, so I'm looking for folks who'd like to contribute. Post an issue if you'd like to toss some time towards new features, issues, or pull requests._

## Quickstart

> Note: This project requires a MongoDB instance

    npm install -g jacke-ci
    git clone git://github.com/you/yourrepo.git
    cd yourrepo
    git config --add jacke-ci.runner "coffee test/unit.coffee"
    jacke-ci .
    open http://localhost:4567

## Usage
    Usage: jacke-ci [-hpv] path_to_git_repo

    Options:
      -h, --host     The hostname or ip of the host to bind to  [default: "0.0.0.0"]
      -p, --port     The port to listen on                      [default: 4567]
      --help         Show this message
      -v, --version  Show version

## Setting the test runner
    git config --add jacke-ci.runner "coffee test/unit.coffee"

## Setting the branch
    git config --add jacke-ci.branch deploy

## Adding HTTP Basic authentication
    git config --add jacke-ci.user username
    git config --add jacke-ci.pass password

## Post build
After building Jacke-CI will run `.git/hooks/build-failed` or `.git/hooks/build-worked` depending on test outcome. Like all git hooks, they're just shell scripts so put whatever you want in there.


Jacke-CI is **heavily** inspired by [CI Joe](https://github.com/defunkt/cijoe)
