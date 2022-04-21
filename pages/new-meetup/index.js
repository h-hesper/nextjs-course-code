import { MAX_JS_INT } from "mongodb/lib/utils";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "post",
      body: JSON.stringify(meetupData),
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data)
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
