window.onload = () => {
    console.log( "Checking login status...");
    console.log( "Local storage token:", localStorage.getItem('google_token') );
    const isLoggedIn = localStorage.getItem('google_token') !== null;
    if (isLoggedIn) {
        //window.location.href = getPath('/calendar.html');
    }
    else {
        //window.location.href = getPath('/index.html');
    }
}
