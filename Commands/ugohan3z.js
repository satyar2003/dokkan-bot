const Discord = require('discord.js')

module.exports = {
    name: 'ugohan3z',
    description: 'INT UR Ultimate Gohan with EZA',
    categories: ['[Hybrid Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hybrid_Saiyans)',
                 '[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Goku\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)',
                 '[Revenge](https://dbz-dokkanbattle.fandom.com/wiki/Revenge)',
                 '[Rapid Growth](https://dbz-dokkanbattle.fandom.com/wiki/Rapid_Growth)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race) (ATK +700)',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage) (Ki +1)',
           '[Infighter](https://dbz-dokkanbattle.fandom.com/wiki/Infighter) (ATK +10%, Enemy DEF -10%)',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed) (Ki +2)',
           '[Power Bestowed by God](https://dbz-dokkanbattle.fandom.com/wiki/Power_Bestowed_by_God) (ATK +2500 when Super Attack is launched)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)'],
    status: 'incomplete',
    plural: 'false',
    aliases: ['Ultimate Gohan Z'],
    execute(message, args) {
	    const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./ugohan3z.js')
        const {categories} = require('./ugohan3z.js')
        const {status} = require('./ugohan3z.js')
        const {plural} = require('./ugohan3z.js')
        const {aliases} = require('./ugohan3z.js')
        var color = 7028604;
        var name = "Ultimate Power Surge\nUltimate Gohan Z";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_Power_Surge_Ultimate_Gohan#Extreme%20Z-Awakened";
        var desc = "Super INT UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/736438776141709342/card_1006700_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/736438753631010816/latest.png?width=459&height=612";
        var leader = "<:int:729468835819946026> Type Ki +3 and HP, ATK & DEF +70%";
        var superatk = "Burst Rush: Greatly raises ATK[1] and causes immense damage to enemy";
        var passive = "Victor's Fortitude: Ki +5, ATK +80%, and DEF +40% when Ki is 7 or more";
        var stats = "HP: 14,692 (55%)/18,892 (100%)\nATK: 13,108 (55%)/17,308 (100%)\nDEF: 8,544 (55%)/12,744 (100%)";
        var links = "";
            for (var i = 0; i < link.length; i++)
            {
                links += link[i] + "\n";
            }
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 2,133,510 (unsupported)/3,022,473 (supported)\nDefense: 64,230 (unsupported)/92,521 (supported)\nLinking Partner: [INT UR Gohan (Kid)](https://dbz-dokkanbattle.fandom.com/wiki/Roar_of_Rage_Gohan_(Kid)) \nTeam: [Siblings' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)/[Goku's Family](https://dbz-dokkanbattle.fandom.com/wiki/Goku%27s_Family) \nBuild: 6 Additional/15 Critical";
        var blp = "[TEQ UR Vegito](https://dbz-dokkanbattle.fandom.com/wiki/True_Value_of_the_Potara_Vegito) - 4 links shared\n[STR UR Goku](https://dbz-dokkanbattle.fandom.com/wiki/Pinnacle_of_Fury_Goku) - 4 links shared\n[STR UR Gotenks](https://dbz-dokkanbattle.fandom.com/wiki/Victory_at_Hand_Gotenks) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► [AGL SR Ultimate Gohan](https://dbz-dokkanbattle.fandom.com/wiki/Renewed_Determination_Ultimate_Gohan) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Battle](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Battle:_Ultimate_Power_Surge_Ultimate_Gohan)** event";
        var footnotes = "[1]: Raises ATK by 50% for 99 turns";

        if (status === 'incomplete')
        {
            var person = aliases[aliases.length - 1]
            if (plural === 'false')
            {
                const preview = new Discord.MessageEmbed()
                    .setColor(color)
                    .setAuthor(message.author.username, pfp)
                    .setTitle(`${person} is coming soon.`)
                message.channel.send(preview)
            }
            else
            {
                const preview = new Discord.MessageEmbed()
                    .setColor(color)
                    .setAuthor(message.author.username, pfp)
                    .setTitle(`${person} is coming soon.`)
                message.channel.send(preview)
            }
        }
        else
        {
            var length = args.length;
            var sub = args[0];
            switch (true)
            {
                case length == 0:
                    const fullCard = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
                        .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addFields(
                                {name: "Leader Skill", value: leader},
                                {name: "Super Attack", value: superatk},
                                {name: "Passive Skill", value: passive},
                                {name: "Stats", value: stats},
                                {name: "Links", value: links},
                                {name: "Categories", value: cats},
                                {name: "Attack Per Turn", value: apt},
                                {name: "Best Linking Partners", value: blp},
                                {name: "Details", value: deets}
                        )
                        .setImage(character)
                        .setFooter(footnotes)
                        .setTimestamp()
                        message.channel.send(fullCard)
                        break;
                    
                case sub === "leader":
		            const leaderSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Leader Skill", leader)
                        .setTimestamp()
                    message.channel.send(leaderSkill)
                    break;

                case sub === "super":
		            const superAttack = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Super Attack", superatk)
                        .setTimestamp()
                        .setFooter(footnotes)
                    message.channel.send(superAttack)
                    break;

                case sub === "passive":
                    const passiveSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Passive Skill", passive)
                        .setTimestamp()
                    message.channel.send(passiveSkill)
                    break;

                case sub === "stats":
                    const unitStats = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Stats", stats)
                        .setTimestamp()
                    message.channel.send(unitStats)
                    break;

                case sub === "links":
                    const linkSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Links", links)
                        .setTimestamp()
                    message.channel.send(linkSkill)
                    break;

                case sub === "categories":
                    const category = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Categories", cats)
                        .setTimestamp()
                    message.channel.send(category)
                    break;

                case sub === "apt":
                    const attackPerTurn = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Attack Per Turn", apt)
                        .setTimestamp()
                    message.channel.send(attackPerTurn)
                    break;

                case sub === "partners":
                    const bestLinkingPartners = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Attack Per Turn", apt)
                        .setTimestamp()
                    message.channel.send(bestLinkingPartners)
                    break;

                case sub === "details":
                    const unitDetails = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Details", deets)
                        .setTimestamp()
                    message.channel.send(unitDetails)
                    break;

                case sub === "art":
                    const cardArt = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .setImage(character)
                        .setTimestamp()
                    message.channel.send(cardArt)
                    break;

                default:
                    message.channel.send(`${message.author} that is not a valid sub-command. You can use \`d!help\` to find out all possible sub-commands.`)
                    break;
            }
        }
    }
}