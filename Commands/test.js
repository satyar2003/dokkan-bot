const Discord = require("discord.js")

module.exports = {
    name: "test",
    execute(message, args){
        var x = args[0]
        message.reply(x)

        /*switch (x)
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
        }*/
    }
}