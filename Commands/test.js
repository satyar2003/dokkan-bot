const Discord = require("discord.js")

module.exports = {
    name: "test",
    execute(message, args){
        message.reply("hi")

        switch (args[0].toLowerCase())
        {
            case "gay":
                message.reply("no u")
                break;
            
            case "not":
                message.reply("gay")
                break;
        }
    }
}