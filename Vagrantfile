ENV['VAGRANT_DEFAULT_PROVIDER'] = 'virtualbox'

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu-14.04x64"

  config.vm.network :private_network, ip: "10.0.0.100"
  config.vm.synced_folder "app", "/home/deploy/twitter-proxy"

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "provisioning/site.yml"
    ansible.extra_vars = {ansible_ssh_user: 'vagrant'}
  end
end