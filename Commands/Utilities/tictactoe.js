const { cooldown } = require("./manual");

module.exports= {
    name: 'tictactoe',
    aliases: ['ttt'],
    usage: "ttt @user",
    description: 'Sends a ttt game',
    category: 'utility',
    cooldown: 10,
    execute: async(message, args, commandName, client, Discord) => {
        const simplydjs = require('simply-djs')
        simplydjs.tictactoe(message)
    }
}