let m_clientID = "534160900491-mkm54kduoibu8bvg0mqdqkhi38f53kq0.apps.googleusercontent.com"
let m_redirectURI = "https://altivation.github.io/lifetracker/login-success.html";
let loginScope = "openid email profile";

window.onload = () => {
    google.accounts.id.initialize({
        client_id: m_clientID,
        callback: handleCredentialResponse,
    });
}

function handleCredentialResponse(response) {
    console.log("Google token:", response.credential);
    localStorage.setItem('google_token', response.credential);
    window.location.href = getPath('/login-success.html');
}

function triggerGoogleLogin() {
    console.log("Google login triggered");
    
    const url = `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${m_clientID}&` +
        `redirect_uri=${encodeURIComponent(m_redirectURI)}&` +
        `response_type=token&` +
        `scope=${encodeURIComponent(loginScope)}&` +
        `prompt=select_account`;

    window.open(url, "googleSignIn", "width=500,height=600");
}