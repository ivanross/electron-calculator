const {app,BrowserWindow} = require('electron')
const localShortcut = require('electron-localshortcut');
const path = require('path');
const url = require('url');
const $ = require('jquery')

//const {globalShortcut} = require('electron')


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

  localShortcut.register(win,'1', () => {
    win.webContents.send('scmex', '#n1');
    console.log("Main listen to key 1");
  });
  localShortcut.register(win,'2', () => {
    win.webContents.send('scmex','#n2')
    console.log("Main 2");
  })

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
