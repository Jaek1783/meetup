import modules from './MeetupItem.module.css';
import Card from '../UI/Card';
import { useContext } from 'react';
import  FavoritesContext from '../../store/favorites-context';
const MeetupItem = (props)=>{
    const favoritesCtx = useContext(FavoritesContext);
    const itemsFavorites = favoritesCtx.itemsFavorites(props.id);
    const toggleFavoriteButtonHandler = ()=>{
        if(itemsFavorites){
            favoritesCtx.removeFavorites(props.id);
        }else{
            favoritesCtx.addFavorites({
                id:props.id,
                image:props.image,
                title:props.title,
                address:props.address,
                description:props.description
            });
        }
    };
    return <li className={modules.item}>
        <Card>
            <div className={modules.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={modules.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={modules.actions}>
                <button onClick={toggleFavoriteButtonHandler}>{itemsFavorites ? 'Remove Favorite':'To add Favorite'}</button>
            </div>
        </Card>
    </li>
};

export default MeetupItem;