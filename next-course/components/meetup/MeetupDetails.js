import { Fragment } from "react";
import Image from 'next/image'

export default function MeetUpDetail(props) {
    return (
        <Fragment>
            <Image 
            src={props.image}
            alt={props.title}
            height='100'
            width='100'
            />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
        </Fragment>
    )
}