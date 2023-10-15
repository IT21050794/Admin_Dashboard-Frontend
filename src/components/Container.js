const Container = () => {
  return (
    <div className="absolute w-[calc(100%_-_2px)] top-[226px] right-[1px] left-[1px] h-[92px] text-left text-xs text-grayscale-gray-light font-bold-24">
      <div className="absolute top-[calc(50%_-_22px)] right-[31px] w-[1426px] h-11">
        <img
          className="absolute top-[calc(50%_-_12px)] right-[0px] w-6 h-6 overflow-hidden"
          alt=""
          src="/icon--more--vertical.svg"
        />
        <div className="absolute top-[calc(50%_-_12px)] right-[98px] w-[52px] h-6 overflow-hidden text-center text-2xs text-color-white">
          <b className="absolute w-[calc(100%_-_24px)] top-[calc(50%_-_7px)] left-[12px] tracking-[0.5px] uppercase flex items-center justify-center h-3.5">
            low
          </b>
        </div>
        <div className="absolute top-[calc(50%_+_4px)] right-[190px] tracking-[0.1px] leading-[16px] inline-block w-[140px] h-4">
          8:00 AM
        </div>
        <div className="absolute top-[calc(50%_-_20px)] right-[190px] text-sm tracking-[0.2px] leading-[20px] font-semibold text-grayscale-black inline-block w-[140px]">
          May 26, 2019
        </div>
        <div className="absolute top-[calc(50%_+_4px)] right-[1130px] tracking-[0.1px] leading-[16px] inline-block w-52 h-4">
          on 24.05.2019
        </div>
        <div className="absolute top-[calc(50%_-_20px)] right-[1130px] text-sm tracking-[0.2px] leading-[20px] font-semibold text-grayscale-black inline-block w-52">
          Matt Damon
        </div>
        <img
          className="absolute top-[calc(50%_-_22px)] left-[0px] w-11 h-11 object-cover"
          alt=""
          src="/avatar--woman--5@2x.png"
        />
      </div>
      <img
        className="absolute w-full right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden h-px"
        alt=""
        src="/divider--line--horizontal3.svg"
      />
      <img
        className="absolute w-full top-[-0.5px] right-[0px] left-[0px] max-w-full overflow-hidden h-px"
        alt=""
        src="/divider--line--horizontal3.svg"
      />
      <div className="absolute top-[calc(50%_-_12px)] right-[76px] w-[119px] h-6 overflow-hidden text-center text-2xs text-color-white">
        <div className="absolute h-full w-[calc(100%_-_13px)] top-[0px] right-[13px] bottom-[0px] left-[0px] rounded-81xl bg-iris-80" />
        <b className="absolute w-[calc(100%_+_5px)] top-[calc(50%_-_7px)] left-[-5px] tracking-[0.5px] uppercase flex items-center justify-center">
          Kottawa
        </b>
      </div>
    </div>
  );
};

export default Container;
