import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorite:[],
    totalFavorites: 0,
    addFavorites : (favoriteMeetup)=>{},
    removeFavorites : (meetupId)=>{},
    itemsFavorites : (meetupId)=>{}
});

export const FavoritesContextProvider = (props)=>{
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoritesHandler = (favoriteMeetup)=>{
        setUserFavorites(prevUserFavorites =>{
            return prevUserFavorites.concat(favoriteMeetup);
            //추가버튼을 누르면, 클릭한 것들로 새 배열을 만든다.
        });
    };
    const removeFavoritesHandler = (meetupId)=>{
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
            //삭제버튼을 누르면, 클릭한 것(meetupId)과 다른 것만 재배열 한다.
        });
    };
    const itemsFavoritesHandler = (meetupId)=>{
        return userFavorites.some(meetup=>meetup.id === meetupId);
        //userFavorites배열에 클릭한 meetupId가 true면 ture반환, false면 false반환
    };

    const context = {
        favorite: userFavorites,
        totalFavorites:userFavorites.length,
        addFavorites:addFavoritesHandler,
        removeFavorites:removeFavoritesHandler,
        itemsFavorites:itemsFavoritesHandler
    };
return(
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
)
};  

export default FavoritesContext;