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
}

function triggerGoogleLogin() {
  google.accounts.id.prompt();
}