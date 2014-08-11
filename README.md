# Jacke-CI
Jacke-CI is a simple CI server

## Quickstart
You need to install [MongoDB](http://www.mongodb.org/downloads) and NodeJS first on your system. Check it before continue

Now install some dependencies from node:

    npm install -g jacke-ci

That it! Now you shoul be able to use Jacke-ci on your system.

    Usage: jacke-ci [-hpv] path_to_git_repo

    Options:
      -h, --host     The hostname or ip of the host to bind to  [default: "0.0.0.0"]
      -p, --port     The port to listen on                      [default: 4567]
      --help         Show this message
      -v, --version  Show version

## Usage
Clone the repo where you like to use `jacke-ci`:

    git clone git://github.com/user/repo.git

Enter in the repo folder and config `jacke-ci` with you commands for CI:

    cd repo
    git config --add jacke-ci.runner "your test command here"
    # ex: git config --add jacke-ci.runner "grunt test"

Start `jacke-ci`:

    jacke-ci .

You are ready! See it live on your browser:

    http://localhost:4567

## Tips
Setting the test runner

    git config --add jacke-ci.runner "your test command here"

Setting the branch

    git config --add jacke-ci.branch deploy

Adding HTTP Basic authentication

    git config --add jacke-ci.user username
    git config --add jacke-ci.pass password

After building Jacke-CI will run `.git/hooks/build-failed` or `.git/hooks/build-worked` depending on test outcome. Like all git hooks, they're just shell scripts so put whatever you want in there.

## FAQ
Common questions.

### Is this a complete CI system?
No, is not. 

### Why should I use it?
jacke-ci is a simple CI system to projects that are small or doesn't require a very high CI system. Maybe, you will feel that jacke-ci is perfect for local installations thanks to the easy installation and build system. However, jacke-ci could be a server side solution too for CI process on your projects, but taking in mind that jacke-ci is not fully complete with a lot of features.

### My project needs to be integrated with git?
Yes, and requires a remote to check changes.

## Contribute
You have different ways to improve and make better jacke-ci.

### Spread the love
Tweet, post and share with your friends Markedit. Tell to the people why the should give a try to it too.

### Send pull request
Feel free to send or report features you think are important to include. We will be 

### Donate
You can send us love in many ways. If you are interested in donate us you can do it by:

 * [Gittip]()
 * [Paypal]()
 * Bitcoin: 1HaZqoNBdbkEc8qUAQ3akTWM4k8NAv4gZL

When you donate, you will be added (or not, is your decision, we will ask you first) to the ´wall of donors´ that made possible the development of this project and others more time. 

### Licence
Markedit is licensed under [MIT]().

### Thanks
Jacke-CI is inspired by [CI Joe](https://github.com/defunkt/cijoe)
