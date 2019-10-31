const aardio = require('aardio')
const app = require('electron').app
const path = require('path')
const glob = require('glob')

aardio.ready( win => {
	const files = glob.sync(path.join(__dirname, 'main-process/**/*.js'))
	files.forEach((file) => { 
		// 避免安全软件误报
		if( !file.endsWith("protocol-handler.js")) {
			require(file) 
		}
	}) 
})

app.on('window-all-closed', () => {
    app.quit();
}) 
