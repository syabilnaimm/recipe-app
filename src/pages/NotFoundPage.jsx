import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-3">Page not found</h2>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-700 underline">
        Back to search
      </Link>
    </div>
  );
}
