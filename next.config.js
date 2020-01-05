const {withNextein} = require('nextein/config')

module.exports = withNextein({
 nextein: config => {
   config.plugins = ['nextein-plugin-markdown']
   return config
 }
})
