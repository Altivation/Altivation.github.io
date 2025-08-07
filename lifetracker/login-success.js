window.onload = () => {
    const isLoggedIn = localStorage.getItem('google_token') !== null;
    if (isLoggedIn) {
        window.location.href = getPath('/calendar.html');
    }
    else {
        window.location.href = getPath('/index.html');
    }
}
