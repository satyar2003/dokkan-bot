const Discord = require('discord.js')

module.exports = {
    name: 'lssjbroly4',
    description: 'STR UR Legendary Super Saiyan Broly without EZA',
    categories: ['[Movie Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Movie_Bosses)',
                 '[Pure Saiyans](https://dbz-dokkanbattle.fandom.com/wiki/Pure_Saiyans)',
                 '[Full Power](https://dbz-dokkanbattle.fandom.com/wiki/Full_Power)',
                 '[Target: Goku](https://dbz-dokkanbattle.fandom.com/wiki/Target:_Goku)',
                 '[Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)',
                 '[Inhuman Deeds](https://dbz-dokkanbattle.fandom.com/wiki/Inhuman_Deeds)'],
    link: ['[Hardened Grudge](https://dbz-dokkanbattle.fandom.com/wiki/Hardened_Grudge) (Ki +1)',
           '[Saiyan Warrior Race](https://dbz-dokkanbattle.fandom.com/wiki/Saiyan_Warrior_Race) (ATK +700)',
           '[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan) (ATK +10%)',
           '[The Saiyan Lineage](https://dbz-dokkanbattle.fandom.com/wiki/The_Saiyan_Lineage) (Ki +1)',
           '[Berserker](https://dbz-dokkanbattle.fandom.com/wiki/Berserker) (ATK +20% when HP is 50% or below)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)'],
    status: 'incomplete',
    plural: 'false',
    aliases: ['lssbroly4', 'Legendary Super Saiyan Broly'],
    execute(message, args) {
        const {link} = require('./lssjbroly4.js')
        const {categories} = require('./lssjbroly4.js')
        const {status} = require('./lssjbroly4.js')
        const {plural} = require('./lssjbroly4.js')
        const {aliases} = require('./lssjbroly4.js')
        var color = 8990259;
        var name = "Super Warrior of Destruction\nLegendary Super Saiyan Broly";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Super_Warrior_of_Destruction_Legendary_Super_Saiyan_Broly#Before%20Z-Awakening";
        var desc = "Extreme STR UR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/736809759788892180/card_1003800_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/736809775077261402/340.png";
        var leader = "<:str:729468929293942894> Type Ki +3, ATK +3000";
        var superatk = "Gigantic Meteor: Causes mass damage to all enemies";
        var passive = "Rushing Rage: DEF reduced to 0 and ATK +7000 when attacking";
        var stats = "HP: 12,643 (55%)/16,843 (100%)\nATK: 12,043 (55%)/16,803 (100%)\nDEF: 7,332 (55%)/10,972 (100%)";
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
        var apt = "APT: 981,976 (unsupported)/1,187,169 (supported)\nDefense: 0 (unsupported)/0 (supported) \nLinking Partner: [TEQ LR Super Saiyan Broly](https://dbz-dokkanbattle.fandom.com/wiki/Nightmarish_Impact_Super_Saiyan_Broly) \nTeam: [Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)/[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods) \nBuild: 6 Additional/20 Critical";
        var blp = "[TEQ LR Super Saiyan Broly](https://dbz-dokkanbattle.fandom.com/wiki/Nightmarish_Impact_Super_Saiyan_Broly) - 5 links shared\n[PHY UR Super Saiyan 3 Broly](https://dbz-dokkanbattle.fandom.com/wiki/Recurring_Nightmare_Super_Saiyan_3_Broly) - 5 links shared\n[TEQ UR Super Saiyan 3 Broly](https://dbz-dokkanbattle.fandom.com/wiki/Mythic_Evolution_Super_Saiyan_3_Broly) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► SA Level can go up to 15, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Battle](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Battle:_Super_Warrior_of_Destruction_Legendary_Super_Saiyan_Broly)** event";
        var footnotes = "";
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
            var length = args.length;
            var sub = args[0];
            switch (true)
            {
                case length == 0:
                    const fullCard = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
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
                        .setDescription(desc)
                        .setThumbnail(circle)
                        .addField("Super Attack", superatk)
                        .setTimestamp()
                    message.channel.send(superAttack)
                    break;

                case sub === "passive":
                    const passiveSkill = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(name)
                        .setURL(url)
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