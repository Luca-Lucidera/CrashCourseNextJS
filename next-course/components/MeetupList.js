import Meetup from "./Meetup";

export default function MeetupList(props) {
  return (
    <ul>
      {props.meetups.map((meetup) => (
        <Meetup
          key={meetup.id}
          image={meetup.image}
          id={meetup.id}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}
