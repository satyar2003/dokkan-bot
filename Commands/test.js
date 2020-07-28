const Discord = require("discord.js")

module.exports = {
    name: "test",
    execute(message, args){
        const Colors = {RED: 1, BLUE: 2, GREEN: 3};
        message.channel.send(Colors.RED);
    }
}