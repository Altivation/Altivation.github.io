const m_clientID = "534160900491-mkm54kduoibu8bvg0mqdqkhi38f53kq0.apps.googleusercontent.com"
const m_redirectURI = "https://altivation.github.io/lifetracker/login-success.html";

function getGoogleAuthURL() {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${m_clientID}&` +
        `redirect_uri=${encodeURIComponent(m_redirectURI)}&` +
        `response_type=token&` +
        `scope=https://www.googleapis.com/auth/calendar` +
        `prompt=consent`;

    return url;
}