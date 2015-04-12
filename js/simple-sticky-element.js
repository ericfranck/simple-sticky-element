(function(){
  
  //constructor
  this.simpleSticky = function(){
    
    //default settings
    var defaults = {
      
    }
    
    //options extend defaults with args
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }
  }
  
  // ---- Public Methods ---- //
  
  simpleSticky.prototype.methodOne = function(){
    
  }
  
  // ---- Private Methods ---- //
  
  //extends defaults
  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
    
  }

}());