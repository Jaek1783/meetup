import Card from "../UI/Card";
import modules from './NewMeetupForm.module.css';
import {useRef} from 'react';
import { useNavigate } from "react-router-dom";

const NewMeetupForm = (props)=>{
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const addressRef = useRef(null);
    const descRef = useRef(null);
    const navigate = useNavigate();

    const submitHandler = (event)=>{
        event.preventDefault();
    const enterTitle = titleRef.current.value;
    const enterImage = imageRef.current.value;
    const enterAddress = addressRef.current.value;
    const enterDesc = descRef.current.value;

    const meetupData = {
        title:enterTitle,
        image:enterImage,
        address:enterAddress,
        description:enterDesc
    };
    // console.log(meetupData);
    props.onAddMeetup(meetupData);
    titleRef.current.value='';
    imageRef.current.value='';
    addressRef.current.value='';
    descRef.current.value='';
    navigate('/');

    };
    return <Card>
        <form className={modules.form} onSubmit={submitHandler}>
            <div className={modules.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id='title' ref={titleRef} placeholder='This is a first meetup'/>
            </div>
            <div className={modules.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id='image' ref={imageRef} placeholder='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'/>
            </div>
            <div className={modules.control}>
                <label htmlFor="address">Meetup address</label>
                <input type="text" required id='address'ref={addressRef} placeholder='Meetupstreet 5, 12345 Meetup City'/>
            </div>
            <div className={modules.control}>
                <label htmlFor="description">Description</label>
                <textarea id='description' required rows='5' ref={descRef}></textarea>
            </div>
            <div className={modules.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
};

export default NewMeetupForm;