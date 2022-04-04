import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/layout";

const DummyMeetups = [
  {id:"m1",
title:"A First Meetup",
image:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
address:"5, 12345 Cavendish blvd",
description:"this is our first meetup!"},
{id:"m2",
title:"A Second Meetup",
image:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
address:"5, 12345 Cavendish blvd",
description:"this is our second meetup!"}
] 


const HomePage = () => {
  return(
    <Layout><MeetupList meetups={DummyMeetups}/></Layout>
  )
}

export default HomePage;
