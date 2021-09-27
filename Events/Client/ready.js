module.exports = {
    name: "ready",
    execute(client) {
        console.log('The bot is now online!');
        client.user.setActivity('for ~help', {type: 'WATCHING'});
    }
};