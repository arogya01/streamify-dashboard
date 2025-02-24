import Link from "next/link"
import { Home, BarChart2, Users, DollarSign, Music } from "lucide-react"

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-white shadow-lg">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl font-bold text-blue-600">Streamify</h1>
      </div>
      <ul className="flex flex-col py-4">
        <li>
          <Link href="/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Home className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/analytics" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <BarChart2 className="w-5 h-5 mr-3" />
            Analytics
          </Link>
        </li>
        <li>
          <Link href="/users" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Users className="w-5 h-5 mr-3" />
            Users
          </Link>
        </li>
        <li>
          <Link href="/revenue" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <DollarSign className="w-5 h-5 mr-3" />
            Revenue
          </Link>
        </li>
        <li>
          <Link href="/content" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Music className="w-5 h-5 mr-3" />
            Content
          </Link>
        </li>
      </ul>
    </div>
  )
}

