import MeetupList from "../components/MeetupList"

const dummy = [
    {
        id: 'm1',
        title: "primo meet up",
        image: 'https://www.scelteperte.it/wp-content/uploads/2014/10/colori-fiori-scelte-per-te-giardino.jpg',
        address: 'Viale libertà 1'
    },
    {
        id: 'm2',
        title: "secondo meet up",
        image: 'https://static.fanpage.it/wp-content/uploads/sites/11/2016/02/Come-mantenere-i-fiori-freschi-1200x799.jpg',
        address: 'Viale libertà 2'
    },
    {
        id: 'm3',
        title: "terzo meet up",
        image: 'https://www.giardinaggio.it/fiori/fiori-delle-piante/fiori-margherita_NG1.jpg',
        address: 'Viale libertà 3'
    },
]

export default function HomePage (){
    return (
        <MeetupList meetups={dummy}/>
    )
}