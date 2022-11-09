import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/Meetup/MeetupList";
const FavoritesPages = ()=>{
    const favoritesCtx = useContext(FavoritesContext);
    let content = null;
    if(favoritesCtx.totalFavorites === 0){
        content = <p>You got no Favorite yet. Start adding some?</p>
    }else{
        content = <MeetupList meetups={favoritesCtx.favorite}/>
    }
    return <div>
        <h2>My Favorite</h2>
        {content}
    </div>
};
export default FavoritesPages;