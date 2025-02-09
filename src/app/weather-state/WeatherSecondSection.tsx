import Image from "next/image";

export default function WeatherSecondSection({
  weatherObject,
}: {
  weatherObject: { isLoading: boolean; data: WeatherData | null };
}) {
  console.log("weatherObject", weatherObject);
  return (
    
      <div className="flex-1 flex flex-col min-h-0   w-full max-h-full   max-w-[600px] ">
        <Image
          src={"/images/House.png"}
          width={200}
          height={200}
          alt="house"
          className="mx-auto w-[200px] h-[120px]"
        />
        <div className="p-6 x spin-border relative   w-100per-10px min-h-0  flex-1 shadow-white-xl rounded-t-[50px] from-[#130f40] from-[2%] to-black bg-gradient-to-br ">
          
          <div className="overflow-auto h-full p-5 scroll-custom">
            <div className="text-center font-bold text-2xl mb-2 ">
              Aditional Info
            </div>
            <hr className="border-[2px]" />
            <WeatherDataElement weatherObject={weatherObject} />
          </div>
        </div>
        
      </div>
    
  );
}

function WeatherDataElement({
  weatherObject,
}: {
  weatherObject: { isLoading: boolean; data: WeatherData | null };
}) {
  return (
    <div className="text-xl *:flex *:justify-between *:items-center">
      <div className="mt-4 mb-4 last:mb-0 ">
        <span>condition : </span>
        <Image
          src={"https:" + weatherObject.data?.current.condition.icon}
          width={50}
          height={50}
          alt=""
        />
        <span>{weatherObject.data?.current.condition.text}</span>
      </div>
      <div className="mt-4 mb-4 last:mb-0 ">
        <span>Pressure : </span>
        <span>{weatherObject.data?.current.pressure_mb} mb</span>
      </div>
      <div className="mt-4 mb-4 last:mb-0 ">
        <span>Humidity : </span>
        <span>{weatherObject.data?.current.humidity} %</span>
      </div>
      <div className="mt-4 mb-4 last:mb-0 ">
        <span>Temp/F : </span>
        <span>{weatherObject.data?.current.temp_f} F&deg;</span>
      </div>
      <div className="mt-4 mb-4 last:mb-0 ">
        <span>Temp/C : </span>
        <span>{weatherObject.data?.current.temp_c} C&deg;</span>
      </div>
      <div className="mt-4 mb-4 last:mb-0 ">
        <span>Wind Direction : </span>
        <span>{weatherObject.data?.current.wind_dir}</span>
      </div>
      <div className="mt-4 mb-4 last:mb-0 ">
        <span>Wind speed :</span>
        <span>{weatherObject.data?.current.wind_kph} km/h</span>
      </div>
      <div className="mt-4 mb-4 last:mb-0 ">
        <span>Air Qualiti o3 :</span>
        <span>{weatherObject.data?.current.air_quality.o3} km/h</span>
      </div>
      <div className="mt-4 mb-4 last:mb-0 ">
        <span>Air Quality no2:</span>
        <span>{weatherObject.data?.current.air_quality.no2} km/h</span>
      </div>

    </div>
  );
}
