import NewMeetupForm from "../../components/NewMeetupForm";
export default function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }
    return (
         <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    );
}