"use client";
export default function Error() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-transparent">
      <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
      <p className="mb-4 text-gray-500">An unexpected error has occurred.</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Reload Page
      </button>
    </div>
  );
}
