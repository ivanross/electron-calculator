const {app,BrowserWindow} = require('electron')
//const LocalShortcut = require('electron-localshortcut');
const path = require('path');
const url = require('url');
const $ = require('jquery')
require('coffee-script').register()
const calculator = require('./calculator.coffee')

const {ipcMain} = require('electron')
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.sender.send('asynchronous-reply', 'pong async')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.returnValue = 'pong sync'
})




let win

function newWindow() {
  win = new BrowserWindow({
    //width: 300,
    width: 700,
    height: 400,
    frame: false,
    titleBarStyle: 'hidden',
    resizable: false
  })

  win.loadURL(`file:///${__dirname}/index.html`)
  win.on("closed", () => {
    win = null
    app.quit()
  })
  win.webContents.openDevTools()
}

app.on("ready",() => {
    newWindow();
})
app.on("activate",() => {
  if (win === null) newWindow()
})
app.on("window-all-closed", () => {
  if (process.platform !== "darwin")
    app.quit()
})
