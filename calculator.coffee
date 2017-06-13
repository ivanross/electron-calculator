$ = require 'jquery'

_typingStarted = no
_operation = undefined
_operationSelected = no
_numberSaved = 0

_clearPressed = ->
  if $('#clear').text() is "C"
    $ '#clear'
    .text "AC"
  else if $("#clear").text() is "AC"
    _operation = undefined
    _operationSelected = false
    _numberSaved = 0
  _typingStarted = false
  $ '#display'
  .text "0"
  return

_numberPressed = (n) ->
  if _typingStarted
    $ "#display"
    .append n
  else
    _typingStarted = yes if n isnt 0
    $ "#display"
    .text n
    $ "#clear"
    .text "C"
  console.log "Pressed: #{n}"
  return

_commaSelected = ->
  disp = $ "#display"
  if disp.text().indexOf('.') < 0
    disp.append '.'
    _typingStarted = yes
  return

_operatorPressed = (op) ->
  resultPressed() if _operationSelected
  _operation = op
  _typingStarted = no
  _numberSaved = $ "#display"
  .text()
  _operationSelected = yes
  return

_calculate = (num1,num2) ->
  num1 = parseFloat num1 if typeof num1 isnt "number"
  num2 = parseFloat num2 if typeof num2 isnt "number"
  switch _operation
    when '+' then num1 + num2
    when '-' then num1 - num2
    when 'x' then num1 * num2
    when '/' then num1 / num2
    else 0

_resultPressed = ->
  disp = $ "#display"
  if _operationSelected
    res = _calculate _numberSaved, disp.text()
    _numberSaved = disp.text()
  else res = _calculate disp.text(), _numberSaved
  _operationSelected = no
  disp.text res
  _typingStarted = no
  return

_toggleSignPressed = ->
  d = $ "#display"
  unless d.text() is "0"
    if d.text().indexOf('-') < 0
      d.text "-"+d.text()
    else
      d.text d.text().substring 1
  return

exports.typingStarted = _typingStarted
exports.operation = _operation
exports.operationSelected = _operationSelected
exports.numberSaved = _numberSaved

exports.clearPressed = _clearPressed
exports.numberPressed = _numberPressed
exports.commaSelected = _commaSelected
exports.operatorPressed = _operatorPressed
exports.calculate = _calculate
exports.resultPressed = _resultPressed
exports.toggleSignPressed = _toggleSignPressed
