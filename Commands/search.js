const Discord = require('discord.js')

module.exports = {
    name: 'search',
    description: 'A search function for units',
    execute(message, args) {
        var pfp = message.author.displayAvatarURL({format: "png", dynamic: "true"})
        var charSearch = args[0]
        switch (charSearch)
        {
            default:
                message.channel.send(`${message.author}` + " please specify what you would like to search up or use \`d!help\` for more information.\nEx 1. \`d!search goku\` will show you every Goku character in the bot's database.\nEx 2. \`d!search ssjgoku\` will show all characters that have \`ssjgoku\` in their command.")
                break;

            case "gohan":
                const gohan = new Discord.MessageEmbed()
                    .setColor(0)
                    .setAuthor(message.author.username, pfp)
                    .setTitle("Gohan Commands")
                    .setThumbnail("https://media.discordapp.net/attachments/712036120191434793/714336855792812052/Gohan_forms.jpg?width=911&height=613")
                    .addFields(
                        {name: "Super Saiyan Gohan (Youth)", value: "**ssjgohan1**: AGL LR Super Saiyan Gohan (Youth)\n" +
                                                                    "**ssjgohan2**: PHY UR Super Saiyan Gohan (Teen)"},
                        {name: "Super Saiyan 2 Gohan (Youth)", value: "**fskgohan1z**: AGL UR Father-Son Kamehameha Gohan with EZA\n" +
                                                                      "**ssj2gohan1**: INT LR Super Saiyan 2 Gohan (Youth)"},
                        {name: "Super Saiyan Gohan (Teen)", value: "**fkgohan1z**: AGL UR Family Kamehameha Gohan with EZA"},
                        {name: "Ultimate Gohan", value: "**ugohan3**: INT UR Ultimate Gohan without EZA\n" +
                                                        "**ugohan3z**: INT UR Ultimate Gohan with EZA\n" +
                                                        "**ugohan2**: STR UR Ultimate Gohan\n" +
                                                        "**ugohan1z**: PHY UR Ultimate Gohan with EZA"}
                    )
                    .setTimestamp()
                message.channel.send(gohan)
                break;

            case "goku":
                const goku = new Discord.MessageEmbed()
                    .setColor(0)
                    .setAuthor(message.author.username, pfp)
                    .setTitle("Goku Commands")
                    .setThumbnail("https://media.discordapp.net/attachments/712036120191434793/714337255430553750/wp3731088.jpg?width=816&height=612")
                    .addFields(
                        {name: "Goku (Youth)", value: "**kidgoku4**: INT UR Goku (Youth)\n" +
                                                      "**kidgoku3**: STR UR Goku (Youth)"},
                        {name: "Goku (Youth) (Giant Ape)", value: "**kidgoku2**: AGL UR Goku (Youth) (Giant Ape)\n" +
                                                                  "**kidgoku1**: PHY UR Goku (Youth) (Giant Ape)" },
                        {name: "Goku", value: "**goku6**: INT LR Super Battle Road Goku\n\n" +
                                              "**goku1**: STR UR Spirit Bomb Goku\n\n" +
                                              "**goku2**: STR LR Spirit Bomb Goku\n\n" +
                                              "**goku7**: STR UR Namek Goku\n\n" +
                                              "**goku3**: PHY UR Goku from 3rd anniversary\n\n" +
                                              "**goku4**: PHY UR Goku from *The Tree of Might*\n\n" +
                                              "**goku5**: PHY UR Feet Kamehameha Goku"},
                        {name: "Goku (Dokkan Butoden)", value: "**dbgoku1**: PHY UR Goku (Dokkan Butoden)"},
                        {name: "Goku (Kaioken)", value: "**kkgoku3**: AGL UR Goku (Kaioken)\n" +
                                                        "**kkgoku4**: TEQ UR Goku (Kaioken)\n" +
                                                        "**kkgoku1**: STR UR Goku (Kaioken) from *Lord Slug*\n" +
                                                        "**kkgoku2**: PHY UR Goku (Kaioken)\n" +
                                                        "**kkgoku5**: PHY UR Goku (Kaioken) from Namek"},
                        {name: "Super Saiyan Goku", value: "**sbagoku1**: AGL LR Spirit Bomb Absorbed Goku\n" +
                                                           "**ssjgoku6z**: AGL UR Super Saiyan Goku with EZA\n" +
                                                           "**ssjgoku3**: TEQ LR Prime Battle Super Saiyan Goku\n" +
                                                           "**ssjgoku7**: TEQ UR Super Saiyan Goku\n" +
                                                           "**ssjgoku2**: INT UR Super Saiyan Goku from *Battle of Gods*\n" +
                                                           "**ssjgoku8**: INT UR Super Saiyan Goku\n" +
                                                           "**ssjgoku4**: STR UR Super Saiyan Goku\n" +
                                                           "**fkgoku1z**: STR UR Family Kamehameha Goku with EZA\n" +
                                                           "**ssjgoku5**: STR UR Super Saiyan Goku\n" +
                                                           "**ssjgoku1z**: PHY UR Super Saiyan Goku from *The Return of Cooler* with EZA"},
                        {name: "Super Saiyan Goku (Angel) (Super Kaioken)", value: "**ssjkkgoku1**: PHY UR Super Saiyan Goku (Angel) (Super Kaioken)"},
                        {name: "Super Saiyan 2 Goku (Angel)", value: "**ssj2goku1z**: AGL UR Super Saiyan 2 Goku (Angel) with EZA"},
                        {name: "Super Saiyan 3 Goku", value: "**ssj3goku3**: AGL UR Super Saiyan 3 Goku without EZA\n" +
                                                             "**ssj3goku3z**: AGL UR Super Saiyan 3 Goku with EZA\n" +
                                                             "**ssj3goku1z**: STR UR Super Saiyan 3 Goku with EZA\n" +
                                                             "**ssj3goku2**: TEQ LR Super Saiyan 3 Goku\n"},
                        {name: "Super Saiyan God Goku", value: "**ssggoku2**: TEQ UR Super Saiyan God Goku\n" +
                                                               "**ssggoku1**: INT LR Super Saiyan God Goku"},
                        {name: "Super Saiyan God SS Goku", value: "**ssbgoku3z**: AGL UR Super Saiyan God SS Goku from the Broly movie with EZA\n" +
                                                                  "**ssbgoku2**: AGL UR Universe 6 Tournament Super Saiyan God SS Goku without EZA\n" +
                                                                  "**ssbgoku2z**: AGL UR Universe 6 Tournament Super Saiyan God SS Goku with EZA\n" +
                                                                  "**ssbgoku4**: AGL SSR Super Saiyan God SS Goku from 5th anniversary\n" +
                                                                  "**ssbgoku1**: PHY UR Resurrection 'F' Super Saiyan God SS Goku"},
                        {name: "Goku (Ultra Instinct -Sign-)", value: "**uigoku2**: INT UR Goku (Ultra nstinct -Sign-)\n" +
                                                                      "**uigoku1**: STR LR Goku (Ultra Instinct -Sign-)"},
                        {name: "Goku (Ultra Instinct)", value: "**muigoku1**: INT UR Goku (Ultra Instinct)"},
                        {name: "Super Saiyan 4 Goku", value: "**ssj4goku1**: AGL LR Super Saiyan 4 Goku"},
                        {name: "Super Saiyan Goku & Super Saiyan Vegeta", value: "**gokveg2**: INT LR Super Saiyan Goku & Super Saiyan Vegeta"},
                        {name: "Super Saiyan Goku (Angel) & Super Saiyan Vegeta (Angel)", value: "**gokveg1**: PHY LR Super Saiyan Goku (Angel) & Super Saiyan Vegeta (Angel)"},
                        {name: "Goku & Frieza (Final Form) (Angel)", value: "**gofrieza1**: TEQ LR Goku & Frieza (Final Form) (Angel)"},
                        {name: "Goku (GT) & Pan (GT) & Trunks (GT)", value: "**gotrio1**: INT LR Goku (GT) & Pan (GT) & Trunks (GT)"}
                    )
                    .setTimestamp()
                message.channel.send(goku)
                break;
        }
        if (args[0] === 'goten')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Goten Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714337816452137040/GotenNV.png?width=843&height=612"
                },
                fields: [
                    {
                        name: "Super Saiyan Goten",
                        value: "**fkgoten1z**: STR UR Family Kamehameha Goten with EZA"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'black')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Goku Black/Zamasu Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714338154416570408/goku_black.png?width=408&height=612"
                },
                fields: [
                    {
                        name: "Zamasu",
                        value: "**zamasu1**: AGL UR Zamasu before transformation"
                    },
                    {
                        name: "Zamasu (Goku)",
                        value: "**zamasug1**: STR LR Zamasu (Goku) without EZA"
                    },
                    {
                        name: "Goku Black",
                        value:  "**gb2**: INT UR Goku Black\n" +
                                "**gb1**: PHY UR Goku Black without EZA\n" + 
                                "**gb1z**: PHY UR Goku Black with EZA"
                    },
                    {
                        name: "Goku Black (Super Saiyan Rosé)",
                        value:  "**rose1z**: AGL UR Goku Black (Super Saiyan Rosé) with EZA\n" +
                                "**rose2**: STR UR Goku Black (Super Saiyan Rosé)"
                    },
                    {
                        name: "Fusion Zamasu",
                        value:  "**fzamasu1**: AGL UR Fusion Zamasu after transformation\n" +
                                "**fzamasu2**: AGL UR Fusion Zamasu (Mutated) after active skill"
                    },
                    {
                        name: "Goku Black (Super Saiyan Rosé) & Zamasu",
                        value: "**rosemasu1**: TEQ LR Goku Black (Super Saiyan Rosé) & Zamasu"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'cell')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Cell Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714338442418323466/cell_forms.jpg?width=429&height=612"
                },
                fields: [
                    {
                        name: "Cell (1st Form)",
                        value: "**impcell1**: TEQ LR Cell (1st Form)"
                    },
                    {
                        name: "Perfect Cell",
                        value:  "**pcell1**: TEQ UR Perfect Cell without EZA\n" + 
                                "**pcell1z**: TEQ UR Perfect Cell with EZA\n" +
                                "**pcell2z**: INT UR Perfect Cell with EZA\n" +
                                "**pcell3z**: STR UR Perfect Cell with EZA\n" +
                                "**pcell4**: INT LR Cell (Perfect Form) before transformation\n" +
                                "**pcell5**: INT LR Perfect Cell after transformation"
                    },
                    {
                        name: "Cell (Perfect Form) & Cell Jr.",
                        value: "**pcell6**: PHY LR Cell (Perfect Form) & Cell Jr."
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'bejito' || args[0] === 'vegito')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Vegito Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714339669621342240/vegito.png?width=438&height=613"
                },
                fields: [
                    {
                        name: "Vegito",
                        value: "**vegito1**: TEQ LR Vegito"
                    },
                    {
                        name: "Super Vegito",
                        value:  "**sv1**: AGL UR Super Vegito without EZA\n" + 
                                "**sv1z**: AGL UR Super Vegito with EZA\n" +
                                "**sv3**: INT LR Super Vegito\n" +
                                "**sv2**: PHY UR Super Vegito"
                    },
                    {
                        name: "Super Saiyan God SS Vegito",
                        value:  "**vb2**: TEQ UR Super Saiyan God SS Vegito\n" +
                                "**vb3**: TEQ LR Super Saiyan God SS Vegito\n" +
                                "**vb1**: PHY UR Super Saiyan God SS Vegito without EZA\n" + 
                                "**vb1z**: PHY UR Super Saiyan God SS Vegito with EZA\n" 
                                
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'buu')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Buu Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714339616618184744/majin_buu.jpg"
                },
                fields: [
                    {
                        name: "Majin Buu (Ultimate Gohan)",
                        value:  "**buuhan1**: INT UR Majin Buu (Ultimate Gohan) without EZA\n" +
                                "**buuhan1z**: INT UR Majin Buu (Ultimate Gohan) with EZA"
                    },
                    {
                        name: "Buu (Kid)",
                        value:  "**kbuu1**: PHY UR Buu (Kid) without EZA\n" +
                                "**kbuu1z**: PHY UR Buu (Kid) with EZA"
                    },
                    {
                        name: "Mr. Buu",
                        value: "**mrbuu1**: TEQ UR Mr. Buu"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'vegeta')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Vegeta Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714339553145782273/vegeta_forms.jpg?width=351&height=612"
                },
                fields: [
                    {
                        name: "Vegeta",
                        value: "**nandv2**: AGL LR Vegeta after exchange"
                    },
                    {
                        name: "Super Saiyan Vegeta",
                        value: "**ssjvegeta1**: INT LR Prime Battle Super Saiyan Vegeta"
                    },
                    {
                        name: "Super Saiyan 2 Vegeta",
                        value: "**ssj2vegeta2**: TEQ UR Super Saiyan 2 Vegeta before transformation"
                    },
                    {
                        name: "Majin Vegeta",
                        value:  "**mvegeta2**: AGL LR Majin Vegeta\n" +
                                "**mvegeta1**: TEQ UR Majin Vegeta after transformation"
                    },
                    {
                        name: "Super Saiyan 3 Vegeta",
                        value:  "**ssj3vegeta2**: STR UR Super Saiyan 3 Vegeta without EZA\n" + 
                                "**ssj3vegeta2z**: STR UR Super Saiyan 3 Vegeta with EZA\n" +
                                "**ssj3vegeta1**: PHY UR Super Saiyan 3 Vegeta (Xeno)"
                    },
                    {
                        name: "Super Saiyan God Vegeta",
                        value:  "**ssgvegeta1**: STR UR Super Saiyan God Vegeta from the Broly movie"
                    },
                    {
                        name: "Super Saiyan God SS Vegeta",
                        value:  "**ssbvegeta2z**: TEQ UR Super Saiyan God SS Vegeta from the Broly movie with EZA\n" +
                                "**ssbvegeta1**: TEQ UR Resurrection 'F' Super Saiyan God SS Vegeta"
                    },
                    {
                        name: "Super Saiyan 4 Vegeta",
                        value: "**ssj4vegeta1**: STR LR Super Saiyan 4 Vegeta"
                    },
                    {
                        name: "Super Saiyan Goku & Super Saiyan Vegeta",
                        value: "**gokveg2**: INT LR Super Saiyan Goku & Super Saiyan Vegeta"
                    },
                    {
                        name: "Super Saiyan Goku (Angel) & Super Saiyan Vegeta (Angel)",
                        value: "**gokveg1**: PHY LR Super Saiyan Goku (Angel) & Super Saiyan Vegeta (Angel)"
                    },
                    {
                        name: "Super Saiyan 2 Vegeta & Bulma",
                        value: "**ssj2vegeta1**: STR UR Super Saiyan 2 Vegeta & Bulma"
                    },
                    {
                        name: "Nappa/Vegeta",
                        value: "**nandv1**: AGL LR Nappa/Vegeta before exchange"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'cooler')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Cooler Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714339485088874506/cooler.png"
                },
                fields: [
                    {
                        name: "Cooler",
                        value:  "**cooler2z**: AGL UR Cooler with EZA\n" +
                                "**cooler1**: STR UR Cooler before transformation" 
                    },
                    {
                        name: "Cooler (Final Form)",
                        value:  "**ffcooler1**: TEQ UR Cooler (Final Form)\n" +
                                "**ffcooler2**: STR UR Cooler (Final Form)"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'gogeta')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Gogeta Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714341204996915200/gogeta.jpg?width=370&height=573"
                },
                fields: [
                    {
                        name: "Super Gogeta",
                        value:  "**sgogeta1**: STR UR Super Gogeta without EZA\n" + 
                                "**sgogeta1z**: STR UR Super Gogeta with EZA\n" +
                                "**sgogeta2**: PHY LR Super Gogeta"
                    },
                    {
                        name: "Gogeta",
                        value: "**gogeta1**: STR LR Gogeta"
                    },  
                    {
                        name: "Super Saiyan Gogeta",
                        value: "**ssjgogeta1**: AGL UR Super Saiyan Gogeta"
                    },
                    {
                        name: "Super Saiyan God SS Gogeta",
                        value:  "**ssbgogeta1**: AGL UR Super Saiyan God SS Gogeta\n" +
                                "**ssbgogeta2**: STR LR Super Saiyan God SS Gogeta"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'sgogeta')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/718540667726463068/Gogeta_Infobox.png?width=1089&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**sgogeta1**: STR UR Super Gogeta without EZA\n" + 
                                "**sgogeta1z**: STR UR Super Gogeta with EZA\n" +
                                "**sgogeta2**: PHY LR Super Gogeta"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'tao')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Mercenary Tao Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/730158067051921431/latest.png?width=411&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**tao1**: TEQ UR Cyborg Tao"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'impcell')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/721797860948967545/latest.png?width=310&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**impcell1**: TEQ LR Cell (1st Form)"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'ginyu')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Ginyu Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/724336767486001263/latest.png?width=426&height=612"
                },
                fields: [
                    {
                        name: "Captain Ginyu",
                        value:  "**ginyu1**: INT UR Captain Ginyu"
                    },
                    {
                        name: "Captain Ginyu (Ginyu Force)",
                        value:  "**gforce1**: PHY LR Captain Ginyu (Ginyu Force)"
                    },
                    {
                        name: "Ginyu (Goku) (Ginyu Force)",
                        value: "**gforce2**: TEQ LR Ginyu (Goku) (Ginyu Force)"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'burter')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Burter Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/724695397498486885/latest.png"
                },
                fields: [
                    {
                        name: "Burter",
                        value:  "**burter1**: AGL UR Burter"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'butoden')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/728814529202487367/7ebr1577wgp21.png?width=375&height=612"
                },
                fields: [
                    {
                        name: "Goku (Dokkan Butoden)",
                        value:  "**dbgoku1**: PHY UR Goku (Dokkan Butoden)"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'guldo')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Guldo Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/725050140171305042/latest.png?width=441&height=613"
                },
                fields: [
                    {
                        name: "Guldo",
                        value:  "**guldo1**: TEQ UR Guldo"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'recoome')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Recoome Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/725445580788334653/latest.png"
                },
                fields: [
                    {
                        name: "Recoome",
                        value:  "**recoome1**: PHY UR Recoome"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'jeice')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Jeice Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/725446418957074522/latest.png?width=454&height=613"
                },
                fields: [
                    {
                        name: "Jeice",
                        value:  "**jeice1**: STR UR Jeice"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'ssj2goku' || args[0] === 'ss2goku')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/721077990414352505/340.png"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssj2goku1z**: AGL UR Super Saiyan 2 Goku (Angel) with EZA"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'ssjgogeta' || args[0] === 'ssgogeta')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/718541024934232580/maxresdefault.png?width=1089&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssjgogeta1**: AGL UR Super Saiyan Gogeta"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'zamasu')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/721078571447091230/latest.png?width=544&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**zamasu1**: AGL UR Zamasu before transformation\n" +
                                "**rosemasu1**: TEQ LR Goku Black (Super Saiyan Rosé) & Zamasu"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'fzamasu')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/721535975595180063/latest.png?width=509&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**fzamasu1**: AGL UR Fusion Zamasu after transformation\n" +
                                "**fzamasu2**: AGL UR Fusion Zamasu (Mutated) after active skill"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'ssbgogeta' || args[0] === 'ssjbgogeta')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/718688605119447070/0bcbfc649bab5609f0cb08a44b060d87.png?width=368&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssbgogeta1**: AGL UR Super Saiyan God SS Gogeta\n" +
                                "**ssbgogeta2**: STR LR Super Saiyan God SS Gogeta"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'ssgvegeta' || args[0] === 'ssjgvegeta')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/722587753874718750/super-saiyan-god-vegeta-1219159-1280x0.png?width=1169&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssgvegeta1**: STR UR Super Saiyan God Vegeta from the Broly movie"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'ssggoku' || args[0] === 'ssjggoku')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/721077912832442378/latest.png?width=531&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssggoku2**: TEQ UR Super Saiyan God Goku\n" +
                                "**ssggoku1**: INT LR Super Saiyan God Goku"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'gs31')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/718689169597005844/d29531291d63bb016506a6b11e1ff222.png?width=514&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**gs311**: TEQ UR Great Saiyaman 3"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'ssjgohan' || args[0] === 'ssgohan')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/719051656657895514/card_1017610_character.png"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssjgohan1**: AGL LR Super Saiyan Gohan (Youth)\n" +
                                "**ssjgohan2**: PHY UR Super Saiyan Gohan (Teen)"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'gokveg')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/719052039534936064/71r1avQ-YcL.png"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**gokveg2**: INT LR Super Saiyan Goku & Super Saiyan Vegeta\n" +
                                "**gokveg1**: PHY LR Super Saiyan Goku (Angel) & Super Saiyan Vegeta (Angel)"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'beerus')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Beerus Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/719778823331381248/220px-Beerus_Battle_of_Gods.png"
                },
                fields: [
                    {
                        name: "Beerus",
                        value:  "**beerus1**: TEQ UR Beerus without EZA" +
                                "\n**beerus1z**: TEQ UR Beerus with EZA\n" +
                                "**beerus2**: PHY UR Beerus"
                    },
                    {
                        name: "Beerus & Whis",
                        value: "**bandw1**: STR LR Beerus & Whis"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'gotenks')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Gotenks Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714341510027673620/gotenks.png?width=1020&height=573"
                },
                fields: [
                    {
                        name: "Super Saiyan 3 Gotenks",
                        value:  "**ssj3gotenks1**: TEQ UR Super Saiyan 3 Gotenks without EZA\n" +
                                "**ssj3gotenks1z**: TEQ UR Super Saiyan 3 Gotenks with EZA"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'frieza' || args[0] === 'freeza')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Frieza Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714707128547409970/frieza_all_forms.jpg?width=653&height=612"
                },
                fields: [
                    {
                        name: "Frieza (1st Form)",
                        value: "**1frieza1**: STR LR Prime Battle Frieza (1st Form)"
                    },  
                    {
                        name: "Frieza (Final Form)",
                        value:  "**fffrieza2z**: INT UR Frieza (Final Form) with EZA\n" +
                                "**fffrieza1**: STR UR Frieza (Final Form)"
                    },
                    {
                        name: "Frieza (Full Power)",
                        value:  "**fpfrieza1**: PHY UR Frieza (Full Power) without EZA\n" +
                                "**fpfrieza1z**: PHY UR Frieza (Full Power) with EZA"
                    },  
                    {
                        name: "Golden Frieza",
                        value:  "**gfrieza1**: TEQ UR Golden Frieza without EZA\n" +
                                "**gfrieza1z**: TEQ UR Golden Frieza with EZA\n" +
                                "**gfrieza2**: AGL UR Golden Frieza without EZA\n" +
                                "**gfrieza2z**: AGL UR Golden Frieza with EZA\n" +
                                "**gfrieza3**: INT UR Golden Frieza without EZA\n" +
                                "**gfrieza3z**: INT UR Golden Frieza with EZA"
                    },
                    {
                        name: "Golden Frieza (Angel)",
                        value: "**agf1**: INT UR Golden Frieza (Angel)"
                    },
                    {
                        name: "Goku & Frieza (Final Form) (Angel)",
                        value: "**gofrieza1**: TEQ LR Goku & Frieza (Final Form) (Angel)"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'broly')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Broly Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714970458512031744/double_broly.jpg"
                },
                fields: [
                    {
                        name: "Super Saiyan Broly",
                        value:  "**ssjbroly1**: TEQ LR Super Saiyan Broly before transformation"
                    },
                    {
                        name: "Legendary Super Saiyan Broly",
                        value:  "**lssjbroly1**: TEQ LR Legendary Super Saiyan Broly after transformation\n" +
                                "**lssjbroly4**: STR UR Legendary Super Saiyan Broly without EZA\n" +
                                "**lssjbroly4z**: STR UR Legendary Super Saiyan Broly with EZA\n" +
                                "**lssjbroly3**: STR LR Legendary Super Saiyan Broly\n" +
                                "**lssjbroly2z**: PHY UR Legendary Super Saiyan Broly Z"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'trunks')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Trunks Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/717227548542631974/latest.png?width=474&height=612"
                },
                fields: [
                    {
                        name: "Trunks (Teen)",
                        value:  "**trunks1**: PHY UR Trunks (Teen)\n" +
                                "**trunks2**: TEQ UR Trunks (Teen) (Future) before transformation"
                    },
                    {
                        name: "Super Saiyan Trunks (Teen)",
                        value:  "**ssjtrunks2**: PHY LR Super Saiyan Trunks (Teen)"
                    },
                    {
                        name: "Super Saiyan Trunks (Future)",
                        value:  "**ssjtrunks1**: INT UR Super Saiyan Trunks (Future)\n" +
                                "**ssjtrunks1z**: INT UR Super Saiyan Trunks (Future) Z\n" +
                                "**ssjtrunks3**: TEQ UR Super Saiyan Trunks (Future) after transformation\n" +
                                "**ssjtrunks4**: TEQ UR Super Saiyan Trunks (Future) (Powered-Up) after active skill"
                    },
                    {
                        name: "Great Saiyaman 3",
                        value: "**gs31**: TEQ UR Great Saiyaman 3"
                    },
                    {
                        name: "Trunks (Teen) (Future) & Mai (Future)",
                        value: "**tandm1**: STR LR Trunks (Teen) (Future) & Mai (Future)"
                    },
                    {
                        name: "Super Saiyan Trunks (Future) & Mai (Future)",
                        value: "**tandm2**: AGL UR Super Saiyan Trunks (Future) & Mai (Future)"
                    },
                    {
                        name: "Goku (GT) & Pan (GT) & Trunks (GT)",
                        value: "**gotrio1**: INT LR Goku (GT) & Pan (GT) & Trunks (GT)"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'fffrieza')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/718689813443903489/dd4p5yh-5f8f13e0-8846-48c0-94dc-932de3328746.png?width=613&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**fffrieza2z**: INT UR Frieza (Final Form) with EZA\n" +
                                "**fffrieza1**: STR UR Frieza (Final Form)"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'kale')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Kale Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/717440941253853294/latest.png?width=263&height=612"
                },
                fields: [
                    {
                        name: "Kale",
                        value: "**kale1**: STR UR Kale"
                    },
                    {
                        name: "Kale (Berserk)",
                        value: "**bkale1z**: PHY UR Kale (Berserk) with EZA"
                    },
                    {
                        name: "Super Saiyan 2 Caulifla & Super Saiyan 2 Kale",
                        value:  "**kandc1**: AGL LR Super Saiyan 2 Caulifla & Super Saiyan 2 Kale"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'caulifla')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Caulifla Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/717441050502758420/latest.png?width=271&height=611"
                },
                fields: [
                    {
                        name: "Caulifla",
                        value: "**caulifla1**: TEQ UR Caulifla"
                    },
                    {
                        name: "Super Saiyan 2 Caulifla & Super Saiyan 2 Kale",
                        value:  "**kandc1**: AGL LR Super Saiyan 2 Caulifla & Super Saiyan 2 Kale"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'androids')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714334040500600922/androids.jpg"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**androids1**: PHY LR Androids before active skill\n**androids2**: PHY LR Androids after active skill"
                    }
                ]
            }});
        }
        else if (args[0] === 'bergamo')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714335504770007060/bergamo.png?width=476&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**bergamo1**: PHY UR Bergamo (Giant Form)"
                    }
                ]
            }});
        }
        else if (args[0] === 'shenron')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Shadow Dragon Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/726552249588776990/latest.png?width=384&height=613"
                },
                fields: [
                    {
                        name: "Omega Shenron",
                        value: "**omega1**: PHY UR Omega Shenron"
                    }
                ]
            }});
        }
        else if (args[0] === 'kkgoku')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/726168817188995153/latest.png?width=1093&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**kkgoku3**: AGL UR Goku (Kaioken)\n" +
                                "**kkgoku4**: TEQ UR Goku (Kaioken)\n" +
                                "**kkgoku1**: STR UR Goku (Kaioken) from *Lord Slug*\n" +
                                "**kkgoku2**: PHY UR Goku (Kaioken)\n" +
                                "**kkgoku5**: PHY UR Goku (Kaioken) from Namek"
                    }
                ]
            }});
        }
        else if (args[0] === 'agf')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/726553145726992394/9461fdb0f12fb7020ad55b03364a7efd5f11e066_hq.png"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**agf1**: INT UR Golden Frieza (Angel)"
                    }
                ]
            }});
        }
        else if (args[0] === 'chiaoman')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/729398653890068592/450.png"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**chiaoman1**: PHY UR Chiaoman"
                    }
                ]
            }});
        }
        else if (args[0] === '1frieza')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/726168666353434726/2Q.png"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**1frieza1**: STR LR Prime Battle Frieza (1st Form)"
                    }
                ]
            }});
        }
        else if (args[0] === 'celljr')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714335968437469265/celljr.jpg?width=1093&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**celljr1**: AGL UR Cell Jr."
                    }
                ]
            }});
        }
        else if (args[0] === 'mai')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Mai Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/723043984322199572/f19fc44e00ef5c7b6541bea49a86a1ba.png?width=641&height=612"
                },
                fields: [
                    {
                        name: "Mai (Future)",
                        value:  "**mai1**: AGL UR Mai (Future)\n" +
                                "**mai2**: INT UR Mai (Future)"
                    },
                    {
                        name: "Trunks (Teen) (Future) & Mai (Future)",
                        value: "**tandm1**: STR LR Trunks (Teen) (Future) & Mai (Future)"
                    },
                    {
                        name: "Super Saiyan Trunks (Future) & Mai (Future)",
                        value: "**tandm2**: AGL UR Super Saiyan Trunks (Future) & Mai (Future)"
                    },
                ]
            }});
        }
        else if (args[0] === 'whis')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Whis Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/723045146979074098/latest.png"
                },
                fields: [
                    {
                        name: "Whis",
                        value: "**whis1**: STR Whis"
                    },
                    {
                        name: "Beerus & Whis",
                        value: "**bandw1**: STR LR Beerus & Whis"
                    }
                ]
            }});
        }
        else if (args[0] === 'nappa')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Nappa Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/725049568911294524/latest.png?width=441&height=613"
                },
                fields: [
                    {
                        name: "Nappa/Vegeta",
                        value: "**nandv1**: AGL LR Nappa/Vegeta before exchange"
                    }
                ]
            }});
        }
        else if (args[0] === 'turles')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Turles Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/723602140588802159/latest.png?width=561&height=613"
                },
                fields: [
                    {
                        name: "Turles",
                        value: "**turles1**: AGL UR Turles before transformation"
                    },
                    {
                        name: "Turles (Boost)",
                        value: "**turles2**: AGL UR Turles (Boost) after transformation"
                    },
                    {
                        name: "Turles (Giant Ape)",
                        value: "**turles3**: AGL UR Turles (Giant Ape)"
                    }
                ]
            }});
        }
        else if (args[0] === 'tandm')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/723044430273052692/KnGgC.png"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**tandm1**: STR LR Trunks (Teen) (Future) & Mai (Future)\n" +
                                "**tandm2**: AGL UR Super Saiyan Trunks (Future) & Mai (Future)"
                    }
                ]
            }});
        }
        else if (args[0] === 'kidgoku')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/726915421516595360/085875599629a68074f8a885bcdad408.png?width=460&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**kidgoku2**: AGL UR Goku (Youth) (Giant Ape)\n" +
                                "**kidgoku4**: INT UR Goku (Youth)\n" +
                                "**kidgoku3**: STR UR Goku (Youth)\n" +
                                "**kidgoku1**: PHY UR Goku (Youth) (Giant Ape)"
                    }
                ]
            }});
        }
        else if (args[0] === 'ssjtrunks' || args[0] === 'sstrunks')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/720864616766242857/4b0sxahqca3z.png"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssjtrunks1**: INT UR Super Saiyan Trunks (Future)\n" +
                                "**ssjtrunks1z**: INT UR Super Saiyan Trunks (Future) Z\n" +
                                "**ssjtrunks2**: PHY LR Super Saiyan Trunks (Teen)\n" +
                                "**ssjtrunks3**: TEQ UR Super Saiyan Trunks (Future) after transformation\n" +
                                "**ssjtrunks4**: TEQ UR Super Saiyan Trunks (Future) (Powered-Up) after active skill"
                    }
                ]
            }});
        }
        else if (args[0] === 'fkgohan')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714342001268752484/fam_kamehameha.jpg"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**fkgohan1z**: AGL UR Family Kamehameha Gohan with EZA"
                    }
                ]
            }});
        }
        else if (args[0] === 'fkgoku')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714342001268752484/fam_kamehameha.jpg"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**fkgoku1z**: STR UR Family Kamehameha Goku with EZA"
                    }
                ]
            }});
        }
        else if (args[0] === 'fkgoten')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714342001268752484/fam_kamehameha.jpg"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**fkgoten1z**: STR UR Family Kamehameha Goten with EZA"
                    }
                ]
            }});
        }
        else if (args[0] === 'fskgohan')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714342760844623872/fsk.jpg"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**fskgohan1z**: STR UR Father-Son Kamehameha Gohan with EZA"
                    }
                ]
            }});
        }
        else if (args[0] === 'gb')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714343182879555584/goku_black2.jpg"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**gb2**: INT UR Goku Black\n" + 
                                "**gb1**: PHY UR Goku Black without EZA\n" +
                                "**gb1z**: PHY UR Goku Black with EZA\n" +
                                "**rosemasu1**: TEQ LR Goku Black (Super Saiyan Rosé) & Zamasu"
                    }
                ]
            }});
        }
        else if (args[0] === 'pcell')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714343963821342740/perfect_cell.png?width=1089&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**pcell1**: TEQ UR Perfect Cell without EZA\n" +
                                "**pcell1z**: TEQ UR Perfect Cell with EZA\n" + 
                                "**pcell2z**: INT UR Perfect Cell with EZA\n" +
                                "**pcell3z**: STR UR Perfect Cell with EZA\n" +
                                "**pcell4**: INT LR Cell (Perfect Form) before transformation\n" +
                                "**pcell5**: INT LR Perfect Cell after transformation"
                    }
                ]
            }});
        }
        else if (args[0] === 'sbagoku')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714344543272697877/spirit_bomb_absorbed.png?width=1085&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**sbagoku1**: AGL LR Spirit Bomb Absorbed Goku"
                    }
                ]
            }});
        }
        else if (args[0] === 'gotrio')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/722221034652172350/dcy0xrm-d13631ec-5e5b-4a14-a3e5-b16c8ffc2586.png"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**gotrio1**: INT LR Goku (GT) & Pan (GT) & Trunks (GT)"
                    }
                ]
            }});
        }
        else if (args[0] === 'bkale')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/721798405910691850/latest.png?width=1089&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**bkale1z**: PHY UR Kale (Berserk) with EZA"
                    }
                ]
            }});
        }
        else if (args[0] === 'ssbgoku' || args[0] === 'ssjbgoku')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714344979996213319/ssb_goku.png?width=345&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssbgoku3z**: AGL UR Super Saiyan God SS Goku from the Broly movie with EZA\n" +
                                "**ssbgoku2**: AGL UR Universe 6 Tournament Super Saiyan God SS Goku without EZA\n" +
                                "**ssbgoku2z**: AGL UR Universe 6 Tournament Super Saiyan God SS Goku with EZA\n" +
                                "**ssbgoku4**: AGL SSR Super Saiyan God SS Goku from 5th anniversary\n" +
                                "**ssbgoku1**: PHY UR Resurrection 'F' Super Saiyan God SS Goku"
                    }
                ]
            }});
        }
        else if (args[0] === 'ssbvegeta')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714345501151068160/ssb_vegeta.jpg?width=1089&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssbvegeta2z**: TEQ UR Super Saiyan God SS Vegeta from the Broly movie with EZA\n" +
                                "**ssbvegeta1**: TEQ UR Resurrection 'F' Super Saiyan God SS Vegeta"
                    }
                ]
            }});
        }
        else if (args[0] === 'baby')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Baby Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/722870530956591114/9k.png"
                },
                fields: [
                    {
                        name: "Super Baby 1",
                        value: "**baby2**: AGL UR Super Baby 1"
                    },
                    {
                        name: "Super Baby 2 (Giant Ape)",
                        value:  "**baby1**: AGL LR Super Baby 2 (Giant Form)"
                    }
                ]
            }});
        }
        else if (args[0] === 'ssj3goku' || args[0] === 'ss3goku')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714345785898303498/ssj3_goku.jpg?width=448&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssj3goku3**: AGL UR Super Saiyan 3 Goku without EZA\n" +
                                "**ssj3goku3z**: AGL UR Super Saiyan 3 Goku with EZA\n" +
                                "**ssj3goku1z**: STR UR Super Saiyan 3 Goku with EZA\n" +
                                "**ssj3goku2**: TEQ LR Super Saiyan 3 Goku"
                    }
                ]
            }});
        }
        else if (args[0] === 'ssjgoku' || args[0] === 'ssgoku')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714346295170695288/ssj_goku.png?width=371&height=573"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**sbagoku1**: AGL LR Spirit Bomb Absorbed Goku\n" +
                                "**ssjgoku6z**: AGL UR Super Saiyan Goku with EZA\n" +
                                "**ssjgoku3**: TEQ LR Prime Battle Super Saiyan Goku\n" +
                                "**ssjgoku7**: TEQ UR Super Saiyan Goku\n" +
                                "**ssjgoku2**: INT UR Super Saiyan Goku from *Battle of Gods*\n" +
                                "**ssjgoku8**: INT UR Super Saiyan Goku\n" +
                                "**ssjgoku4**: STR UR Super Saiyan Goku\n" +
                                "**fkgoku1z**: STR UR Family Kamehameha Goku with EZA\n" +
                                "**ssjgoku5**: STR UR Super Saiyan Goku\n" +
                                "**ssjgoku1z**: PHY UR Super Saiyan Goku from *The Return of Cooler* with EZA"
                    }
                ]
            }});
        }
        else if (args[0] === 'ssjvegeta' || args[0] === 'ssvegeta')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714346619516223498/ssj_vegeta.png?width=314&height=574"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**ssjvegeta1**: INT LR Prime Battle Super Saiyan Vegeta"
                    }
                ]
            }});
        }
        else if (args[0] === 'sv')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714346944914522193/super_vegito.jpg"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**sv1**: AGL UR Super Vegito without EZA\n" + 
                                "**sv1z**: AGL UR Super Vegito with EZA\n" +
                                "**sv3**: INT LR Super Vegito\n" +
                                "**sv2**: PHY UR Super Vegito"
                    }
                ]
            }});
        }
        else if (args[0] === 'ugohan')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714347138867265596/ultimate_gohan.jpg?width=1225&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ugohan3**: INT UR Ultimate Gohan without EZA\n" +
                                "**ugohan3z**: INT UR Ultimate Gohan with EZA\n" +
                                "**ugohan2**: STR UR Ultimate Gohan\n" +
                                "**ugohan1z**: PHY UR Ultimate Gohan with EZA"
                    }
                ]
            }});
        }
        else if (args[0] === 'uigoku' || args[0] === 'ui')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714347397270208552/ui_sign_goku.png?width=690&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**uigoku2**: INT UR Goku (Ultra nstinct -Sign-)\n" +
                                "**muigoku1**: INT UR Goku (Ultra Instinct)\n" +
                                "**uigoku1**: STR LR Goku (Ultra Instinct -Sign-)"
                    }
                ]
            }});
        }
        else if (args[0] === 'ssjkkgoku' || args[0] === 'sskkgoku')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/733889650212470894/450.png"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssjkkgoku1**: PHY UR Super Saiyan Goku (Angel) (Super Kaioken)"
                    }
                ]
            }});
        }
        else if (args[0] === 'ffcooler')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714347831728799744/final_form_cooler.png?width=445&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ffcooler1**: TEQ UR Cooler (Final Form)\n" +
                                "**ffcooler2**: STR UR Cooler (Final Form)"
                    }
                ]
            }});
        }
        else if (args[0] === 'vb')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714348227951853568/vegito_blue.jpg?width=1089&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**vb2**: TEQ UR Super Saiyan God SS Vegito\n" +
                                "**vb3**: TEQ LR Super Saiyan God SS Vegito\n" +
                                "**vb1**: PHY UR Super Saiyan God SS Vegito without EZA\n" + 
                                "**vb1z**: PHY UR Super Saiyan God SS Vegito with EZA\n" 
                    }
                ]
            }});
        }
        else if (args[0] === 'buuhan')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714348591816376353/super_buu.png?width=332&height=573"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**buuhan1**: INT UR Majin Buu (Ultimate Gohan) without EZA\n" +
                                "**buuhan1z**: INT UR Majin Buu (Ultimate Gohan) with EZA"
                    }
                ]
            }});
        }
        else if (args[0] === 'ssj3vegeta' || args[0] === 'ss3vegeta')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/717227848246755348/card_1003240_character.png"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssj3vegeta2**: STR UR Super Saiyan 3 Vegeta without EZA\n" + 
                                "**ssj3vegeta2z**: STR UR Super Saiyan 3 Vegeta with EZA\n" +
                                "**ssj3vegeta1**: PHY UR Super Saiyan 3 Vegeta (Xeno)"
                    }
                ]
            }});
        }
        else if (args[0] === 'ssj3gotenks' || args[0] === 'ss3gotenks')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/720508763769143386/super-saiyan-3-gotenks.png?width=1225&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssj3gotenks1**: TEQ UR Super Saiyan 3 Gotenks without EZA\n" +
                                "**ssj3gotenks1z**: TEQ UR Super Saiyan 3 Gotenks with EZA"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'kbuu')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/719969754483523604/340.png"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**kbuu1**: PHY UR Buu (Kid) without EZA\n" +
                                "**kbuu1z**: PHY UR Buu (Kid) with EZA"
                    }
                ]
            }});
        }
        else if (args[0] === 'krillin')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/719979787141120060/latest.png?width=461&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**krillin1**: PHY LR Krillin"
                    }
                ]
            }});
        }
        else if (args[0] === 'ssjgohan' || args[0] === 'ssgohan')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714348829104930886/ssj_gohan.png?width=399&height=573"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**fkgohan1z**: AGL UR Family Kamehameha Gohan with EZA"
                    }
                ]
            }});
        }
        else if (args[0] === 'ssj2gohan' || args[0] === 'ss2gohan')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714349107187155055/ssj2_gohan.png?width=343&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**fskgohan1z**: STR UR Father-Son Kamehameha Gohan with EZA\n" +
                                "**ssj2gohan1**: INT LR Super Saiyan 2 Gohan (Youth)"
                    }
                ]
            }});
        } 
        else if (args[0] === 'ssjgoten' || args[0] === 'ssgoten')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714349379443753010/ssj_goten.png?width=1089&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**fkgoten1z**: STR UR Family Kamehameha Goten with EZA"
                    }
                ]
            }});
        }
        else if (args[0] === 'gfrieza' || args[0] === 'gf')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714708539431714896/golden_frieza.png?width=398&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**gfrieza1**: TEQ UR Golden Frieza without EZA\n" +
                                "**gfrieza1z**: TEQ UR Golden Frieza with EZA\n" +
                                "**gfrieza2**: AGL UR Golden Frieza without EZA\n" +
                                "**gfrieza2z**: AGL UR Golden Frieza with EZA\n" +
                                "**gfrieza3**: INT UR Golden Frieza without EZA\n" +
                                "**gfrieza3z**: INT UR Golden Frieza with EZA"
                    }
                ]
            }});
        }
        else if (args[0] === 'ssjbroly' || args[0] === 'ssbroly')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714971162333151292/ssj_broly.jpg?width=613&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssjbroly1**: TEQ LR Super Saiyan Broly before transformation"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'lssjbroly' || args[0] === 'lssbroly')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/714971430135267348/lssj_broly.jpg?width=1089&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**lssjbroly1**: TEQ LR Legendary Super Saiyan Broly after transformation\n" +
                                "**lssjbroly4**: STR UR Legendary Super Saiyan Broly without EZA\n" +
                                "**lssjbroly4z**: STR UR Legendary Super Saiyan Broly with EZA\n" +
                                "**lssjbroly3**: STR LR Legendary Super Saiyan Broly\n" +
                                "**lssjbroly2z**: PHY UR Legendary Super Saiyan Broly Z"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'ssj4goku' || args[0] === 'ss4goku')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/715240150417932348/ssj4_goku.png?width=307&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**ssj4goku1**: AGL LR Super Saiyan 4 Goku"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'gofrieza')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/715384088026021929/goku_and_frieza.jpg?width=344&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value: "**gofrieza1**: TEQ LR Goku & Frieza (Final Form) (Angel)"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'kefla')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/715649490065031178/kefla.png?width=313&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**kefla1**: STR UR Kefla\n" +
                                "**kefla2**: STR UR Super Saiyan Kefla\n" +
                                "**kefla3**: STR UR Super Saiyan 2 Kefla"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'rose')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/716167525674778664/Super_Saiyan_Rose.png?width=851&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**rose1z**: AGL UR Goku Black (Super Saiyan Rosé) with EZA\n" +
                                "**rose2**: STR UR Goku Black (Super Saiyan Rosé)"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'ssj2vegeta' || args[0] === 'ss2vegeta')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/717228284408233995/340.png"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssj2vegeta2**: TEQ UR Super Saiyan 2 Vegeta before transformation\n" + 
                                "**ssj2vegeta1**: STR UR Super Saiyan 2 Vegeta & Bulma"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'kandc')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/717441222926401606/dXdh5tg.png?width=1089&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**kandc1**: AGL LR Super Saiyan 2 Caulifla & Super Saiyan 2 Kale"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'ssj4vegeta' || args[0] === 'ss4vegeta')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/717441392636592239/88-886851_vegeta-ssj4-dokkan-vegeta-ssj-png-dokkan-battle.png?width=420&height=612"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssj4vegeta1**: STR LR Super Saiyan 4 Vegeta"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'fpfrieza')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/717441781079343235/ddaappm-94c40d90-8105-4bc1-aaed-fa68a207c66e.png"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**fpfrieza1**: PHY UR Frieza (Full Power) without EZA\n" +
                                "**fpfrieza1z**: PHY UR Frieza (Full Power) with EZA"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'bardock')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Bardock Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/717595847139000390/latest.png?width=398&height=612"
                },
                fields: [
                    {
                        name: "Bardock",
                        value:  "**bardock1**: AGL UR Bardock before transformation\n" +
                                "**bardock2**: PHY LR Bardock"
                    },
                    {
                        name: "Super Saiyan Bardock",
                        value: "**ssjbardock1**: AGL UR Super Saiyan Bardock after transformation"
                    },
                    {
                        name: "Bardock & Gine",
                        value: "**bandg1**: STR UR Bardock & Gine"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'bojack' || args[0] === 'boujack')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Boujack Commands",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/717949267020611644/latest.png?width=1096&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**boujack1**: INT LR Full Power Bojack (Galactic Warrior)"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'mvegeta')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/718202661991874580/majin-vegeta-fight-playable.png?width=1225&height=613"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**mvegeta2**: AGL LR Majin Vegeta\n" +
                                "**mvegeta1**: TEQ UR Majin Vegeta after transformation"
                    }
                ],
                timestamp: new Date()
            }});
        }
        else if (args[0] === 'ssjbardock' || args[0] === 'ssbardock')
        {
            message.channel.send({embed: {
                color: 0,
                author:
                {
                    name: message.author.username,
                    icon_url: message.author.displayAvatarURL({format: "png", dynamic: "true"})
                },
                title: "Searching...",
                thumbnail:
                {
                    url: "https://media.discordapp.net/attachments/712036120191434793/718203244391694366/340.png"
                },
                fields: [
                    {
                        name: "** **",
                        value:  "**ssjbardock1**: AGL UR Super Saiyan Bardock after transformation"
                    }
                ],
                timestamp: new Date()
            }});
        }
    }
}