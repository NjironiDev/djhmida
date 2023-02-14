const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const PREFIX = 'dj';
const BOT_INVITE_LINK = process.env.BOT_INVITE_LINK;
const BOT_ID = process.env.BOT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN;
const OWNER_ID = process.env.OWNER_ID;
const FACES_API_KEY = process.env.FACES_API_KEY;
const URBAN_API_KEY = process.env.URBAN_API_KEY;
const MAJID_VOICES = {
  dik_terma: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813871267991632/Dik_Terma.mp3',
  hak_a_said: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813872266231888/Hak_a_Said.mp3',
  hak_chwa: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813872635326504/Hak_Chwa.mp3',
  ay_dahri: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813873071521842/Ay_Dahri.mp3',
  bezi: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813873436438569/Bezi.mp3',
  ara_passi: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813873776181328/Ara_Passi.mp3',
  l3eb_m3ana: 'https://cdn.discordapp.com/attachments/596120108334579728/1012813874128498698/L3eb_M3ana.mp3',
};

const NAMIR_VOICES = {
  wach_kayn: 'https://cdn.discordapp.com/attachments/1008058197141106699/1011749023989911612/Wach_kayn.mp3',
  zamel: 'https://cdn.discordapp.com/attachments/849299865157632098/891398001510219777/namir.mp3',
  da7kek: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961830019076196/namir_da7kek.mp3',
  rak3yan: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961830396575764/namir_rak3yan.mp3',
  aller: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961830732103800/namir_Aller.mp3',
  li_ma3na: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961831042494474/namir_li_ma3na.mp3',
  salam: 'https://cdn.discordapp.com/attachments/596120108334579728/1010961831378034768/namirSalam.mp3',
  hehe: 'https://cdn.discordapp.com/attachments/1005814495987388459/1010155223794327562/namir-hehe.mp3',
};

module.exports = {
  PREFIX,
  BOT_TOKEN,
  BOT_ID,
  BOT_INVITE_LINK,
  OWNER_ID,
  FACES_API_KEY,
  RAPID_API_KEY: URBAN_API_KEY,
  MAJID_VOICES,
  NAMIR_VOICES,
};
