function getPath( pathname )
{
    const folderLoc = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '');
    return folderLoc + pathname;
}