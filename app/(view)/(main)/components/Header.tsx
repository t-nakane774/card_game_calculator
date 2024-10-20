import Link from 'next/link';
import '@view/style/utils.css'

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Card Game Calculator</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/home" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/chart" className="hover:text-gray-400">Chart</Link></li>
            <li><Link href="/services" className="hover:text-gray-400">Services</Link></li>
            <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <button
            className="submit-button submit-button-solid">Logout</button>
        </div>
      </div>
    </header>
  );
}