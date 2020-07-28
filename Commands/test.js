const Discord = require("discord.js")

module.exports = {
    name: "test",
    execute(message, args){

        switch (args[0].toLowerCase())
        {
            case "gay":
                message.reply("no u")
                break;
            
            case "not":
                message.reply("gay")
                break;

            default:
                message.reply("hi")
                break;
        }
    }
}