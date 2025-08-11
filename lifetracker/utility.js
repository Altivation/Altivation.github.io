const encryptkey = "76q2f59c4horp2n6i01bupvaxf6ynhnz"

export function getPath( pathname )
{
    const folderLoc = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '');
    return folderLoc + pathname;
}