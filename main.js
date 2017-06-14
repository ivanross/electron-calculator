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

  calculatorShortcut(win)
}

function calculatorShortcut(w) {

  localShortcut.register(w,'1', () => {
    win.webContents.send('scmex', '#n1');
  });

  localShortcut.register(w,'2', () => {
    win.webContents.send('scmex','#n2')
  })

  localShortcut.register(w,'3', () => {
    win.webContents.send('scmex','#n3')
  })

  localShortcut.register(w,'4', () => {
    win.webContents.send('scmex','#n4')
  })

  localShortcut.register(w,'5', () => {
    win.webContents.send('scmex','#n5')
  })

  localShortcut.register(w,'6', () => {
    win.webContents.send('scmex','#n6')
  })

  localShortcut.register(w,'7', () => {
    win.webContents.send('scmex','#n7')
  })

  localShortcut.register(w,'8', () => {
    win.webContents.send('scmex','#n8')
  })

  localShortcut.register(w,'9', () => {
    win.webContents.send('scmex','#n9')
  })

  localShortcut.register(w,'0', () => {
    win.webContents.send('scmex','#n0')
  })

  localShortcut.register(w,'5', () => {
    win.webContents.send('scmex','#n5')
  })

  localShortcut.register(w,'+', () => {
    win.webContents.send('scmex','#plus')
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
