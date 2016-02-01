function init(){
	require('nwjs-osx-menu')(window);//remove this line if you're not on a mac
	var menu = require("./../js/menu.js");
	var writeJson = require('write-json');
	var del = require('delete');
	menu.initMenu();
  var model = global.Backbone.Model.extend({
		defaults: {
			name:"b3457"
		},
		initialize: function(attributes,options){
			console.log("whammy");
			this.set("file","json/"+this.get("name")+'.json');
			this.writeJSON();
		},
		readJSON: function(){
			readJSON(this.get("file"), function(error, manifest){
			  for(var i in manifest){ global.$("body").append(manifest.i); }
			});
		},
		writeJSON: function(){
			writeJson(this.get("file"), JSON.stringify(this), function(err) { if (err) console.log(err); });
		},
		deleteFile: function(path){ // path can contain wildcards:"*" i.e. "dir/*.txt"
			del.promise([path]).then(function() {
		    //=> do stuff
		  });
		}
	});
	global.$(global.window.document).ready(function(){
		//app starts here
		new model({});

	});
}
