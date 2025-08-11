import { getPath } from './utility.js';
import { getGoogleAuthURL } from './googleAPI.js';

const m_clientID = "534160900491-mkm54kduoibu8bvg0mqdqkhi38f53kq0.apps.googleusercontent.com"

window.onload = () => {
    google.accounts.id.initialize({
        client_id: m_clientID,
        callback: handleCredentialResponse,
    });
}

function handleCredentialResponse(response) {
    console.log("Google token:", response.credential);
    localStorage.setItem('google_token', response.credential);
    //window.location.href = getPath('/login-success.html');
}

function triggerGoogleLogin() {
    console.log('triggered');
    const url = getGoogleAuthURL();
    const popup = window.open(url, 'Google Login', 'width=400,height=600');
    console.log( 'url', url);
    window.addEventListener('message', (event) => {
        if (event.origin !== window.location.origin) return;
        if (event.data.type === 'googleAuth') {
            console.log('Token:', event.data.token);
            localStorage.setItem('google_token', event.data.token);
            popup.close();
        }
        window.location.href = getPath('/calendar.html');
    });
}
window.triggerGoogleLogin = triggerGoogleLogin;