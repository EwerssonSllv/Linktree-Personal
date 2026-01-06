import { Link } from "react-router";

export function ErrorPage() {
    return (
        <div className="flex w-full justify-center items-center flex-col text-white min-h-screen">
            <h1 className="font-bold text-5xl mb-4">404</h1>
            <h1 className="font-medium text-4xl mb-4">Page Not Found!</h1>
            <p className="italic text-1xl mb-4">This page does not exist.</p>
            <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
                Go Home
            </Link>
        </div>
    )
}