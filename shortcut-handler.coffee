{ ipcRenderer } = require 'electron'
$ = require 'jquery'

ipcRenderer.on 'scmex',(event,arg) ->
  $(arg)?.click()
  return
