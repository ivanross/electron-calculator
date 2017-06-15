Mousetrap = require 'mousetrap'
$ = require 'jquery'

console.log "keybind-handler loaded!"
###
Numbers
###
Mousetrap.bind "1", -> $('#n1').click()
Mousetrap.bind "2", -> $('#n2').click()
Mousetrap.bind "3", -> $('#n3').click()
Mousetrap.bind "4", -> $('#n4').click()
Mousetrap.bind "5", -> $('#n5').click()
Mousetrap.bind "6", -> $('#n6').click()
Mousetrap.bind "7", -> $('#n7').click()
Mousetrap.bind "8", -> $('#n8').click()
Mousetrap.bind "9", -> $('#n9').click()
Mousetrap.bind "0", -> $('#n0').click()

###
Operators
###

# Plus
Mousetrap.bind "+", -> $('#plus').click()
# Minus
Mousetrap.bind "-", -> $('#minus').click()
# Prod
Mousetrap.bind "*", -> $('#prod').click()
Mousetrap.bind "x", -> $('#prod').click()
# Divide
Mousetrap.bind "/", -> $('#divide').click()
Mousetrap.bind ":", -> $('#divide').click()

# Equal
Mousetrap.bind "=", -> $('#equal').click()
Mousetrap.bind "enter", -> $('#equal').click()
# Clear
Mousetrap.bind "backspace", -> $('#clear').click()
Mousetrap.bind "del", -> $('#clear').click()
