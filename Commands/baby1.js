const Discord = require('discord.js')

module.exports = {
    name: 'baby1',
    description: 'AGL LR Super Baby 2 (Giant Ape)',
    categories: ['[Giant Form](https://dbz-dokkanbattle.fandom.com/wiki/Giant_Form)',
                 '[Transformation Boost](https://dbz-dokkanbattle.fandom.com/wiki/Transformation_Boost)',
                 '[Artificial Life Forms](https://dbz-dokkanbattle.fandom.com/wiki/Artificial_Life_Forms)',
                 '[Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors)',
                 '[Target: Goku](https://dbz-dokkanbattle.fandom.com/wiki/Target:_Goku)',
                 '[Final Trump Card](https://dbz-dokkanbattle.fandom.com/wiki/Final_Trump_Card)',
                 '[Revenge](https://dbz-dokkanbattle.fandom.com/wiki/Revenge)',
                 '[Inhuman Deeds](https://dbz-dokkanbattle.fandom.com/wiki/Inhuman_Deeds)'],
    link: ['[Thirst for Conquest](https://dbz-dokkanbattle.fandom.com/wiki/Thirst_for_Conquest) (ATK +15%)',
           '[Metamorphosis](https://dbz-dokkanbattle.fandom.com/wiki/Metamorphosis) (Recover 5% HP)',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses) (ATK & DEF +25% when HP is 80% or below)',
           '[GT](https://dbz-dokkanbattle.fandom.com/wiki/GT) (Ki +2)',
           '[Hatred of Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hatred_of_Saiyans) (Ki +2)',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit) (Ki +2)',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power) (ATK +5000 when Super Attack is launched)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Super Baby 2 (Giant Ape)'],
    execute(message, args) {
        const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./baby1.js')
        const {categories} = require('./baby1.js')
        const {status} = require('./baby1.js')
        const {plural} = require('./baby1.js')
        const {aliases} = require('./baby1.js')
        var color = 2317729;
        var name = "Ultimate Malign Being\nSuper Baby 2 (Giant Ape)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Ultimate_Malign_Being_Super_Baby_2_(Giant_Ape)";
        var desc = "Extreme AGL LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/722999393011105832/card_1016400_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/723004556597919744/QAAAABJRU5ErkJggg.png";
        var leader = "\"[Artificial Life Forms](https://dbz-dokkanbattle.fandom.com/wiki/Artificial_Life_Forms)\" Category Ki +4 and HP, ATK & DEF +130%; or <:eagl:729475466641276989> Type Ki +4 and HP, ATK & DEF +100%";
        var superatk = "[Revenge Final Slash](https://dbz-dokkanbattle.fandom.com/wiki/File:LR_Baby_12_Ki_Super_Attack) (12-17 Ki): Causes colossal damage to enemy and lowers ATK[1]\n[Reverse Shot](https://dbz-dokkanbattle.fandom.com/wiki/File:LR_Baby_18_Ki_Super_Attack) (18+ Ki): Causes mega-colossal damage to enemy and lowers ATK & DEF[2]";
        var passive = "Return of the Tuffles: Ki +3 and ATK & DEF +100%; plus an additional Ki +3 and ATK +50% when there is a \"[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)\" Category enemy; plus an additional Ki +3 and ATK +50% when there is a \"[Hybrid Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Hybrid_Saiyans)\" Category enemy; high chance[3] of turning into Giant Ape when HP is 40% or less (once only)";
        var stats = "HP: 21,238 (55%)/23,838 (100%)\nATK: 18,210 (55%)/21,210 (100%)\nDEF: 9,744 (55%)/13,144 (100%)";
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
        var apt = "APT: 4,685,217 (unsupported)/6,502,535 (supported)\nDefense: 115,667 (unsupported)/158,076 (supported) \nLinking Partner: [AGL UR Hyper Meta-Rilldo](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Focused_Attack_Hyper_Meta-Rilldo) \nTeam: [Terrifying Conquerors](https://dbz-dokkanbattle.fandom.com/wiki/Terrifying_Conquerors) \nBuild: 11 Additional/15 Critical";
        var blp = "[AGL UR Super Baby 1](https://dbz-dokkanbattle.fandom.com/wiki/Corroding_Menace_Super_Baby_1) - 5 links shared\n[INT LR Full Power Boujack (Galactic Warrior)](https://dbz-dokkanbattle.fandom.com/wiki/Galaxy-Threatening_Invasion_Full_Power_Boujack_(Galactic_Warrior)) - 4 links shared\n[AGL UR Baby Janemba](https://dbz-dokkanbattle.fandom.com/wiki/The_Ultimate_Evil_and_Hatred_Baby_Janemba) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%";
        var footnotes = "[1]: Lowers enemy's ATK by 20% for 3 turns\n[2]: Lowers enemy's ATK & DEF by 20% for 3 turns\n[3]: 50% chance to turn into Giant Ape";
        if (status === 'incomplete')
        {
            var person = aliases[aliases.length - 1]
            if (plural === 'false')
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: `${person} is coming soon.`
                }});
            }
            else
            {
                message.channel.send({embed: {
                    color: color,
                    author:
                    {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                    },
                    title: `${person} are coming soon.`
                }});
            }
        }
        else
        {
            var sub = args[0]

            switch (sub)
            {
                case undefined:
                    const fullCard = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
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
                        .setTimestamp()
                        .setFooter(footnotes)
                    message.channel.send(fullCard)
                    break;

                case "leader":
                    const leaderSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setThumbnail(circle)
                        .setDescription(desc)
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
                        .setTimestamp()
                        .setFooter("[1]: Lowers enemy's ATK by 20% for 3 turns\n[2]: Lowers enemy's ATK & DEF by 20% for 3 turns")
                    message.channel.send(superAttack)
                    break;

                case "passive":
                    const passiveSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setThumbnail(circle)
                        .addField("Passive Skill", passive)
                        .setTimestamp()
                        .setFooter("[3]: 50% chance to turn into Giant Ape")
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
                        .addField("Stats", stats)
                        .setTimestamp()
                    message.channel.send(unitStats)
                    break;

                case "links":
                    const linkSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTitle(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
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
                        .addField("Attack Per Turn", apt)
                        .setTimestamp()
                    message.channel.send(attackPerTurn)
                    break;

                case "partners":
                    const bestLinkingPartners = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
                        .setTimestamp(name)
                        .setURL(url)
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Best Linking Parnters", blp)
                        .setTimestamp()
                    message.channel.send(bestLinkingPartners)
                    break;

                case "details":
                    const unitDetails = new Discord.MessageEmbed()
                        .setColor(color)
                        .setAuthor(message.author.username, pfp)
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