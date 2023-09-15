export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "6db3966f421949e2abafdc762d0424d3";
const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

//Getting auth-token from the Url
export const getTokenFromUrl = ()=>{
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
        //accessToken=mysupersecretkeyishere. So below code will split accessToken= and key
        let parts = item.split('=');
        initial[parts[0]]= decodeURIComponent(parts[1])
        return initial
    },{})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`