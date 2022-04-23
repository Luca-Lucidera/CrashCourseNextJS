import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetup/NewMeetupForm";
export default function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
