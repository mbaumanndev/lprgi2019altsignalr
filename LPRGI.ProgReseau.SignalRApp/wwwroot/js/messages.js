"use strict"

var connection = new signalR.HubConnectionBuilder()
    .withUrl("/message").build()



connection.on('RecevoirMessage', function (username, message) {
    var li = document.createElement('li')
    li.textContent = username + " : " + message
    document.getElementById('messages').appendChild(li)
})


connection.start().then(function () {
    console.log('connection ok')
}).catch(function (error) {
    return console.error(error.toString())
})

document.getElementById('envoie').addEventListener('click', function (e) {
    var username = document.getElementById('username').value
    var message = document.getElementById('message').value

    connection.invoke('TransmettreMessages', username, message)
        .catch(function (error) {
        return console.error(error.toString())
    })

    e.preventDefault()
})
