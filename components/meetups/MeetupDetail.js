import classes from './MeetupDetail.module.css';
import { useRouter } from "next/router";
import DummyMeetups from "../../data/meetup.data";

const MeetupDetail = () => {
  const router = useRouter();

  let clickedPlaceId = router.query.meetupId;

  let clickedData = DummyMeetups.filter((data) => {
    return data.id === clickedPlaceId;
  });


  return(
      <section className={classes.detail} >
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
    </section>

  )
};

export default MeetupDetail;
