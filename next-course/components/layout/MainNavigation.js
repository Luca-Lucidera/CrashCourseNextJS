import Link from "next/link"

export default function MainNavigation(params) {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All meetup</Link>
                    </li>
                    <li>
                        <Link href="/new-meetup">New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}