import MeetupList from "../components/meetup/MeetupList";

const dummy = [
  {
    id: "m1",
    title: "primo meet up",
    image:
      "https://www.scelteperte.it/wp-content/uploads/2014/10/colori-fiori-scelte-per-te-giardino.jpg",
    address: "Viale libertà 1",
  },
  {
    id: "m2",
    title: "secondo meet up",
    image:
      "https://static.fanpage.it/wp-content/uploads/sites/11/2016/02/Come-mantenere-i-fiori-freschi-1200x799.jpg",
    address: "Viale libertà 2",
  },
  {
    id: "m3",
    title: "terzo meet up",
    image:
      "https://www.giardinaggio.it/fiori/fiori-delle-piante/fiori-margherita_NG1.jpg",
    address: "Viale libertà 3",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  //fetch dei dati
  return {
    props: dummy,
  };
}
/*

//pre render page
export async function getStaticProps() {
  //prendere dati da api
  return {
    props: {
      meetups: dummy,
    },
    //aggiornamento in secondi della pagina dopo il build
    revalidate: 10
  };
}

*/
