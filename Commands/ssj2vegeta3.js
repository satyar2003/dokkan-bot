const Discord = require('discord.js')

module.exports = {
    name: 'ssj2vegeta3',
    description: 'PHY LR Super Saiyan 2 Vegeta (Angel)',
    categories: ['[Resurrected Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Resurrected_Warriors)',
                 '[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Vegeta\'s Family](https://dbz-dokkanbattle.fandom.com/wiki/Vegeta%27s_Family)',
                 '[Worthy Rivals](https://dbz-dokkanbattle.fandom.com/wiki/Worthy_Rivals)',
                 '[Otherworld Warriors](https://dbz-dokkanbattle.fandom.com/wiki/Otherworld_Warriors)',
                 '[Super Saiyan 2](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan_2)',
                 '[Desperate Struggle](https://dbz-dokkanbattle.fandom.com/wiki/Desperate_Struggle)'],
    link: ['[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race)\n ­ ­ ­ ­ Level 1: ATK +5%\n ­ ­ ­ ­ Level 10: ATK +10%',
           '[Prodigies](https://dbz-dokkanbattle.fandom.com/wiki/Prodigies)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Royal Lineage](https://dbz-dokkanbattle.fandom.com/wiki/Royal_Lineage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK +5%',
           '[Golden Warrior](https://dbz-dokkanbattle.fandom.com/wiki/Golden_Warrior)\n ­ ­ ­ ­ Level 1: Enemy DEF -5% and Ki +1\n ­ ­ ­ ­ Level 10: Enemy DEF -10% and Ki +1',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power)\n ­ ­ ­ ­ Level 1: ATK +10% when Super Attack is launched\n ­ ­ ­ ­ Level 10: ATK +15% when Super Attack is launched'],
    status: 'complete',
    plural: 'true',
    aliases: ['Super Saiyan 2 Vegeta (Angel)'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./ssj2vegeta3.js')
        const {categories} = require('./ssj2vegeta3.js')
        const {status} = require('./ssj2vegeta3.js')
        const {plural} = require('./ssj2vegeta3.js')
        const {aliases} = require('./ssj2vegeta3.js')
        var color = 7164715;
        var name = "A Promise Made to Kakarot\nSuper Saiyan 2 Vegeta (Angel)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/A_Promise_Made_to_Kakarot_Super_Saiyan_2_Vegeta_(Angel)";
        var desc = "Super PHY LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/762544121884704789/card_1020220_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/762544326688899082/weuPzUX1iicZgAAAABJRU5ErkJggg.png";
        var leader = "\"[Worthy Rivals](https://dbz-dokkanbattle.fandom.com/wiki/Worthy_Rivals)\" Category Ki +4 and HP, ATK & DEF +150%; or [<:sphy:729475848196980736>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Super_PHY) Type Ki +4 and HP, ATK & DEF +100%";
        var superatk = "[Final Burst Cannon](https://youtu.be/PG5PFOX9920) (12-17 Ki): Raises DEF for 1 turn[1] and causes colossal damage to enemy\n[Big Bang Attack](https://youtu.be/PG5PFOX9920?t=28) (18+ Ki): Causes mega-colossal damage to enemy and greatly lowers DEF[2]";
        var unitatk = "[Minute of Desperation](https://youtu.be/PG5PFOX9920?t=58) (18+ Ki): Greatly raises ATK for 1 turn[3], causes mega-colossal damage to enemy and massively lowers DEF[4]\nActivation Condition: Activated when Ki is 18 or more with a \"[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)\" Category ally whose name includes \"[Goku](https://dbz-dokkanbattle.fandom.com/wiki/Goku_(disambiguation))\" attacking in the same turn"
        var passive = "ATK & DEF +70%; plus an additional ATK & DEF +4% each time Ki rises by 1 (up to 70%); Ki +3 when the name of an ally who is attacking in the same turn or an enemy includes \"[Goku](https://dbz-dokkanbattle.fandom.com/wiki/Goku_(disambiguation))\" (Youth, Captain Ginyu, Jr., etc. excluded); plus an additional Ki +3 when there is a \"[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga)\" Category ally whose name includes \"[Goku](https://dbz-dokkanbattle.fandom.com/wiki/Goku_(disambiguation))\" attacking in the same turn";
        var active = "[Vegeta & Kakarot](https://youtu.be/PG5PFOX9920?t=43): Ki +1, ATK +59% and DEF +78% for 1 turn; can be activated when there is a \"[Majin Buu Saga]\" Category ally whose name includes \"[Goku](https://dbz-dokkanbattle.fandom.com/wiki/Goku_(disambiguation))\" attacking in the same turn, starting from the 3rd turn from the start of battle (once only)"
        var stats = "HP: 18,688 (55%)/22,088 (100%)\nATK: 17,625 (55%)/20,825 (100%)\nDEF: 10,913 (55%)/13,513 (100%)";
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
        var apt = "APT: 10,740,329 (unsupported)/11,793,303 (supported)\nDefense: 240,958 (unsupported)/264,582 (supported) \nLinking Partner: [AGL UR Super Saiyan 2 Goku](https://dbz-dokkanbattle.fandom.com/wiki/Long-awaited_Serious_Duel_Super_Saiyan_2_Goku#Before%20Z-Awakening) \nTeam: [Battle of Wits](https://dbz-dokkanbattle.fandom.com/wiki/Battle_of_Wits)/[Majin Buu Saga](https://dbz-dokkanbattle.fandom.com/wiki/Majin_Buu_Saga) \nBuild: 11 Additional/15 Critical";
        var blp = "[TEQ UR Super Saiyan 3 Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Power_to_Decimate_Super_Saiyan_3_Vegeta) - 6 links shared\n[INT LR Super Saiyan Vegeta](https://dbz-dokkanbattle.fandom.com/wiki/Awakened_Saiyan_Blood_Super_Saiyan_Vegeta) - 5 links shared\n[AGL LR Super Saiyan Goku](https://dbz-dokkanbattle.fandom.com/wiki/Miracle-Making_Super_Saiyan_Super_Saiyan_Goku) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► His additional ATK & DEF +4% per Ki is calculated separately, for a total boost of ATK & DEF +189% at 18 Ki\n ­ ­ ­ ­ ­▫ His Active Skill is also calculated separately, resulting in a maximum boost of ATK +359.51% and DEF +414.42% for 1 turn";
        var footnotes = "[1]: Raises DEF by 30% for 1 turn\n[2]: Lowers enemy's DEF by 50% for 3 turns\n[3]: Raises SA Multiplier by 50% for 1 turn\n[4]: Lowers enemy's DEF by 80% for 3 turns";

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
                                {name: "Unit Super Attack", value: unitatk},
                                {name: "Passive Skill", value: passive},
                                {name: "Active Skill", value: active},
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
                        .setFooter("[1]: Raises DEF by 30% for 1 turn\n[2]: Lowers enemy's DEF by 50% for 3 turns")
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
                    message.channel.send(superAttack)
                    break;

                case "unit":
                case "unitsuper":
                    const unitSuperAttack = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
                        .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Unit Super Attack", unitatk)
                        .setTimestamp()
                        .setFooter("[3]: Raises SA Multiplier by 50% for 1 turn\n[4]: Lowers enemy's DEF by 80% for 3 turns")
                    message.channel.send(unitSuperAttack)
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
                
                case "active":
                    const activeSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
                        .setAuthor(message.author.username, pfp)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Active Skill", active)
                        .setTimestamp()
                    message.channel.send(activeSkill)
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