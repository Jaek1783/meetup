import modules from './MeetupItem.module.css';
const MeetupItem = (props)=>{
    return <li className={modules.item}>
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
    </li>
};

export default MeetupItem;