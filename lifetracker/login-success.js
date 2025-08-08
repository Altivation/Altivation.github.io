window.onload = () => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = params.get('access_token');

    if (window.opener && accessToken)
    {
        window.opener.postMessage({
            type: 'googleAuth',
            token: accessToken
        });
    }
}
