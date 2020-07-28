const Discord = require("discord.js")

module.exports = {
    name: "test",
    execute(message, args){
        const Colors = {STR: "<:str:729468929293942894>", AGL: "<:agl:729467484289105930>", TEQ: "<:teq:729467504593862728>"};
        message.channel.send(Colors.RED);
    }
}