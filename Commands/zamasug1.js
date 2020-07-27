const Discord = require('discord.js')

module.exports = {
    name: 'zamasug1',
    description: 'STR LR Zamasu (Goku) without EZA',
    categories: ['[Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)',
                 '[Potara](https://dbz-dokkanbattle.fandom.com/wiki/Potara)',
                 '[Future Saga](https://dbz-dokkanbattle.fandom.com/wiki/Future_Saga)',
                 '[Dragon Ball Seekers](https://dbz-dokkanbattle.fandom.com/wiki/Dragon_Ball_Seekers)',
                 '[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)',
                 '[Inhuman Deeds](https://dbz-dokkanbattle.fandom.com/wiki/Inhuman_Deeds)'],
    link: ['[Godly Power](https://dbz-dokkanbattle.fandom.com/wiki/Godly_Power) (ATK +15%)',
           '[Cold Judgement](https://dbz-dokkanbattle.fandom.com/wiki/Cold_Judgment) (DEF +20%)',
           '[Nightmare](https://dbz-dokkanbattle.fandom.com/wiki/Nightmare) (ATK +10%)',
           '[Dismal Future](https://dbz-dokkanbattle.fandom.com/wiki/Dismal_Future) (Ki +1)',
           '[Fear and Faith](https://dbz-dokkanbattle.fandom.com/wiki/Fear_and_Faith) (Ki +2)',
           '[Shattering the Limit](https://dbz-dokkanbattle.fandom.com/wiki/Shattering_the_Limit) (Ki +2)',
           '[Legendary Power](https://dbz-dokkanbattle.fandom.com/wiki/Legendary_Power) (ATK +5000 when Super Attack is launched)'],
    status: 'complete',
    plural: 'false',
    aliases: ['Zamasu (Goku)'],
    execute(message, args) {
	    const pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        const {link} = require('./zamasug1.js')
        const {categories} = require('./zamasug1.js')
        const {status} = require('./zamasug1.js')
        const {plural} = require('./zamasug1.js')
        const {aliases} = require('./zamasug1.js')
        var color = 8990259;
        var name = "Dawn of Darkest Justice\nGoku (Zamasu)";
        var url = "https://dbz-dokkanbattle.fandom.com/wiki/Dawn_of_Darkest_Justice_Zamasu_(Goku)";
        var desc = "Extreme STR LR";
        var circle = "https://media.discordapp.net/attachments/712036120191434793/737374443944542208/card_1019070_circle.png";
        var character = "https://media.discordapp.net/attachments/712036120191434793/737374637725319220/wNa3eky78ljZQAAAABJRU5ErkJggg.png";
        var leader = "\"[Time Travelers](https://dbz-dokkanbattle.fandom.com/wiki/Time_Travelers)\" Category Ki +3 and HP, ATK & DEF +77%";
        var superatk = "[Black Power Ball](https://youtu.be/XNVBRWWxlPY?t=33) (12-17 Ki): Causes colossal damage to enemy and lowers DEF[1]\n[Fierce God Slicer](https://youtu.be/XNVBRWWxlPY?t=45) (18+ Ki): Raises DEF for 1 turn[2] and causes mega-colossal damage to enemy";
        var passive = "Zero Mortals Plan Begins: ATK & DEF +50%; Ki +1 with each attack received (up to +5); launches an additional attack that has a medium chance[3] of becoming a Super Attack when facing 2 or more enemies; plus an additional ATK & DEF +20% with each final blow delivered (up to 50%)";
        var stats = "HP: 15,386 (55%)/18,386 (100%)\nATK: 15,066 (55%)/18,466 (100%)\nDEF: 9,024 (55%)/11,624 (100%)";
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
        var apt = "APT: 2,727,693 (unsupported)/3,576,309 (supported)\nDefense: 86,497 (unsupported)/96,107 (supported) \nLinking Partner: [Goku Black (Super Saiyan Rosé)](https://dbz-dokkanbattle.fandom.com/wiki/Rose_Stained_Super_Saiyan_Goku_Black_(Super_Saiyan_Ros%C3%A9)#Before%20Z-Awakening) \nTeam: [Realm of Gods](https://dbz-dokkanbattle.fandom.com/wiki/Realm_of_Gods)/[Extreme Class](https://dbz-dokkanbattle.fandom.com/wiki/Category:Extreme_Class) \nBuild: 6 Additional/20 Critical";
        var blp = "[AGL UR Fusion Zamasu](https://dbz-dokkanbattle.fandom.com/wiki/True_Power_of_a_God_Zamasu#Fusion%20Zamasu) - 4 links shared\n[AGL UR Fusion Zamasu (Mutated)](https://dbz-dokkanbattle.fandom.com/wiki/True_Power_of_a_God_Zamasu#Fusion%20Zamasu%20(Mutated)) - 4 links shared\n[TEQ UR Fusion Zamasu](https://dbz-dokkanbattle.fandom.com/wiki/Wrath_of_the_Absolute_God_Fusion_Zamasu) - 4 links shared";
        var deets = "► 12 Ki Multiplier is 140%; 24 Ki Multiplier is 200%\n ­ ­ ­ ­ ­▫ Full [12-24 Ki Multipliers](https://dbz-dokkanbattle.fandom.com/wiki/Ki_Multipliers) table\n► SA Lv.20 raises [SA Multiplier](https://dbz-dokkanbattle.fandom.com/wiki/Super_Attack_Multipliers) by an additional 30%\n► SA Level can go up to 25, but only through Extreme Z-Awakening with special medals from the **[Extreme Z-Area](https://dbz-dokkanbattle.fandom.com/wiki/Extreme_Z-Area:_Zero_Mortals_Plan)** event\n► His additional ATK & DEF +20% per final blow is calculated separately, for a total boost of ATK & DEF +152.81% after defeating three enemies";
        var footnotes = "[1]: Lowers enemy's DEF by 40% for 3 turns\n[2]: Raises DEF by 30% for 1 turn\n[3]: 25% chance for additional attack to become a Super Attack";

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
                        .setFooter("[1]: Lowers enemy's DEF by 40% for 3 turns\n[2]: Raises DEF by 30% for 1 turn")
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
                        .setFooter("[3]: 25% chance for additional attack to become a Super Attack")
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