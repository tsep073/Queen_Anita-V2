//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Eastern Cape, South Africa";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/South Africa";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "27736267768";
global.owner = process.env.OWNER_NUMBER || "27736267768";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xPelQ5eGNtY1JSK0dvcTNCVklYWHdicGc3NXY1aEdpRFBYeUQ1dGpuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTlINlg0RTIzemZHS0VtaVRZZSsyQy8yWm1ya0ZWRFpJK1ZGc2dSTDAxaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRWZKSmFxSXJkKzF3dE1oS1BtUEgrYTRDMTQyVDVza04xTGF2NzNMZkhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxc01NV2s0Y3pkT2pYM04zWXZWbUpBTVBGUGUva1FGVkl5ajBHbWxaVjNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHUEZIelQ1cHdmZmdkdktvYm1rbENWdUpkNVlJTldWYjlnY0RFUEhMbXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM1Q2k0VEw5NTFjNStUL2xkOWIzZWJpUjVhNmpDMHRFRS9QRDN0TkZGR2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ZDY2cxYkFjV1hzTG1mM1VyRWZBbDlGQkhDUTV1SFZmKzFLRDJ0d3RXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFhXdEI4UDAvV1pmWDhpemFxZkEyeGt1VmNBRU1JcERvSFJJWG81dnFGTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPSjNxMlVRNGlQUnpCWDR6QjI2QzUwU0E0U3M4SWwwUlRqRnhlL1o5L0szZGdxbEE1d3ZwOWJqNTNOdHR2cVI0N3ZzSm1PSm13Wk40U214bURlNmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6Ik0rZm5OTEdienFPQ3V3YzBTWHlIUW5SdXJBS1pyM2FYc0FvVVE4cWNTd3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImE0QjFmeGhuUzh5empSMUVRRUVFVVEiLCJwaG9uZUlkIjoiM2YxYzg1Y2QtZjEwOC00MzVjLWI1Y2ItMTdkZTliNGU1NzY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNteUZrTmhZVCthUk9TSFZkQjhIbFFpR0p3Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmRlVXWTBFUk1qd01udFc0VVRkOGNjZE4rZ2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVZXTkFOOVQiLCJtZSI6eyJpZCI6IjI3NzM2MjY3NzY4OjcwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKAlFNsYWRl4oCUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQV2c1aDhRaXJybHRBWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJReUZYb2ZtMjRDQVRVSStPUGpXTmdQTDdLYWVNcUJ6OTh5WFVwbmFLelE0PSIsImFjY291bnRTaWduYXR1cmUiOiJCaUtnVFRWU2ZpZUpNenc3L1V2QjJ5Z0pHT1dMZjlhb2lIZlVpN0NEaDhUeVh5ajJmVms3WHZvY0EyckhHeDdXY21UNlZJeitZdFVscXJ4Q1k0enZEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibFNYVXFyTnBEVzJqRWw2VkoxVDNIOEl2MlMxcWdOQ0dnSVBiMXJtL2s0dHNoQWhkeFc2ejJBR0pVZ0Z1amVzbmJYWHJrZkdsdi82MGkyL09VajVqaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzczNjI2Nzc2ODo3MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVTWhWNkg1dHVBZ0UxQ1BqajQxallEeSt5bW5qS2djL2ZNbDFLWjJpczBPIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMzI2ODcyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU56VCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Tsepo-V2™`",
  author: process.env.PACK_AUTHER || "Tsepo",
  packname: process.env.PACK_NAME || "Slade is being weird",
  botname: process.env.BOT_NAME || "Slade",
  ownername: process.env.OWNER_NAME || "Tsepo Mohlomi",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
