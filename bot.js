const fs = require('fs');
const Discord = require('discord.js');
var pre1 = "d!";

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

const list = ["Legendary Goku Event",
              "Super Battle Road",
              "New Dokkan Event",
              "Quest Mode",
              "Extreme Z-Battle",
              "Infinite Dragon Ball History",
              "Master Roshi's Training",
              "Hidden Potential Stages",
              "Skill Orb Stages"]

client.on('ready', () => {
    console.log('Ready!');
    setInterval(() => {
        const ind = Math.floor(Math.random() * (list.length));
        client.user.setActivity(list[ind]);
    }, 1800000);
    client.user.setStatus('online');
        //then(console.log)
        //.catch(console.error);
});

client.on('message', message => {
    if (!message.content.startsWith(pre1) || message.author.bot) 
        return;

    const args = message.content.slice(pre1.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (message.content.startsWith(pre1 + "size"))
    {
        //message.channel.send("Hi");
        message.channel.send(`Guilds: ${client.guilds.cache.size}`);
        let guilds = client.guilds.cache.map(guild => guild.id)
        /*for (var i = 0; i < client.guilds.cache.size; i++)
        {
            message.channel.send(`${client.guilds[i]}`);
        }*/
        message.channel.send(guilds);
    }

    /*if (message.content.startsWith(pre1 + "change") && args.length)
    {
        pre1 = args[0];

        if (message.channel.type === 'dm')
        {
            return;
        }

        message.channel.send({embed: {
            color: 0,
            author:
            {
                name: message.author.username,
                icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
            },
            title: "Prefix has been set",
            description: "Prefix set to " + args[0]
        }})
    }*/

    if (!command)
    {
        return;
    }
        

    if (command.args && !args.length)
    {
        let reply = '';
        if (command.usage) 
        {
            reply += `The proper usage would be: ${prefix}${command.name} ${command.usage}`;
        }
        return message.channel.send(reply);
    }

    if (command.guildOnly && message.channel.type !== 'text')
    {
        return message.reply('I can\'t use that command in the DMs!');
    }

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	    if (now < expirationTime) {
		    const timeLeft = (expirationTime - now) / 1000;
		    return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
	    }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try 
    {
	    command.execute(message, args);
    } 
    catch (error) 
    {
	    console.error(error);
	    message.reply('there was an error trying to execute that command!');
    }
});

client.login(process.env.token);