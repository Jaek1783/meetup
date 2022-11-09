import NewMeetupForm from "../components/Meetup/NewMeetupForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NewMeetupPage = ()=>{
    const navigate = useNavigate();
    const addMeetupHandler = (meetupData)=>{
    axios.post('https://react-serverless-4b643-default-rtdb.firebaseio.com/meetups.json',meetupData)
    .then(response=>{
        if(response.data){
            navigate('/');
        }
    })};
    return <div>
        <h2>Add New Meetup</h2>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
}; export default NewMeetupPage;