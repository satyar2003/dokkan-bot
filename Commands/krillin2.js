const Discord = require('discord.js')

module.exports = {
    name: 'krillin2',
    description: 'AGL UR Krillin',
    categories: ['[Universe Survival Saga](https://dbz-dokkanbattle.fandom.com/wiki/Universe_Survival_Saga)',
                 '[Representatives of Universe 7](https://dbz-dokkanbattle.fandom.com/wiki/Representatives_of_Universe_7)',
                 '[Earthlings](https://dbz-dokkanbattle.fandom.com/wiki/Earthlings)',
                 '[Battle of Wits](https://dbz-dokkanbattle.fandom.com/wiki/Battle_of_Wits)',
                 '[Turtle School](https://dbz-dokkanbattle.fandom.com/wiki/Turtle_School)'],
    link: ['[Experienced Fighters](https://dbz-dokkanbattle.fandom.com/wiki/Experienced_Fighters)\n ­ ­ ­ ­ Level 1: ATK +10%\n ­ ­ ­ ­ Level 10: ATK +15%',
           '[Turtle School](https://dbz-dokkanbattle.fandom.com/wiki/Turtle_School_(Link_Skill))\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Ki +2 and ATK & DEF +20%',
           '[Solid Support](https://dbz-dokkanbattle.fandom.com/wiki/Solid_Support)\n ­ ­ ­ ­ Level 1: ATK +10% and all enemies\' DEF -15%\n ­ ­ ­ ­ Level 10: ATK +15% anda ll enemies\' DEF -20%',
           '[Brainiacs](https://dbz-dokkanbattle.fandom.com/wiki/Brainiacs)\n ­ ­ ­ ­ Level 1: ATK & DEF +10%\n ­ ­ ­ ­ Level 10: ATK & DEF +15%',
           '[Courage](https://dbz-dokkanbattle.fandom.com/wiki/Courage)\n ­ ­ ­ ­ Level 1: Ki +1\n ­ ­ ­ ­ Level 10: Ki +2 and ATK +10%',
           '[Tournament of Power](https://dbz-dokkanbattle.fandom.com/wiki/Tournament_of_Power)\n ­ ­ ­ ­ Level 1: Ki +3\n ­ ­ ­ ­ Level 10: Ki +3 and ATK & DEF +7%',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle)\n ­ ­ ­ ­ Level 1: ATK +15%\n ­ ­ ­ ­ Level 10: ATK +20%'],
    status: 'complete',
    plural: 'false',
    aliases: ['Krillin'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./krillin2.js')
        const {categories} = require('./krillin2.js')
        const {status} = require('./krillin2.js')
        const {plural} = require('./krillin2.js')
        const {aliases} = require('./krillin2.js')
        var color = 2317729;
        var name = "Trustworthy Skill and Experience\nKrillin";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Trustworthy_Skill_and_Experience_Krillin";
        var desc = "Super AGL UR";
        var circle = "https://media.discordapp.net/attachments/699897528342151198/812899555040296980/card_1020030_circle.png";
        var character = "https://media.discordapp.net/attachments/699897528342151198/812899516067872798/340.png";
        var leader = "\"[Representatives of Universe 7](https://dbz-dokkanbattle.fandom.com/wiki/Representatives_of_Universe_7)\" Category Ki +3 and HP, ATK & DEF +120%";
        var superatk = "[Solar Flare x100](https://www.youtube.com/watch?v=dhj8CT1iOuI): Causes supreme damage and lowers ATK[1] with a high chance of stunning the enemy[2]";
        var passive = "Teaming Up With Android #18: ATK & DEF +180% and medium chance[3] of evading enemy's attack (including Super Attack); Ki +2 plus an additional ATK & DEF +120% when your team has \"[Android #18](https://dbz-dokkanbattle.fandom.com/wiki/Android_18_(disambiguation)#ANDROID_.2318)\" attacking in the same turn; attacks effective against all Types when the target enemy is stunned";
        var stats = "HP: 9,791 (55%)/12,391 (100%)\nATK: 10,577 (55%)/13,577 (100%)\nDEF: 6,655 (55%)/10,055 (100%)";
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
        var apt = "APT: 3,061,692 (unsupported)/3,499,077 (supported)\nDefense: 136,767 (unsupported)/156,305 (supported) \nLinking Partner: [TEQ LR Goku & Frieza (Final Form) (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Miraculous_Outcome_Goku_%26_Frieza_(Final_Form)_(Angel)) \nTeam: [Representatives of Universe 7](https://dbz-dokkanbattle.fandom.com/wiki/Representatives_of_Universe_7) \nBuild: 11 Additional/15 Critical";
        var blp = "[TEQ UR Tapion](https://dbz-dokkanbattle.fandom.com/wiki/Hero_on_a_Mission_Tapion) - 5 links shared\n[TEQ LR Goku & Frieza (Final Form) (Angel)](https://dbz-dokkanbattle.fandom.com/wiki/Miraculous_Outcome_Goku_%26_Frieza_(Final_Form)_(Angel)) - 4 links shared\n[PHY UR Tien](https://dbz-dokkanbattle.fandom.com/wiki/Risky_Covering_Fire_Tien) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%\n► [PHY SSR Krillin](https://dbz-dokkanbattle.fandom.com/wiki/Spirited_Earth_Defense_Krillin) and [PHY SR Krillin](https://dbz-dokkanbattle.fandom.com/wiki/Heartening_Support_Krillin) can be [farmed](https://dbz-dokkanbattle.fandom.com/wiki/Leveling_Super_Attack_Guide) to raise Super Attack";
        var footnotes = "[1]: Lowers enemy's ATK by 20% for 3 turns\n[2]: 50% chance to stun the enemy for 2 turns\n[3]: 30% chance to evade enemy's attack";

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
                        .setFooter("[1]: Lowers enemy's ATK by 20% for 3 turns\n[2]: 50% chance to stun the enemy for 2 turns")
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
                        .setFooter("[3]: 30% chance to evade enemy's attack")
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