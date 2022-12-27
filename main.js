require("dotenv").config()
const { Client, GatewayIntentBits, REST, Routes} = require('discord.js');
const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN);

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'add') {
        
    }
})

client.login(process.env.CLIENT_TOKEN)