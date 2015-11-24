# updateme

## Motivation
- I like to be notified when some legacy projects finally release a new version
- I like to stay on top of some frequently updating projects
- I like to update ASAP when there are security fixes for my favorite frameworks

## Contribution
All PRs welcome!

### How to setup
- install [docker](https://docs.docker.com/v1.8/installation/)
    - [docker-toolbox](https://github.com/docker/toolbox/releases) if not linux
- install [docker-compose](https://github.com/docker/compose/releases)
    - try [myboot2docker](https://github.com/wharsojo/myboot2docker) if using `docker-toolbox`, `boot2docker` essentially
- fork and clone the repo
- `cd` into the repo dir
- `git submodule update --init`
- `bin/bootstrap` (wait for all the downloads...)
- `docker-compose up`

### Problems
Please do not hesitate to file an issue if encountering any problem, either when using the app or contributing to the app.
