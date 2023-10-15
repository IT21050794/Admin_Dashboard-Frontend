const Container3 = () => {
  return (
    <div className="absolute w-[calc(100%_-_2px)] top-[502px] right-[1px] left-[1px] bg-color-white h-[92px] text-left text-xs text-grayscale-gray-light font-bold-24">
      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-main-blue opacity-[0.04]" />
      <div className="absolute top-[calc(50%_-_22px)] right-[31px] w-[1426px] h-11">
        <img
          className="absolute top-[calc(50%_-_12px)] right-[0px] w-6 h-6 overflow-hidden"
          alt=""
          src="/icon--more--vertical.svg"
        />
        <div className="absolute top-[calc(50%_+_4px)] right-[190px] tracking-[0.1px] leading-[16px] inline-block w-[140px] h-4">
          4:00 PM
        </div>
        <div className="absolute top-[calc(50%_-_20px)] right-[190px] text-sm tracking-[0.2px] leading-[20px] font-semibold text-grayscale-black inline-block w-[140px]">
          May 25, 2019
        </div>
        <div className="absolute top-[calc(50%_+_4px)] right-[1130px] tracking-[0.1px] leading-[16px] inline-block w-52 h-4">
          on 24.05.2019
        </div>
        <div className="absolute top-[calc(50%_-_20px)] right-[1130px] text-sm tracking-[0.2px] leading-[20px] font-semibold text-grayscale-black inline-block w-52">
          Henry Cavil
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-11 h-11 object-cover"
          alt=""
          src="/avatar--man--6@2x.png"
        />
      </div>
      <img
        className="absolute top-[91.5px] left-[0px] w-[1120px] h-px"
        alt=""
        src="/divider--line--horizontal4.svg"
      />
      <img
        className="absolute top-[-0.5px] left-[0px] w-[1120px] h-px"
        alt=""
        src="/divider--line--horizontal4.svg"
      />
      <div className="absolute top-[calc(50%_-_12px)] right-[71px] w-[119px] h-6 overflow-hidden text-center text-2xs text-color-white">
        <div className="absolute h-full w-[calc(100%_-_13px)] top-[0px] right-[13px] bottom-[0px] left-[0px] rounded-81xl bg-iris-80" />
        <b className="absolute w-[calc(100%_+_5px)] top-[calc(50%_-_7px)] left-[-5px] tracking-[0.5px] uppercase flex items-center justify-center">
          kaduwela
        </b>
      </div>
    </div>
  );
};

export default Container3;
