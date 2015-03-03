# Twitter Proxy

This is a "one-click" install Twitter proxy that fetches statuses.

## Requirements

* Vagrant
* Ansible
* Probably a cheap [Digital Ocean](https://www.digitalocean.com/?refcode=1ce21440971a) server

## Setup

1. Create `./twitter_credentials.yml` and add in your [own credentials](https://apps.twitter.com). Use the example file as a reference.

2. Copy your SSH public key into `provisioning/roles/common/files/public_key`

3. Install the required vagrant box (`ubuntu-14.04x64`)

4. Run `vagrant up`

5. Login to the VM with `vagrant ssh`

6. `cd /home/deploy/twitter-proxy && nodemon index.js`

## App Tests

1. There are only two and you run them like so: `cd /path/to/twitter-proxy/app && mocha`

## Deployment

1. `ansible-playbook provisioning/site.yml -i provisioning/inventories/production`

2. Replace the IP address in `app/ecosystem.json` with your own and run `pm2 deploy production setup` and then `pm2 deploy production`