const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
const client = new Discord.Client();
var prefix = "."

client.on('message', message => {

      if (message.content.includes(prefix + "oklm")) {
          if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
              .then(connection => {
                connection.playArbitraryInput(`http://listen.radioking.com/radio/3093/stream/230`);
              })
          } else {
          }

}});

client.login("Njg4OTQ0OTU3MTM4MTQxMjY2.XnjZIw.kvL5_5xUbP265f-CBfBsTZcwVpE");

