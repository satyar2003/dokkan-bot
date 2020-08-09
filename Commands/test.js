const Discord = require('discord.js')

module.exports = {
    name: "test",
    execute(message, args){
        const reader = require('g-sheets-api')
        const readerOptions = {
        sheetId: "167S0pcL_MObdrHi2MWgf_CW1geR6dWOWISb3iKH9kU8",
        returnAllResults: false,
        filter: {
            "key to filter on": "value to match",
        },
        };

        reader(readerOptions, (results) => {
        /* Do something amazing with the results */
        });
    }
}