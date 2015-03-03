# Twitter Proxy

This is a one-click install Twitter proxy that fetches statuses.

## Requirements

* Vagrant
* Ansible
* Probably a cheap [Digital Ocean](https://www.digitalocean.com/?refcode=1ce21440971a) server

## Setup

1. Create `./twitter_credentials.yml` and add in your [own credentials](https://apps.twitter.com). Use the example file as a reference.

2. Install the required vagrant box (`ubuntu-14.04x64`)

3. Run `vagrant up`

4. Login to the VM with `vagrant ssh`

5. `cd /home/deploy/twitter-proxy && nodemon index.js`

## App Tests

1. There are only two and you run them like so: `cd /path/to/twitter-proxy/app && mocha`

## Deployment

`ansible-playbook provisioning/site.yml -i provisioning/inventories/production`