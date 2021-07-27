import localKeys from './local';
import serverKeys from './server'


const keys = JSON.stringify(process.env.NODE_ENV) === '"development"' ? localKeys : serverKeys;
export const googleFontApiKey = "AIzaSyBG4FbB6eBy-U665nLOA_153D0YE-gSV9k";

export const API_File = 'https://files.codes/api'

export default keys;