import { useMemo } from "react";

const FormContainer = ({ iconId, pageTitle, propColor }) => {
  const dashboardStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="absolute top-[0px] left-[345px] w-[1575px] h-[120px] text-left text-lg text-greys-blue-grey-700 font-xs-semibold">
      <div className="absolute top-[0px] left-[0px] bg-color-white w-[1575px] h-[120px]" />
      <div className="absolute top-[30px] left-[1002px] h-[60px] flex flex-row items-center justify-center py-0 px-4 box-border gap-[16px] text-color-black">
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src={iconId}
          />
          <div className="relative font-semibold">Eng (US)</div>
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/chevrondown.svg"
        />
      </div>
      <div className="absolute top-[30px] left-[1233px] w-[298px] h-[60px] text-sm">
        <div className="absolute top-[0px] left-[72px] w-[226px] h-[60px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-2xl w-[60px] h-[60px] object-cover"
            alt=""
            src="/rectangle-1393@2x.png"
          />
          <div className="absolute h-4/5 w-[64.6%] top-[10%] right-[0%] bottom-[10%] left-[35.4%]">
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
      <div className="absolute top-[30px] left-[447px] rounded-2xl bg-greys-blue-grey-300 w-[513px] h-[60px] flex flex-row items-center justify-start py-0.5 pl-6 pr-2 box-border gap-[8px]">
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0"
          alt=""
          src="/magnifier.svg"
        />
        <input
          type="text"
          placeholder="Search here..."
          className="relative outline-none bg-transparent border-none text-lg text-greys-blue-grey-700 flex-grow"
        />
        <button className="relative bg-primary-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-800">
          Search
        </button>
      </div>

      <div
        className="absolute top-[35px] left-[40px] text-17xl leading-[140%] font-semibold text-greys-blue-grey-900"
        style={dashboardStyle}
      >
        {pageTitle}
      </div>
    </div>
  );
};

export default FormContainer;
