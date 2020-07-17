const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const prefix = '*';


bot.once('ready', async () => {
    const startthingy = new Discord.MessageAttachment('./archives.txt');
    bot.user.setActivity("The bot below me is gay")

    bot.channels.cache.get('261884258979676162').send(startthingy)
})
bot.on("message", async message => {

    let args = message.content.substring(prefix.length).split(" ");




    switch (args[0]) {
        case 'archive':


            const contents = ` ${message.content.slice(8)}\n`;

            fs.appendFileSync('./archives.txt', contents,
                message.channel.bulkDelete(1, true)
            )
            const id = bot.channels.cache.get('728277105904844840');

            id.send(contents)

            break;

        case 'get':
            const thingy = new Discord.MessageAttachment('./archives.txt');
            message.channel.send(thingy);
            break;

        case 'invite':
            const url = await bot.generateInvite("ADMINISTRATOR");

            message.channel.send(url)
            break;

        case 'notice':
            const notice = bot.channels.cache.get('727974070376726540');
            notice.send(`Bot's going offline for a bit`)
            break;

        case 'ping':

            message.channel.send("Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`");

            break;

        case 'who':
            
        if (message.author.id !== '147422106215383040') {
            return;
        }
        
        message.channel.bulkDelete(1, true),
                message.channel.send('<:WHO:729841963414716436>')

            break;

            case 'size' :

                if (message.author.id !=='147422106215383040' ) {
                    return;
                }

                message.channel.bulkDelete(1,true),
                message.channel.send(`Users: ${bot.users.get}\nChannels: ${bot.channels.get}\nGuilds: ${bot.guilds.get}`);

            break;
    }


    // add commands above this line


    if (message.channel.id !== '727974070376726540') {
        return;
    }

    const contents2 = ` ${message.content}\n`;

    if (message.content.startsWith('https://cdn.discordapp.com/')) {
        fs.appendFileSync('./archives.txt', contents2,
            message.channel.bulkDelete(1, true)
        )
        const id = bot.channels.cache.get('728277105904844840');

        id.send(contents2);


        if (message.author.id !== '147422106215383040') {
            return;
        }

    }
})
