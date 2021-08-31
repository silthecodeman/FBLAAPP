/**/const electron = require('electron');
const url = require('url')
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;


// Listen for app to be ready
app.on('ready', function(){
	//create new window
	mainWindow = new BrowserWindow({ 
		webPreferences: {
        nodeIntegration: true
    	},
		resizable: false,
		width: 1100,
		height: 900});
	//Load html into window
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'mainWindow.html'),
		protocol: 'file:',
		slashes: true
	}));
	// Quit app when closed
	mainWindow.on('closed', function(){
		app.quit();
	})

	// Build menu from template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	// Insert menu
	Menu.setApplicationMenu(mainMenu)

});


// Create menu template
const mainMenuTemplate = [/**/
	{
		label:'File',
		submenu:[
			{
				label:'Quit',
				accelerator: process.platform == 'darwin' ? 'Command+Q' :
				'Ctrl+Q',
				click(){
					app.quit();
				}
			}
		]
	}/**/
];
/**/
// Add developer tools item if not in prod
if(process.env.NODE_ENV !== 'production'){
	mainMenuTemplate.push({
		label: 'Developer Tools',
		submenu:[
		{
			label: 'Toggle DevTools',
			accelerator: process.platform == 'darwin' ? 'Command+I' :
			'Ctrl+I',
			click(item, focusedWindow){
				focusedWindow.toggleDevTools();
			}
		},
		{
			role: 'reload'
		}
		]
	})
}
/**/