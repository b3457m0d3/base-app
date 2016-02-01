	exports.initMenu = function(){
		var win = global.gui.Window.get();
		var menubar = new global.gui.Menu({ type: 'menubar' });
		var fileMenu = new global.gui.Menu();
		fileMenu.append(new global.gui.MenuItem({
			label: 'Menu item 1',
			click: function() {
				//do something
			}
		}));
		fileMenu.append(new global.gui.MenuItem({
			label: 'Menu Item 2',
			click: function() {
				//do something
			}
		}));
		fileMenu.append(new global.gui.MenuItem({
			label: 'Menu Item 3',
			click: function() {
				//do something
			}
		}));
		fileMenu.append(new global.gui.MenuItem({
			label: 'Quit',
			click: function() {
				global.gui.App.quit();
			}
		}));
		menubar.append(new global.gui.MenuItem({ label: 'File', submenu: fileMenu}));
		win.menu = menubar;
	};
