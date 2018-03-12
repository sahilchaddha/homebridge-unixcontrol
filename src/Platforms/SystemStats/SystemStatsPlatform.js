
function SystemStatsPlatform(log, config, api) {
    this.platformLogger = log 
    this.platformConfig = config
    this.platformAPI = api
    this.accessories = []
    registerAccesories()    
}

SystemStatsPlatform.prototype.configureAccessory = function(accessory) {
    this.platformLogger.log('Configure Accessory')
    var platform = this
    accessory.reachable = true
  
    accessory.on('identify', function(paired, callback) {
      platform.log(accessory.displayName, "Identify!!!")
      callback();
    })
  
    this.accessories.push(accessory)
}

SystemStatsPlatform.prototype.configurationRequestHandler = function(context, request, callback) {

}

function registerAccesories() {

}


module.exports = SystemStatsPlatform