const Discord = require('discord.js')
const dotenv = require('dotenv')
const messageCreate = require('./Events/Message/messageCreate');
const { Intents, Collection } = Discord;
dotenv.config()

const client = new Discord.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_PRESENCES,
      Intents.FLAGS.GUILD_INTEGRATIONS,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,

    ]
})

client.commands = new Collection();
client.cooldowns = new Collection();

['eventsHandler', 'commandsHandler'].forEach(handler => {
    require(`./Handlers/${handler}`)(client, Discord);
});

const roleID = '913312628728819732'
const inviteLink = "discord.gg/eaVKQNx"

client.on('presenceUpdate', (_oldPresence, newPresence) => {
    const member = newPresence.member
    if (member) {
      // Ignore members who already have the role
      if (member.roles.cache.has(roleID)) {
        const customStatus = newPresence.activities
          .find(activity => activity.type === 'CUSTOM')
          ?.state
        if (customStatus) {
          if (!customStatus.includes(inviteLink)) {
            member.roles.remove(roleID)
              .catch(console.error)
        if (!customStatus.includes()) {
            member.roles.remove(roleID)
                .catch(console.error)
              
          }
        }
      }
    }
  }})

client.on('presenceUpdate', (_oldPresence, newPresence) => {
  const member = newPresence.member
  if (member) {
    // Ignore members who already have the role
    if (!member.roles.cache.has(roleID)) {
      const customStatus = newPresence.activities
        .find(activity => activity.type === 'CUSTOM')
        ?.state
      if (customStatus) {
        if (customStatus.includes(inviteLink)) {
          member.roles.add(roleID)
            .catch(console.error)
            
        }
      }
    }
  }
})

const generateImage = require("./generateImage")

const welcomeChannelId = "560019110365495296"

client.login(process.env.TOKEN).catch