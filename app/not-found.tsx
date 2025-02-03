import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="mt-4 text-xl">Page Not Found</p>
      <Link href="/" className="mt-4 underline">
        Return Home
      </Link>
    </div>
  )
}