export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    spotify: null,
    item : null,
    discover_weekly: null,
    top_artists: null
    //Remove after finished developing
    // token:"BQC6ateQzt5Hbx-Lm-Ibhz2hbKQxsfimTr_w3CNG48XK030c2U-QnSpHTc8ccdJAoVlcSJhJMov1bdxEx5QoBm0_YR0zqAXiX8kd4UOUTPDSpqrQPEQFs5GFUsRsm52CcXzaty8uCD8El8JLYS2uieNV18RRWtk542gTxsNgR3O5ruCjovNdXmnljHQ1Dn6-AlXhdoXJh9iZFwaxDGFk"
};

const reducer = (state , action) =>{
    
    switch(action.type) {
        case 'SET_USER': 
        return {
            ...state,
            user: action.user
        };

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }

        case "SET_PLAYLISTS":
            return {
             ...state,
             playlists: action.playlists,
                };   
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        case "SET_ITEM":
            return{
                ...state,
                item: action.item
            }
            case "SET_PLAYING":
                return {
                  ...state,
                  playing: action.playing,
                };
        default: 
        return state
    }
}

export default reducer;