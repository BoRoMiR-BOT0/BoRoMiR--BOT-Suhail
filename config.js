const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "0745 828 504" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_42_06_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUzLFxuICAgICAgICA3MixcbiAgICAgICAgMTU0LFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTkxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg4LFxuICAgICAgICA4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDg1LFxuICAgICAgICA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgODAsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgODksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiemhLcEFlZTF5RVBFYzE5WHhoRUE3QWFCMnFvaGNxbjVkbmNCcW1GYXZUND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0MDc0NTgyODUwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzQ5ODM1OTA1NUY3MkY0REY2RjQ4NzU2RjIwM0M5ODZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MTI3NzU0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDA3NDU4Mjg1MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFCREU5MThGQzU3NEE2RUQ2RDEyQTkyOTNGMUI4MEY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODEyNzc1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2enBPdTM2YlNjcUs1YkExcGh3cXRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3MjYyNTdiLWYwY2MtNDA0Zi05OGExLWU2OGEyNDk4YTEwZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMTY4LFxuICAgICAgMjAxLFxuICAgICAgNjksXG4gICAgICAxOTYsXG4gICAgICAyLFxuICAgICAgMTAzLFxuICAgICAgMTk5LFxuICAgICAgMjM1LFxuICAgICAgMjE5LFxuICAgICAgMjUwLFxuICAgICAgMjIsXG4gICAgICAxMixcbiAgICAgIDE1LFxuICAgICAgMTUsXG4gICAgICAzMixcbiAgICAgIDEzNixcbiAgICAgIDEwMyxcbiAgICAgIDIxLFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDU0LFxuICAgICAgMTA4LFxuICAgICAgMjUsXG4gICAgICAyNDQsXG4gICAgICAyOSxcbiAgICAgIDUxLFxuICAgICAgOTYsXG4gICAgICA2OCxcbiAgICAgIDQ1LFxuICAgICAgMTc3LFxuICAgICAgMTA5LFxuICAgICAgMTY0LFxuICAgICAgMjMyLFxuICAgICAgMjI2LFxuICAgICAgMTYyLFxuICAgICAgMTc5LFxuICAgICAgMTg5LFxuICAgICAgMTQsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlJMVldRWlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQwNzQ1ODI4NTA0OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCb1JvTWlSLSBCT1RcIixcbiAgICBcImxpZFwiOiBcIjg0NjgwMDQ0OTcwMDk0OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmoramdnUS81aWlzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRcDA5Sk5qbnFXQkNWT2Q5Ulo2SHFKZkJNdHNxWktNRUIyWDE2YS94eHp3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkU3TXNTcnFIUmEyZ2xzNXpxbUdBdkV0ZTVVNndYYkRPODlma0l0YzJYbzNFQ2xkWnhPN0JOOFJ2Y09EaW4yaHlHMDloQ2l6OXFhMUNoL3JFVEJNSEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdUSjd3ZThHUGt6R2k4Y2RuRGNydzc0R2F5N0hCNnFhSUcwV3phcndBbkU5eGpZbk9YaXlJUGhrYmNpaG9zdEI5THlkQVowWFp2U3ZBcXRrYjFWNGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQwNzQ1ODI4NTA0OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MTI3NzUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2ZBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHZkEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjeVBsSUhKVitZVFhYN0wzb3NNWm0yejNJMmsrdGtDdStHK3ZOdkpUbzFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDIyNzQ0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgxMjc3NTUyNzBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BoRoMiR-BOT0",
  ownername:process.env.OWNER_NAME|| "BoRoMiR",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
