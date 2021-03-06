// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = function(BasePlugin) {
    var JadePlugin;
    return JadePlugin = (function(_super) {

      __extends(JadePlugin, _super);

      function JadePlugin() {
        return JadePlugin.__super__.constructor.apply(this, arguments);
      }

      JadePlugin.prototype.name = 'jade';

      JadePlugin.prototype.priority = 725;

      JadePlugin.prototype.render = function(opts, next) {
        var file, inExtension, jade, outExtension, templateData;
        inExtension = opts.inExtension, outExtension = opts.outExtension, templateData = opts.templateData, file = opts.file;
        if (inExtension === 'jade') {
          jade = require('jade');
          opts.content = jade.compile(opts.content, {
            filename: file.get('fullPath')
          })(templateData);
        }
        return next();
      };

      return JadePlugin;

    })(BasePlugin);
  };

}).call(this);
