import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import DummyMeetups from "../../data/meetup.data"

function MeetupList() {

  return (
    <ul className={classes.list}>
      {DummyMeetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>

  
  );
}

export default MeetupList;
