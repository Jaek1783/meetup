import Card from "../UI/Card";
import modules from './NewMeetupForm.module.css';
const NewMeetupForm = ()=>{
    return <Card>
        <form className={modules.form}>
            <div className={modules.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id='title'/>
            </div>
            <div className={modules.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id='image'/>
            </div>
            <div className={modules.control}>
                <label htmlFor="address">Meetup address</label>
                <input type="text" required id='address'/>
            </div>
            <div className={modules.control}>
                <label htmlFor="description">Description</label>
                <textarea id='description' required rows='5'></textarea>
            </div>
            <div className={modules.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
};

export default NewMeetupForm;