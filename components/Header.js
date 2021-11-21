import styles from '../styles/Header.module.css'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="max-w-xl mx-auto py-10">
      <div className="text-center">
        <Link href="/">
          <a>indie_stash</a>
        </Link>
      </div>
    </header>
  )
}

export default Header