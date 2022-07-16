const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const PREFIX = 'dj';
const BOT_INVITE_LINK = process.env.BOT_INVITE_LINK;
const BOT_ID = process.env.BOT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN;
const OWNER_ID = process.env.OWNER_ID;
const FACES_API_KEY = process.env.FACES_API_KEY;
const RAPID_API_KEY = process.env.RAPID_API_KEY;

module.exports = {
  PREFIX,
  BOT_TOKEN,
  BOT_ID,
  BOT_INVITE_LINK,
  OWNER_ID,
  FACES_API_KEY,
  RAPID_API_KEY,
};
