export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-indigo-800 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-gray-300 font-mono">
          Loading...
        </p>
      </div>
    </div>
  );
}
