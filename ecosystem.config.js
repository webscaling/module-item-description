module.exports = {
  apps: [{
    name: 'module-item-description',
    script: 'server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-219-43-62.us-east-2.compute.amazonaws.com',
      key: 'ubuntu@ip-172-31-46-56/.ssh/FEC.pem',
      ref: 'origin/master',
      repo: 'https://github.com/shazamazon/module-item-description',
      path: 'ubuntu@ip-172-31-46-56/module-item-description',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}