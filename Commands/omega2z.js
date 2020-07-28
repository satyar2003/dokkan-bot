const Discord = require('discord.js')

module.exports = {
    name: 'omega2z',
    description: 'STR UR Omega Shenron with EZA',
    categories: ['[Shadow Dragon Saga](https://dbz-dokkanbattle.fandom.com/wiki/Shadow_Dragon_Saga)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Inhuman Deeds](https://dbz-dokkanbattle.fandom.com/wiki/Inhuman_Deeds)'],
    link: ['[Brutal Beatdown](https://dbz-dokkanbattle.fandom.com/wiki/Brutal_Beatdown) (ATK +10%)',
           '[Fear and Faith](https://dbz-dokkanbattle.fandom.com/wiki/Fear_and_Faith) (Ki +2)',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses) (ATK & DEF +25% when HP is 80% or below)',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed) (Ki +2)',
           '[GT](https://dbz-dokkanbattle.fandom.com/wiki/GT) (Ki +2)',
           '[Shadow Dragons](https://dbz-dokkanbattle.fandom.com/wiki/Shadow_Dragons) (ATK +15%)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Omega Shenron'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./omega2z.js')
        const {categories} = require('./omega2z.js')
        const {status} = require('./omega2z.js')
        const {plural} = require('./omega2z.js')
        const {aliases} = require('./omega2z.js')
        var color = 8990259;
        var name = "Hopeless Minus Energy\nOmega Shenron Z";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Hopeless_Minus_Energy_Omega_Shenron#Extreme%20Z-Awakened";
        var desc = "Extreme STR UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/737766687155421305/card_1008710_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/737766707552190544/340.png";
        var leader = "[<:str:729468929293942894>](https://dbz-dokkanbattle.fandom.com/wiki/Category:STR) Type Ki +4, HP, ATK and DEF +100%";
        var superatk = "[Minus Energy Power Ball](https://dbz-dokkanbattle.fandom.com/wiki/File:Dokkan_Battle_Omega_Shenron_Super_Attack_(Minus_Energy_Power_Ball)): Causes immense damage to enemy and massively lowers DEF[2]";
        var passive = "Evil Domination: All enemies' ATK -40%; ATK & DEF +80%; \"[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)\" Category allies' Ki +2 and ATK +40%";
        var stats = "HP: 14,548 (55%)/17,548 (100%)\nATK: 13,643 (55%)/17,043 (100%)\nDEF: 11,310 (55%)/13,910 (100%)";
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
        var apt = "APT: 3,183,804 (unsupported)/3,521,480 (supported)\nDefense: 90,136 (unsupported)/90,136 (supported) \nLinking Partner: [PHY UR Syn Shenron](https://dbz-dokkanbattle.fandom.com/wiki/Agent_of_Destruction_Syn_Shenron) \nTeam: [Inhuman Deeds](https://dbz-dokkanbattle.fandom.com/wiki/Inhuman_Deeds)/[Extreme AGL](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_AGL) \nBuild: 6 Additional/20 Critical";
        var blp = "[PHY UR Syn Shenron](https://dbz-dokkanbattle.fandom.com/wiki/Agent_of_Destruction_Syn_Shenron) - 6 links shared\n[INT UR Super Janemba](https://dbz-dokkanbattle.fandom.com/wiki/Netherworld_Demon_Super_Janemba) - 5 links shared\n[STR UR Super Janemba](https://dbz-dokkanbattle.fandom.com/wiki/Evil_Incursion_Super_Janemba) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 150%\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Battle](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Battle:_Hopeless_Minus_Energy_Omega_Shenron)** event";
        var footnotes = "[1]: Lowers enemy's DEF by 80% for 3 turns";

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
                    .setTitle(`${person} are coming soon.`)
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