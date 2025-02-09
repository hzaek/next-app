export default function Loading() {
    return (
      <div className="flex justify-center items-center main-bg h-svh">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
        <div className="absolute text-white font-semibold mt-40">Loading weather data...</div>
        
      </div>
    );
  }
  

