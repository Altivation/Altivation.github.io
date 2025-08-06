let googleClient;

window.onload = () => {
    googleClient = google.accounts.id.initialize({
        client_id: "481022991622-ocrqig2sr1jt48840d7deppcf8jk2rsh.apps.googleusercontent.com",
        callback: handleCredentialResponse,
    });
}

function handleCredentialResponse(response) {
  console.log("Google token:", response.credential);
  // Optionally decode or store token
}

function triggerGoogleLogin() {
  googleClient.prompt();
}