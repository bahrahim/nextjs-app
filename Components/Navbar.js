import Link from 'next/link'

function Navbar() {
  return (
    <div className="navigation">
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/Formation">Formations</Link>
                </li>
                <li>
                    <Link href="/Experiences">Experiences</Link>
                </li>
                <li>
                    <Link href="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <div className="logo">
            <h1>Himatt GN</h1>
        </div>

    </div>
  )
}

export default Navbar;