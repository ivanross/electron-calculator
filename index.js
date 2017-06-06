const {app,BrowserWindow} = require('electron')
const path = require('path');
const url = require('url');
const $ = require('jquery')

let win

function newWindow() {
  win = new BrowserWindow({
    width: 300,
    height: 400,
    frame: false,
    //trasparent:true,
    titleBarStyle: 'hidden',
    resizable: false
  })

  win.loadURL(`file:///${__dirname}/index.html`)
  win.on("closed", () => {
    win = null
    app.quit()
  })
  //win.webContents.openDevTools()
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
