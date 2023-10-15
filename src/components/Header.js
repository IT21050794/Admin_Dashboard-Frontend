const Header = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-color-white w-[1575px] h-[120px] text-left text-lg text-color-black font-xs-semibold">
      <div className="absolute top-[30px] left-[1002px] h-[60px] flex flex-row items-center justify-center py-0 px-4 box-border gap-[16px]">
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/united.svg"
          />
          <div className="relative font-semibold">Eng (US)</div>
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/chevrondown.svg"
        />
      </div>
      <div className="absolute top-[30px] left-[1233px] w-[298px] h-[60px] text-sm text-greys-blue-grey-700">
        <div className="absolute top-[0px] left-[72px] w-[226px] h-[60px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-2xl w-[60px] h-[60px] object-cover"
            alt=""
            src="/rectangle-1393@2x.png"
          />
          <div className="absolute top-[6px] left-[80px] w-[146px] h-12">
            <img
              className="absolute h-[33.33%] w-[10.96%] top-[8.33%] right-[15.07%] bottom-[58.33%] left-[73.97%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-21861.svg"
            />
            <div className="absolute w-full top-[58.33%] left-[0%] leading-[20px] inline-block">
              Admin
            </div>
            <div className="absolute top-[0%] left-[0%] text-base leading-[24px] font-medium text-greys-blue-grey-900">
              Tharindu
            </div>
          </div>
        </div>
        <img
          className="absolute top-[7px] left-[0px] w-12 h-12"
          alt=""
          src="/notifications.svg"
        />
      </div>
      <div className="absolute top-[35px] left-[40px] text-17xl leading-[140%] font-semibold text-greys-blue-grey-900">
        Route Summery
      </div>
    </div>
  );
};

export default Header;
