const Discord = require('discord.js')

module.exports = {
    name: 'brolytrio1',
    description: 'PHY LR Broly & Cheelai & Lemo',
    categories: ['[Movie Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Movie_Bosses)',
                 '[Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces)'],
    link: ['[Brainiacs](https://dbz-dokkanbattle.fandom.com/wiki/Brainiacs)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: ATK & DEF +15%',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support)\n ­ ­ ­ ­ Level 1: ATK +10% and enemy DEF -15%\n ­ ­ ­ ­ Level 10: ATK +15% and enemy DEF -20%',
           '[Cold Judgment](https://dbz-dokkanbattle.fandom.com/wiki/Cold_Judgment)\n ­ ­ ­ ­ Level 1: DEF +20%\n ­ ­ ­ ­ Level 10: DEF +25%',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses)\n ­ ­ ­ ­ Level 1: ATK & DEF +25% when HP is 80% or below\n ­ ­ ­ ­ Level 10: ATK & DEF +25%',
           '[Shocking Speed](https://dbz-dokkanbattle.fandom.com/wiki/Shocking_Speed)\n ­ ­ ­ ­ Level 1: Ki +2\n ­ ­ ­ ­ Level 10: Ki +2 and DEF +5%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'true',
    aliases: ['Broly & Cheelai & Lemo'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./brolytrio1.js')
        const {categories} = require('./brolytrio1.js')
        const {status} = require('./brolytrio1.js')
        const {plural} = require('./brolytrio1.js')
        const {aliases} = require('./brolytrio1.js')
        var color = 7164715;
        var name = "A New Life on Vampa\nBroly & Cheelai & Lemo";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/A_New_Life_on_Vampa_Broly_%26_Cheelai_%26_Lemo";
        var desc = "Extreme PHY LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/745028162093711390/card_1019000_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/745028314200277133/B9vLraLpLBy1AAAAAElFTkSuQmCC.png";
        var leader = "\"[Movie Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Movie_Bosses)\" Category Ki +4 and HP, ATK & DEF +130%; or [<:ephy:729475525155749949>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_PHY) Type Ki +4 and HP, ATK & DEF +100%";
        var superatk = "[Surprise Attack](https://youtu.be/okaZR9zFiHc?t=93) (12-17 Ki): Greatly raises DEF for 1 turn[1], causes colossal damage to enemy and lowers ATK[2]\n[Survival Attack](https://youtu.be/okaZR9zFiHc?t=111) (18+ Ki): Greatly raises ATK & DEF for 1 turn[3] and causes mega-colossal damage to enemy";
        var passive = "ATK & DEF +15% per Ki Sphere obtained; plus an additional ATK & DEF +5% and Ki +2 per Ki Sphere with 2 or more [<:phy:729467520272039988>](https://dbz-dokkanbattle.fandom.com/wiki/Category:PHY) Ki Spheres obtained; all allies' ATK +39% with 2 or more [<:agl:729467484289105930>](https://dbz-dokkanbattle.fandom.com/wiki/Category:AGL) or [<:str:729468929293942894>](https://dbz-dokkanbattle.fandom.com/wiki/Category:STR) Ki Spheres obtained; all allies' DEF +39% with 2 or more [<:teq:729467504593862728>](https://dbz-dokkanbattle.fandom.com/wiki/Category:TEQ) or [<:int:729468835819946026>](https://dbz-dokkanbattle.fandom.com/wiki/Category:INT) Ki Spheres obtained; evades enemy's attack (including Super Attack) with 7 or more Ki Spheres obtained";
        var stats = "HP: 23,575 (55%)/26,975 (100%)\nATK: 17,275 (55%)/20,275 (100%)\nDEF: 9,744 (55%)/12,344 (100%)";
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
        var apt = "APT: 3,355,308 (unsupported)/4,125,348 (supported)\nDefense: 238,178 (unsupported)/314,819 (supported) \nLinking Partner: [INT UR Paragus & Broly](https://dbz-dokkanbattle.fandom.com/wiki/Troublesome_Father_and_Son_Paragus_%26_Broly) \nTeam: [Joined Forces](https://dbz-dokkanbattle.fandom.com/wiki/Joined_Forces) \nBuild: 11 Additional/15 Critical";
        var blp = "[STR LR Trunks (Teen) (Future) & Mai (Future)](https://dbz-dokkanbattle.fandom.com/wiki/Hopes_and_Promises_for_the_Future_Trunks_(Teen)_(Future)_%26_Mai_(Future)) - 4 links shared\n[PHY LR Cell (Perfect Form) & Cell Jr.](https://dbz-dokkanbattle.fandom.com/wiki/The_Deadly_Cell_Games_Cell_(Perfect_Form)_%26_Cell_Jr.) - 4 links shared\n[PHY LR Android #17 & Androids #18/Androids #16] - 4 links shared";
        var deets = "► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%";
        var footnotes = "[1]: Raises DEF by 50% for 1 turn\n[2]: Lowers enemy's ATK by 20% for 3 turns\n[3]: Raises SA Multiplier and DEF by 50% for 1 turn";

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