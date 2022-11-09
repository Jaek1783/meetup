import axios from "axios";
import MeetupList from "../components/Meetup/MeetupList";
import {useState, useEffect} from 'react';

const AllMeetupPages = ()=>{
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetupData, setLoadedMeetupData ] = useState([]);
  useEffect(()=>{
    setIsLoading(true);
    axios.get('https://react-serverless-4b643-default-rtdb.firebaseio.com/meetups.json')
    .then(response=>{
      // console.log(response.data);
      return response.data;
    }).then(data=>{
      const meetups = [];
      for(const key in data){
        const meetup = {
          id : key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetupData(meetups);
    });
  },[]);
    if(isLoading){
      return <div>
        <p>...Loading</p>
        </div>
    }
    return (
        <div>
            <h2>AllMeetup</h2>
            <MeetupList meetups={loadedMeetupData}/>
        </div>
    )
};

export default AllMeetupPages;