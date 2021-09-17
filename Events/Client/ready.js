module.exports = {
    name: "ready",
    execute(client) {
        console.log('The Bot is now online')
        client.user.setActivity('for ~help', {type: 'WATCHING'});
    }
};