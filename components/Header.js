import styles from '../styles/Header.module.css'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="max-w-xl mx-auto flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <p>nerd_corner</p>
        </Link>
      </div>
      <div className="text-base leading-5">
        <a href="https://tailwindcss.com/docs" className="font-medium text-gray-500 hover:text-gray-700">
          Documentation &rarr;
        </a>
      </div>
    </header>
  )
}

export default Header