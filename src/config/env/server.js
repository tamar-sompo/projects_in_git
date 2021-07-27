//check if it is dev server or prod server
const isDev = window.location.href.includes('dev.')

module.exports = {
    APP_NAME: 'finance',

    //  * API URL FOR ALL FETCH CALL

    LOGIN_URL: isDev ? 'https://dev.accounts.codes/knowme.page/login' : 'https://accounts.codes/knowme.page/login',
    API_URL_BASE_CLIENT: 'https://finance.leader.codes/api/',
    API_URL_MASTER: isDev ? 'https://api.dev.leader.codes/' : 'https://api.leader.codes/',
    API_URL_PAY: isDev ? 'https://pay.dev.leader.codes/' : 'https://pay.leader.codes/',
    API_URL_CHAT: isDev ? 'https://chat.dev.leader.codes' : 'https://chat.leader.codes',
    API_URL_ACTIVITY_LOG: 'https://activity-log.leader.codes',
    API_URL_HUB: isDev ? 'https://hub.dev.leader.codes/api' : 'https://hub.leader.codes/api',
    API_URL_CONTACTS: isDev ? "https://contacts.dev.leader.codes/" : "https://contacts.leader.codes/",
    API_URL_MAILS: 'https://mails.codes/',
    API_URL_FILES: isDev ? 'https://files.dev.codes/api/' : 'https://files.codes/api/',

    JWT: isDev ? "devJwt" : 'jwt'
}