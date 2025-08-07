let googleClient;

window.onload = () => {
    google.accounts.id.initialize({
        client_id: "534160900491-mkm54kduoibu8bvg0mqdqkhi38f53kq0.apps.googleusercontent.com",
        callback: handleCredentialResponse,
    });
}

function handleCredentialResponse(response) {
    console.log("Google token:", response.credential);
    // Optionally decode or store token
    localStorage.setItem('google_token', response.credential);
    
}

function triggerGoogleLogin() {
    console.log("Google login triggered");
    google.accounts.id.prompt();
}