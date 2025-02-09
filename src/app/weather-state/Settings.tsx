import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
export default function Setttings({
  handleCityChange,
}: {
  handleCityChange: (city: string) => void;
}) {
  const gearRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isGear, setIsGear] = useState(false);
  const [text, setText] = useState("");
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
        <div className=" absolute animate-appear  z-[2] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"></div>
      )}
      {isGear && (
        <div className="absolute flex justify-center w-full z-[3] animate-appear">
          <form className="spin-border absolute flex animate-up-to-down">
            <input
              ref={inputRef}
              type="text"
              className="rounded-l-[50px] outline-none p-[10px]"
              placeholder="Enter City Name"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                
              }}
            />
            <button
              className=" bg-white rounded-r-[50px] p-[10px]"
              onClick={(e) => {
                e.preventDefault();
                handleCityChange(text);
              }}
            >
              Save
            </button>
          </form>
        </div>
      )}
      <div className="h-[55px] z-[3]  max-w-[600px] mx-auto right-[50%] translate-x-[50%]  overflow-hidden  main-bg rounded-t-[20px] absolute bottom-0 w-full flex justify-center items-center">
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
