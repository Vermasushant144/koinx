import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          KoinX
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="#" className="text-gray-600 hover:text-blue-600">Crypto Taxes</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">Free Tools</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">Resource Center</Link>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Get Started
        </button>
      </nav>
    </header>
  )
}

