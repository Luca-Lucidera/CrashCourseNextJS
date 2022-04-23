import Image from "next/image";
import { useRouter } from "next/router";

export default function MeetUp(props) {
  const router = useRouter();
  function ShowDetailHandler() {
    router.push("/" + props.id);
  }

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
      <div>
        <button onClick={ShowDetailHandler}>More details</button>
      </div>
    </div>
  );
}
