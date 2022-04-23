import { useRef } from "react";

export default function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
        props.onAddMeetup(meetupData);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    <p><input type='text' required id='title' ref={titleInputRef} /></p>
                </div>
                <div>
                    <label>Url:</label>
                    <p><input type='url' required id='image' ref={imageInputRef} /></p>
                </div>
                <div>
                    <label>Address:</label>
                    <p><input type='text' required id='address' ref={addressInputRef} /></p>
                </div>
                <div>
                    <label>Description:</label>
                    <p><input type='text' required id='description' ref={descriptionInputRef} /></p>
                </div>
                <div>
                    <button>Add Meetup</button>
                </div>
            </form>
        </div>
    )
}