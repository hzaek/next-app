import Image from "next/image";

export default function WeatherFirstSection({
  weatherObject,
}: {
  weatherObject: { isLoading: boolean; data: WeatherData | null };
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center ">
        <Image
          src="/images/weather/rain.png"
          width={200}
          height={200}
          alt="rainy"
        />
        <span className="text-4xl font-bold">
          {weatherObject.data?.current.temp_c}&deg;
        </span>
        <span className="text-[#DDB130] font-semibold">
          {weatherObject.data?.location.name},{" "}
          {weatherObject.data?.location.country}
        </span>
      </div>
    </>
  );
}