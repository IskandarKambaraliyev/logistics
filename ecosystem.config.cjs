module.exports = {
  apps: [
    {
      name: 'eac',
      port: '3311',
      exec_mode: 'fork',
      script: './.output/server/index.mjs'
    }
  ]
}
