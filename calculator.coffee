$ = require 'jquery'

exports.typingStarted = yes
exports.operation = undefined
exports.operationSelected = yes
exports.numberSaved = 0

exports.clearPressed = ->
  if $('#clear').text() is "C"
    $ '#clear'
    .text "AC"
  else if $("#clear").text() is "AC"
    @operation = undefined
    @operationSelected = false
    @numberSaved = 0
  @typingStarted = false
  $ '#display'
  .text "0"
  return

exports.numberPressed = (n) ->
  if @typingStarted
    $ "#display"
    .append n
  else
    @typingStarted = yes if n isnt 0
    $ "#display"
    .text n
    $ "#clear"
    .text "C"
  console.log "Pressed: #{n}"
  return

exports.commeSelected = ->
  disp = $ "display"
  if disp.text().indexOf('.') < 0
    disp.append '.'
    @typingStarted = yes
  return

exports.operatorPressed = (op) ->
  @resultPressed() if @operationSelected
  @operation = op
  @typingStarted = no
  @numberSaved = $ "#display"
  .text()
  @operationSelected = yes
  return

exports.calculate = (num1,num2) ->
  num1 = parseFloat num1 if typeof num1 isnt "number"
  num2 = parseFloat num2 if typeof num2 isnt "number"
  switch @operation
    when '+' then num1 + num2
    when '-' then num1 - num2
    when 'x' then num1 * num2
    when '/' then num1 / num2
    else 0

exports.resultPressed = ->
  disp = $ "#display"
  if operationSelected
    res = @calculate @numberSaved, disp.text()
    @numberSaved = disp.text()
  else res = @calculate disp.text(), @numberSaved
  @operationSelected = no
  disp.text res
  @typingStarted = no
  return

exports.toggleSignPressed = ->
  d = $ "#display"
  unless d.text() is "0"
    if d.text().indexOf('-') < 0
      d.text "-"+d.text()
    else
      d.text d.text().substring 1
  return
