const Discord = require('discord.js')

module.exports = {
    name: 'rose3',
    description: 'INT LR INT LR Goku Black (Super Saiyan Rosé)',
    categories: ['[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)',
                 '[Potara](https://dbz-dokkanbattle.fandom.com/wiki/Potara)',
                 '[Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha_(Category))',
                 '[Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)',
                 '[Inhuman Deeds](https://dbz-dokkanbattle.fandom.com/wiki/Inhuman_Deeds)'],
    link: ['[Super Saiyan](https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan) (ATK +10%)',
           '[Fear and Faith](https://dbz-dokkanbattle.fandom.com/wiki/Fear_and_Faith) (Ki +2)',
           '[Kamehameha](https://dbz-dokkanbattle.fandom.com/wiki/Kamehameha) (ATK +2500 when Super Attack is launched)',
           '[Dismal Future](https://dbz-dokkanbattle.fandom.com/wiki/Dismal_Future) (Ki +1)',
           '[Big Bad Bosses](https://dbz-dokkanbattle.fandom.com/wiki/Big_Bad_Bosses) (ATK & DEF +25% when HP is 80% or below)',
           '[Fierce Battle](https://dbz-dokkanbattle.fandom.com/wiki/Fierce_Battle) (ATK +15%)',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power) (ATK +5000 when Super Attack is launched)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Goku Black (Super Saiyan Rosé)'],
    execute(message, args) {
		const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./rose3.js')
        const {categories} = require('./rose3.js')
        const {status} = require('./rose3.js')
        const {plural} = require('./rose3.js')
        const {aliases} = require('./rose3.js')
        var color = 7028604;
        var name = "Mark of Almighty Power\nGoku Black (Super Saiyan Rosé)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Mark_of_Almighty_Power_Goku_Black_(Super_Saiyan_Ros%C3%A9)#Super%20Saiyan%20Ros%C3%A9";
        var desc = "Extreme INT LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/738619880911142932/card_1018880_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/738620302325579831/F2fJE8CQ5SonAAAAAElFTkSuQmCC.png";
        var leader = "\"[Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga)\" Category Ki +4 and HP, ATK & DEF +130%; or [<:eint:729475498270523472>](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_INT) Type Ki +4 and HP, ATK & DEF +100%";
        var superatk = "[Binding Black Kamehameha](https://www.youtube.com/watch?v=oU9cASm4smE) (12-17 Ki): Greatly raises DEF for 1 turn[1] and causes colossal damage to enemy\n[Holy Light Grenade](https://youtu.be/oU9cASm4smE?t=12) (18+ Ki): Greatly raises DEF for 1 turn[1] and causes mega-colossal damage to enemy";
        var passive = "Test of Rage: ATK & DEF +66%; plus an additional ATK +6% each time Ki rises by 1 (up to 120%); Ki +2 with each final blow delivered (up to +6); recovers 6% HP at end of turn in which attack was received";
        var active = "[Rage](https://youtu.be/oU9cASm4smE?t=30): Rages; can be activated when HP is 66% or less, starting from the 6th turn from the start of battle (once only)"
        var stats = "HP: 22,300 (55%)/25,300 (100%)\nATK: 18,635 (55%)/21,635 (100%)\nDEF: 8,681 (55%)/11,681 (100%)";
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
        var apt = "APT: 6,444,845 (unsupported)/10,692,819 (supported)\nDefense: 139,495 (unsupported)/161,456 (supported) \nLinking Partner: [TEQ LR Goku Black (Super Saiyan Rosé) & Zamasu](https://dbz-dokkanbattle.fandom.com/wiki/Merciless_Condemnation_Goku_Black_(Super_Saiyan_Ros%C3%A9)_%26_Zamasu) \nTeam: [Exploding Rage](https://dbz-dokkanbattle.fandom.com/wiki/Exploding_Rage)/[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods) \nBuild: 6 Additional/15 Critical";
        var blp = "[TEQ LR Goku Black (Super Saiyan Rosé) & Zamasu](https://dbz-dokkanbattle.fandom.com/wiki/Merciless_Condemnation_Goku_Black_(Super_Saiyan_Ros%C3%A9)_%26_Zamasu) - 5 links shared\n[INT UR Goku Black (Super Saiyan Rosé)](https://dbz-dokkanbattle.fandom.com/wiki/Epitome_of_Sublime_Beauty_Goku_Black#Goku%20Black%20(Super%20Saiyan%20Ros%C3%A9)) - 5 links shared\n[PHY UR Goku Black](https://dbz-dokkanbattle.fandom.com/wiki/Dark_Menace_Goku_Black#Global) - 5 links shared";
        var deets = "► 12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► His additional ATK +6% per Ki is calculated separately, for a max boost of +265.2% at 20 Ki";
        var footnotes = "[1]: Raises DEF by 50% for 1 turn";

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
            //var length = args.length;
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
                                {name: "Active Skill", value: active},
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

                case "links":
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
                        .addField("Attack Per Turn", apt)
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