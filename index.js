/**
 * Made-Instance
 * @author: SimonHao
 * @date:   2015-11-13 11:27:55
 */

var instance_list = {};

window.entry = module.exports = function(instance_id){
  return instance_list[instance_id];
};

module.exports.create = function(Module, module_id, instance_name, options){
  var instance_id = module_id + (instance_name ? ':' + instance_name : '');

  if(Module.prototype && Module.prototype._made_module){
    instance_list[instance_id] = new Module(options, instance_name);
  }
};