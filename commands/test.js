const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const sqlite3 = require("sqlite3");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription("test command"),
    async execute(interaction) {

        interaction.reply("template command")
        const db = new sqlite3.Database("./lib/database/SQLite.db") 
        fuck();
        
        function fuxk () {
            db.serialize(function () {
                let guild_Ids = [];
                db.all('SELECT Guild_Id FROM Guild_Collection', [], function (err, rows) {
                    rows.forEach(function (row) {
                        guild_Ids.push(row.Guild_Id)

                    })
                },
                )
            },)
        }
        
        console.log(ab);
        // Guild_Ids = db.run("SELECT Guild_Id FROM Guild_Collection")
        // console.log(Guild_Ids);
        // console.log(`FUCK YOU${Guild_Ids}`);
    },
};