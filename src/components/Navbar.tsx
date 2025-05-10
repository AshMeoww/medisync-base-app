
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-semibold text-blue-700">
        MediSync
      </Link>
      <div className="space-x-4">
        <Link href="/dashboard/patient" className="text-gray-700 hover:text-blue-600">
          Patient
        </Link>
        <Link href="/dashboard/doctor" className="text-gray-700 hover:text-blue-600">
          Doctor
        </Link>
        <Link href="/connect" className="text-gray-700 hover:text-blue-600">
          Connect
        </Link>
      </div>
    </nav>
  );
}
