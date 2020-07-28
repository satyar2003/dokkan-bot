const Discord = require('discord.js')

module.exports = {
    name: '1frieza1',
    description: 'STR LR Prime Battle Frieza (1st Form)',
    categories: ['[Planet Namek Saga](https://dbz-dokkanbattle.fandom.com/wiki/Planet_Namek_Saga)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Wicked Bloodline](https://dbz-dokkanbattle.fandom.com/wiki/Wicked_Bloodline)',
                 '[Dragon Ball Seekers](https://dbz-dokkanbattle.fandom.com/wiki/Dragon_Ball_Seekers)',
                 '[Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)',
                 '[Inhuman Deeds](https://dbz-dokkanbattle.fandom.com/wiki/Inhuman_Deeds)'],
    link: ['[Strongest Clan in Space](https://dbz-dokkanbattle.fandom.com/wiki/Strongest_Clan_in_Space) (Ki +2)',
           '[Universe\'s Most Malevolent](https://dbz-dokkanbattle.fandom.com/wiki/Universe%27s_Most_Malevolent) (ATK +15%)',
           '[Metamorphosis](https://dbz-dokkanbattle.fandom.com/wiki/Metamorphosis) (Recover 5% HP)',
           '[Thirst for Conquest](https://dbz-dokkanbattle.fandom.com/wiki/Thirst_for_Conquest) (ATK +15%)',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses) (ATK & DEF +25% when HP is 80% or below)',
           '[Fear and Faith](https://dbz-dokkanbattle.fandom.com/wiki/Fear_and_Faith) (Ki +2)',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power) (ATK +5000 when Super Attack is launched)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Frieza (1st Form)'],
    execute(message, args) {
        const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./1frieza1.js')
        const {categories} = require('./1frieza1.js')
        const {status} = require('./1frieza1.js')
        const {plural} = require('./1frieza1.js')
        const {aliases} = require('./1frieza1.js')
        var color = 8990259;
        var name = "Reign of Terror\nFrieza (1st Form)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Reign_of_Terror_Frieza_(1st_Form)";
        var desc = "Extreme STR LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/726519657049227294/card_1009380_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/726519831956029513/otMSwicZg2I10qHDjbhmGiKqEDNtJS0JC29Vxtk2nlivVSqmoG9pwpSTCb2XD2Ls7mPKaqRBNHhohMzFkxkSAp9MBrGiEFM3SgYX.png";
        var leader = "All Types ATK +7000";
        var superatk = "Death Ball (12-17 Ki): Causes colossal damage to enemy\n[Imperial Conquest](https://dbz-dokkanbattle.fandom.com/wiki/File:(Super_Attack)_LR_Frieza_(1st_Form)_-_Reign_of_Terror_(18%2B_Ki)) (18+ Ki): Causes mega-colossal damage to enemy and lowers ATK & DEF[1]";
        var passive = "End of Everything: Causes mega-colossal damage to enemy and lowers ATK & DEF[1]";
        var stats = "HP: 16,400 (55%)/19,400 (100%)\nATK: 18,280 (55%)/21,680 (100%)\nDEF: 9,450 (55%)/12,050 (100%)";
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
        var apt = "APT: 2,413,431 (unsupported)/3,861,587 (supported)\nDefense: 58‚020 (unsupported)/87,251 (supported) \nLinking Partner: [STR UR Cooler](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Ultimate_Power_Cooler) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)/[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost) \nBuild: 6 Additional/20 Critical";
        var blp = "[TEQ UR Cooler (Final Form)](https://dbz-dokkanbattle.fandom.com/wiki/Heinous_Attack_Cooler_(Final_Form)) - 5 links shared\n[STR UR Cooler](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Ultimate_Power_Cooler) - 5 links shared\n[PHY UR Cooler (Final Form)](https://dbz-dokkanbattle.fandom.com/wiki/Open_The_Gates_of_Hell_Cooler_(Final_Form)) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 140%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► Can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise the Super Attack of other [Frieza (1st Form)](https://dbz-dokkanbattle.fandom.com/wiki/Frieza_(disambiguation)#FRIEZA_.281ST_FORM.29) cards";
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
            var sub = args[0]
            //var length = args.length
            
            switch (sub)
            {
                case undefined:
                    const fullCard = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addFields(
                            {name: "Leader Skill", value: leader},
                            {name: "Super Attack", value: superatk},
                            {name: "Passive Skill", value: passive},
                            {name:"Stats", value: stats},
                            {name: "Links", value: links},
                            {name: "Categories", value: cats},
                            {name: "Attack Per Turn", value: apt},
                            {name: "Best Linking Partners", value: blp},
                            {name: "Details", value: deets}
                        )
                        .setFooter(footnotes)
                        .setTimestamp()
                    message.channel.send(fullCard)
                    break;

                case "leader":
                    const leaderSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Leader Skill", leader)
                        .setTimestamp()
                    message.channel.send(leaderSkill)
                    break;

                case "super":
                    const superAttack = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Super Attack", superatk)
                        .setFooter(footnotes)
                        .setTimestamp()
                    message.channel.send(superAttack)
                    break;

                case "passive":
                    const passiveSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Passive Skill", passive)
                        .setTimestamp()
                    message.channel.send(passiveSkill)
                    break;

                case "stats":
                    const unitStats = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Stats:", stats)
                        .setTimestamp()
                    message.channel.send(unitStats)
                    break;

                case "links":
                    const linkSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setThumbnail(circle)
                        .setDescription(desc)
                        .addField("Links", links)
                        .setTimestamp()
                    message.channel.send(linkSkill)
                    break;

                case "categories":
                    const category = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Categories", cats)
                        .setTimestamp()
                    message.channel.send(category)
                    break;

                    case "apt":
                        const attackPerTurn = new Discord.MessageEmbed()
                            .setColor(color)
                            .setAuthor(message.author.username, pfp)
                            .setTitle(name)
                            .setURL(url)
                            .setDescription(desc)
                            .setThumbnail(circle)
                            .addField("Attack Per Turn", apt)
                            .setTimestamp()
                        message.channel.send(attackPerTurn)
                        break;

                    case "partners":
                        const bestLinkingPartners = new Discord.MessageEmbed()
                            .setColor(color)
                            .setAuthor(message.author.username, pfp)
                            .setTitle(name)
                            .setURL(url)
                            .setDescription(desc)
                            .setThumbnail(circle)
                            .addField("Best Linking Partners", blp)
                            .setTimestamp()
                        message.channel.send(bestLinkingPartners)
                        break;

                    case "details":
                        const unitDetails = new Discord.MessageEmbed()
                            .setColor(color)
                            .setAuthor(message.author.name, pfp)
                            .setTitle(name)
                            .setURL(url)
                            .setDescription(desc)
                            .setThumbnail(circle)
                            .addField("Details", deets)
                            .setTimestamp()
                        message.channel.send(unitDetails)
                        break;

                    case "art":
                        const cardArt = new Discord.MessageEmbed()
                            .setColor(color)
                            .setAuthor(message.author.username, pfp)
                            .setTitle(name)
                            .setURL(url)
                            .setDescription(desc)
                            .setThumbnail(circle)
                            .setImage(character)
                            .setTimestamp()
                        message.channel.send(cardArt)
                        break;

                    default:
                        message.channel.send(`${message.author} that is not a valid sub-command. You can use \`d!help\` to find out all possible sub-commands.`)
            }
        }
    }
}