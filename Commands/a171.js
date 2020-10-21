const Discord = require('discord.js')

module.exports = {
    name: 'a171',
    description: 'PHY UR Android #17 from the Tournament of Power',
    categories: ['[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)',
                 '[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)',
                 '[Representatives of Universe 7](https://dbz-dokkanbattle.fandom.com/wiki/Representatives_of_Universe_7)',
                 '[Siblings\' Bond](https://dbz-dokkanbattle.fandom.com/wiki/Siblings%27_Bond)',
                 '[Worthy Rivals](https://dbz-dokkanbattle.fandom.com/wiki/Worthy_Rivals)',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)',
                 '[Battle of Wits](https://dbz-dokkanbattle.fandom.com/wiki/Battle_of_Wits)'],
    link: ['[Android Assault](https://dbz-dokkanbattle.fandom.com/wiki/Android_Assault)\n ­ ­ ­ ­ Level 1: DEF +10%\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +20%',
           '[Twin Terrors](https://dbz-dokkanbattle.fandom.com/wiki/Twin_Terrors)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK, DEF & chance of evading +5%',
           '[Infinite Energy](https://dbz-dokkanbattle.fandom.com/wiki/Infinite_Energy)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and ATK & DEF +5% and chance to perform a critical hit +5%',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support)\n ­ ­ ­ ­ Level 1: ATK +10% and all enemies\' DEF -15%\n ­ ­ ­ ­ Level 10: ATK +15% and all enemies\' DEF -20%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Tournament of Power](https://dbz-dokkanbattle.fandom.com/wiki/Tournament_of_Power)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK & DEF +7%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['mvp17', 'Android #17'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./a171.js')
        const {categories} = require('./a171.js')
        const {status} = require('./a171.js')
        const {plural} = require('./a171.js')
        const {aliases} = require('./a171.js')
        var color = 7164715;
        var name = "Last-Ditch Battle\nAndroid #17";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Last-Ditch_Battle_Android_17";
        var desc = "Super PHY";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/745697816223154316/card_1014910_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/745697836682707045/340.png";
        var leader = "\"[Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids)\" Category Ki +3, HP & ATK +170% and DEF +130%; or [Super PHY](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_PHY) Type Ki +3 and HP, ATK & DEF +90%";
        var superatk = "[Grand Explosion](https://dbz-dokkanbattle.fandom.com/wiki/File:PHY_TUR_Android_17_(Super)_Super_Attack): Causes immense damage to enemy and lowers ATK & DEF[1]";
        var passive = "Cutthroat Survival Strategy: ATK +120% when performing a Super Attack; all allies' Ki +3 and DEF +60%; reduces damage received by 40% when HP is 77% or below";
        var stats = "HP: 12,110 (55%)/15,510 (100%)\nATK: 12,832 (55%)/15,832 (100%)\nDEF: 8,280 (55%)/10,880 (100%)";
        var links = "";
            for (var i = 0; i < Math.ceil(link.length/2); i++)
            {
                links += link[i] + "\n";
            }
        var links2 = "";
            for (var i = Math.ceil(link.length/2); i < link.length; i++)
            {
                links2 += link[i] + "\n";
            }
        var cats = "";
            for (var i = 0; i < categories.length; i++)
            {
                cats += categories[i] + "\n";
            }
        var apt = "APT: 2,881,874 (unsupported)/4,668,635 (supported)\nDefense: 85,996 (unsupported)/97,820 (supported) \nLinking Partner: [Androids #17 & 18/Android #16](https://dbz-dokkanbattle.fandom.com/wiki/The_Androids%27_Journey_Androids_17_%26_18/Android_16#Androids%20#17%20&%20#18) \nTeam: [Androids](https://dbz-dokkanbattle.fandom.com/wiki/Androids) \nBuild: 11 Additional/15 Critical";
        var blp = "[PHY LR Androids #17 & 16/Android #16](https://dbz-dokkanbattle.fandom.com/wiki/The_Androids%27_Journey_Androids_17_%26_18/Android_16#Androids%20#17%20&%20#18) - 5 links shared\n[TEQ LR Goku & Frieza (Final Form) (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Miraculous_Outcome_Goku_%26_Frieza_(Final_Form)_(Angel)) - 4 links shared\n[PHY LR Android #16](https://dbz-dokkanbattle.fandom.com/wiki/The_Androids%27_Journey_Androids_17_%26_18/Android_16#Android%20#16) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 150%\n► [INT SSR Android #17](https://dbz-dokkanbattle.fandom.com/wiki/Warrior%27s_Duty_Android_17) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: Lowers enemy's ATK & DEF by 20% for 3 turns";

        if (status === 'incomplete')
        {
            var person = aliases[aliases.length - 1]
            if (plural === 'false')
            {
                const preview = new Discord.MessageEmbed()
                    .setColor(color)
                    .setAuthor(message.author.username, pfp)
                    .setTitle(`${person} is coming soon.`)
		    .setTimestamp()
                message.channel.send(preview)
            }
            else
            {
                const preview = new Discord.MessageEmbed()
                    .setColor(color)
                    .setAuthor(message.author.username, pfp)
                    .setTitle(`${person} are coming soon.`)
		    .setTimestamp()
                message.channel.send(preview)
            }
        }
        else
        {
            var sub = args[0];

            switch (sub)
            {
                case undefined:
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
                                {name: "Links cont.", value: links2},
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
                    
                case "leader":
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

                case "super":
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

                case "passive":
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

                case "stats":
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

                case "links":
                    const linkSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Links", links)
                        .addField("Links cont.", links2)
                        .setTimestamp()
                    message.channel.send(linkSkill)
                    break;

                case "categories":
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

                case "apt":
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

                case "partners":
                    const bestLinkingPartners = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
			            .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Best Linking Partners", blp)
                        .setTimestamp()
                    message.channel.send(bestLinkingPartners)
                    break;

                case "details":
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

                case "art":
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