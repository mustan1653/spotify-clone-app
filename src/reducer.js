export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //token: "BQAMyYqr4NKnUGGGJY-qTeZTXKfZxNKpMFbL-EdXcOfl0oc2QC…2tAXuAXPxxyawkiQwvSco0kALmmaF_NzzHXeXctjE9VpbzYCg",
 //remove after finish developing
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER': 
        return {
            ...state,
            user: action.user
        }
        
        case 'SET_TOKEN' :
        return {
            ...state,
            token: action.token
        }  
        
        case 'SET_PLAYLISTS' :
        return {
            ...state,
            playlists: action.playlists,
        }  

        case 'SET_DISCOVER_WEEKLY' :
        return {
            ...state,
            discover_weekly: action.discover_weekly,
        }  

        default:
            return state;
        
    }
}

export default reducer;