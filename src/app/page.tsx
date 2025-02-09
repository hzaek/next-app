

import Image from "next/image";


import Link from "next/link";

export default function Landing() {


  return (
    <div className=" overflow-x-hidden flex items-center justify-center h-svh">
      <div className="container flex flex-col items-center ">
        <Image
          alt="rainy"
          width={200}
          height={200}
          src={"/images/weather/rain.png"}
          className="sm:h-[200px] sm:w-[200px] rounded-full"
        />
        <div className="flex flex-col items-center relative bottom-[20px]">
          <div className="text-6xl font-bold text-center text-white mt-7 mb-7">
            <span>Weather &nbsp;</span>
            <span className="text-[#DDB130]">ForeCasts</span>
          </div>
          <Link href="/weather-state">
            <button className="bg-[#DDB130] rounded-[40px] p-7 text-2xl text-[#1b2845]">
              Get Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
