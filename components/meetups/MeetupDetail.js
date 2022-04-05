import { useRouter } from "next/router";
import DummyMeetups from "../../data/meetup.data";

const MeetupDetail = () => {
  const router = useRouter();

  console.log(router.query.meetupId); //the clicked id

  let clickedPlaceId = router.query.meetupId;

  console.log(DummyMeetups);

  let clickedData = DummyMeetups.filter((data) => {
    return data.id === clickedPlaceId;
  });

  console.log(clickedData)
  return(
      <>
    {clickedData.map(({ image, address, title, description, id }) => {
        return (<>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <address>{address}</address>
            <p>{description}</p>
          </>
        );
      })
    }
    </>

  )
};

export default MeetupDetail;
