module.exports = {
  apps: [{
    name: 'module-item-description',
    script: 'server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-220-131-48.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/FEC.pem',
      ref: 'origin/master',
      repo: 'https://github.com/shazamazon/module-item-description.git',
      path: '/home/ubuntu/module-item-description',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js && node db/data.js'
    }
  }
}
