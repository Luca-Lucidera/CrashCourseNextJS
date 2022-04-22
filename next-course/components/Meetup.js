import Image from "next/image";
export default function MeetUp(props) {
  return (
    <div>
      <div>
        <Image 
        src={props.image} 
        alt="desc immagine"
        width={"100"}
        height={"100"}
        />
        
      </div>
      <div>
        <p>{props.id}</p>
      </div>
      <div>
        <p>{props.title}</p>
      </div>
      <div>
        <p>{props.address}</p>
      </div>
    </div>
  );
}
