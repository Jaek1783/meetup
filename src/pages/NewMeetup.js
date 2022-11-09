import NewMeetupForm from "../components/Meetup/NewMeetupForm";
import axios from "axios";
const NewMeetupPage = ()=>{
    
    const addMeetupHandler = (meetupData)=>{
    axios.post('https://react-serverless-4b643-default-rtdb.firebaseio.com/meetups.json',meetupData)};
    return <div>
        <h2>Add New Meetup</h2>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
}; export default NewMeetupPage;