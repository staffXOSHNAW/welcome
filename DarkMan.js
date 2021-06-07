const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});




const Discord = require ("discord.js")
const moment = require ("moment")
const DarkMan = new Discord.Client();
const prefix = "k-";


DarkMan.login("ODUxMjY4MTU5MjUxMjg0MDM3.YL1zQA.o7Mu54kn5HpDRiLGnF3tAdAAqkQ");
DarkMan.on("ready", async () => {
  console.log(`Logged in as ${DarkMan.user.username}!`);
  DarkMan.user.setStatus("ONLINE");
  DarkMan.user.setActivity(`${prefix}help`, { type: "WATCHING" });
  DarkMan.guilds.cache.forEach(g => {
    if (g.member(DarkMan.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});

//////////

DarkMan.on("message", message => {
if (message.content === prefix +"help") {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("Prefix [ k- ]","")
.setDescription(` 
**
・┊welcome [change channel]
・┊left [change channel]
**
**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=816001067773984768&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/HzSQegy8UG)**
 `)
    
    .setFooter(` welcome bot ✨ | Coded by , KOKW`, DarkMan.user.avatarURL)
    .setURL("https://discord.gg/YSx9p3e7F8")
      
    message.channel.send(embed);
      message.react("❤️");
  }
});
//////////////

/////////// code welcome
DarkMan.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "・┊welcome"
  );
  let DarkMan = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    .setTitle(``)
    .setAuthor(`Welcome Bot`, `https://media.discordapp.net/attachments/733743866334806177/851245138869354516/icegif-87.gif`)
  .setImage(
      "https://media.discordapp.net/attachments/733743866334806177/851245138869354516/icegif-87.gif"
    )
    .setColor("RANDOM")
    .setThumbnail(DarkMan)
    .addField(
      "**name** : ",
      `${member}
    ◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`
    )
    .addField(
      "**Welcome**",
      `Welcome to the server, ${member}
    ◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`
    )
    .addField(
      "**ID** :",
      "**[" + `${member.id}` + "]**"
    )
    .addField(
      "**All Member**",
      `${member.guild.memberCount}
      ◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`
    )
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.send(joinembed);
});
////////////// code left
DarkMan.on("guildMemberRemove", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "・┊left"
  );
  let DarkMan = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    .setTitle(``)
    .setAuthor(`Welcome Bot`, `https://media.discordapp.net/attachments/755636694035857438/758974172658663424/20200923_140354.gif`)
    .setImage(
      "https://media.discordapp.net/attachments/733743866334806177/851244078472888320/received_2732867313663473.gif"
    )
    .setColor("RANDOM")
    .setThumbnail(DarkMan)
    .addField("**name :**", `${member}`)
    .addField("Bye Bye", `!`)
    .addField("👋;(",   "bye bye")
    .addField(
      "All Memebers",
      `${member.guild.memberCount}` + "member"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.send(joinembed);
});
/////////////// code embed
DarkMan.on("guildMemberAdd", member => {
  const joinembed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      `__**A new member just arrived!**__`
    )
    .addField(
      " name : ",
      `${member}
    ◈ ━━━━━━ ⸙ ━━━━━━ ◈`
    )
    .addField(
      "Welcome",
      `Welcome to the server, ${member}
    ◈ ━━━━━━ ⸙ ━━━━━━ ◈`
    )
    .addField(
      " User :",
      "**[" + `${member.id}` + "]**"
    )
    .addField(
      "Your are the member",
      `${member.guild.memberCount}
      ◈ ━━━━━━ ⸙ ━━━━━━ ◈`
    )
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()
    .setImage(
      "https://media.discordapp.net/attachments/733743866334806177/851245357362315305/source.gif"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  member.send(joinembed);
});
/////////////////
