import { BitFieldResolvable, Client, GatewayIntentsString, IntentsBitField, TextChannel } from 'discord.js';

export function discordMessage(messageContent: string){
    const client = new Client({ intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<GatewayIntentsString, number>, });
    
    client.on('ready', () => {
      sendMessage();
    });
    
    async function sendMessage() {
      const channel = await client.channels.fetch(`${process.env.CHANNEL_ID}`);
      if (channel) {
          const textChannel = channel as TextChannel;
          await textChannel.send(messageContent);
      } else {
        console.error('Canal não encontrado.');
      }
    }
    
    client.login(`${process.env.DISCORD_TOKEN}`);
}

