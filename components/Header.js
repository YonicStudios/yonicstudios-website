import Link from 'next/link'

export default function Header() {
  return (
    <header>
        <Link href="/"><a><img src="/ys_logo.svg" alt="YonicStudios Logo" width={164} height={64} /></a></Link>
        <ul className='nav'>
            <li><Link href="/about"><a className="nav-link">ABOUT</a></Link></li>
            <li><Link href="/games"><a className="nav-link">GAMES</a></Link></li>
            <li><Link href="/animations"><a className="nav-link">ANIMATIONS</a></Link></li>
        </ul>
        <ul className='nav'>
            <li>YT</li>
            <li>TW</li>
            <li>ST</li>
        </ul>
    </header>
  );
}