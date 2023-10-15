const DashboardContainer = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[345px] h-[1311px] text-left text-lg text-greys-blue-grey-700 font-xs-semibold">
      <div className="absolute top-[0px] left-[0px] bg-color-white w-[345px] h-[1311px]" />
      <div className="absolute top-[155px] left-[46px] w-[252px] h-[323px]">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-color-white shadow-[0px_20px_50px_rgba(55,_69,_87,_0.1)] w-[252px] h-16 flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px] text-lightslategray-200">
          <img className="relative w-8 h-8" alt="" src="/graph-12.svg" />
          <div className="relative font-semibold">Dashboard</div>
        </div>
        <div className="absolute top-[172px] left-[24px] w-[228px] h-8">
          <img
            className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
            alt=""
            src="/interface--chart-line1.svg"
          />
          <div className="absolute top-[3px] left-[calc(50%_-_58px)]">
            Bus Routes records
          </div>
        </div>
        <div className="absolute top-[232px] left-[24px] w-[129px] h-8">
          <img
            className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
            alt=""
            src="/mdicogoutline2.svg"
          />
          <div className="absolute top-[2.5px] left-[calc(50%_-_8.5px)]">
            Settings
          </div>
        </div>
        <div className="absolute top-[291px] left-[24px] w-[132px] h-8">
        <div className="absolute top-[179px] left-[0px] w-[132px] h-8">
          <div className="absolute top-[3px] left-[56px]">Sign Out</div>
          <img
            className="absolute top-[3px] left-[0px] w-8 h-8"
            alt=""
            src="/sign-out-icon.svg"
          />
        </div>
        </div>
      </div>
      <div className="absolute top-[55px] left-[123px] text-11xl leading-[150%] font-semibold text-greys-blue-grey-900">
        MiBus
      </div>
      <img
        className="absolute top-[50px] left-[43px] w-14 h-14"
        alt=""
        src="/dummy-logo2.svg"
      />
    </div>
  );
};

export default DashboardContainer;
