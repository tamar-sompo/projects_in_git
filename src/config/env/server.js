//check if it is dev server or prod server
const isDev = window.location.href.includes('dev.')

module.exports = {
    APP_NAME: 'finance',

    //  * API URL FOR ALL FETCH CALL

    LOGIN_URL: isDev ? 'https://dev.accounts.codes/finance/login' : 'https://accounts.codes/finance/login',
    API_URL_BASE_CLIENT: 'https://finance.leader.codes/api',
    API_URL_MASTER: isDev ? 'https://api.dev.leader.codes' : 'https://api.leader.codes',
    API_URL_PAY: isDev ? 'https://pay.dev.leader.codes' : 'https://pay.leader.codes',
    API_URL_FILES: isDev ? 'https://files.dev.codes/api' : 'https://files.codes/api',
    API_URL_ACCOUNT: isDev ? "https://dev.accounts.codes/api" : "https://accounts.codes/api",
    JWT: isDev ? "devJwt" : 'jwt'
}



