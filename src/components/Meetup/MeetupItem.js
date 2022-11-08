import modules from './MeetupItem.module.css';
import Card from '../UI/Card';
const MeetupItem = (props)=>{
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
                <button>To Favorites</button>
            </div>
        </Card>
    </li>
};

export default MeetupItem;