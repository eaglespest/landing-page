export default function Home() {
  return (
    <div className="grid grid-rows-6 grid-cols-2 w-full">
      {/* Row 1 - Full width red */}
      <div className="col-span-2 bg-red-300 h-screen"></div>

      {/* Row 2 - Split: Cyan & Blue */}
      <div className="bg-cyan-400 h-screen"></div>
      <div className="bg-blue-600 h-screen"></div>

      {/* Row 3 - Full width red */}
      <div className="col-span-2 bg-red-300 h-screen"></div>

      {/* Row 4 - Split: Green & Blue */}
      <div className="bg-green-500 h-screen"></div>
      <div className="bg-blue-600 h-screen"></div>

      {/* Row 5 - Full width red */}
      <div className="col-span-2 bg-red-300 h-screen"></div>

      {/* Row 6 - Split into four colors */}
      <div className="bg-green-400 h-screen"></div>
      <div className="bg-blue-500 h-screen"></div>
      <div className="bg-pink-500 h-screen"></div>
      <div className="bg-yellow-400 h-screen"></div>

      {/* Row 7 - Full width green */}
      <div className="col-span-2 bg-green-700 h-screen"></div>
    </div>
  );
}
