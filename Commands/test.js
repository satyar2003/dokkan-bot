module.exports = {
    name: "test",
    execute(message, args){
        var guild = client.guilds.cache.get(guildidhere);

            if (!guild) return message.reply("The bot isn't in the guild with this ID.");


        guild.fetchInvites()
            .then(invites => message.channel.send('Found Invites:\n' + invites.map(invite => invite.code).join('\n')))
            .catch(console.error);
    }
}