import Image from "next/image";
import useFetch from "../../hooks/useFetch";
import Loading from "./loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
export default function WeatherState({}) {
  const obj = useFetch<WeatherData>("/api/weather");

  if (obj.isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Setttings />
      <div className="flex flex-col justify-between items-center min-h-svh text-white ">
        <WeatherFirstSection weatherObject={obj} />
        <WeatherSecondSection weatherObject={obj} />
      </div>
    </>
  );
}
function WeatherFirstSection({
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
function WeatherSecondSection({
  weatherObject,
}: {
  weatherObject: { isLoading: boolean; data: WeatherData | null };
}) {
  return (
    <>
      <div className="flex-1 flex flex-col   w-full   max-w-[600px]">
        <Image
          src={"/images/House.png"}
          width={200}
          height={200}
          alt="house"
          className="mx-auto w-[200px] h-[120px]"
        />
        <div className="spin-border relative w-100per-10px p-5 flex-1 shadow-white-xl rounded-t-[50px] from-[#130f40] from-[2%] to-black bg-gradient-to-br">
          <Image
            src={"https:" + weatherObject.data?.current.condition.icon}
            width={50}
            height={50}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
function Setttings() {
  const gearRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isGear, setIsGear] = useState(false);
  useEffect(() => {
    if (isGear) {
      gearRef.current?.classList.add("animate-spin");
      inputRef.current?.focus();
    } else {
      gearRef.current?.classList.remove("animate-spin");
    }
  }, [isGear]);
  return (
    <>
      {isGear && (
        <div className=" absolute animate-appear  z-2 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"></div>
      )}
      {isGear && (
        <div className="absolute flex justify-center w-full z-3 animate-appear">
          <form className="spin-border absolute flex animate-up-to-down">
            <input
              ref={inputRef}
              type="text"
              className="rounded-l-[50px] outline-none p-[10px]"
              placeholder="Enter City Name"
            />
            <button
              className=" bg-white rounded-r-[50px] p-[10px]"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Save
            </button>
          </form>
        </div>
      )}
      <div className="h-[55px] z-[3]  max-w-[600px] mx-auto right-[50%] translate-x-[50%]  overflow-hidden  main-bg rounded-t-[20px] absolute bottom-0 z-3 w-full flex justify-center items-center">
        <button
          ref={gearRef}
          onClick={() => {
            setIsGear(!isGear);
          }}
        >
          <FontAwesomeIcon
            icon={faGear}
            className="text-[#ddb130] w-[40px] h-[40px] "
          />
        </button>
      </div>
    </>
  );
}
