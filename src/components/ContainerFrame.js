const ContainerFrame = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[345px] h-[1311px] overflow-hidden text-left text-lg text-greys-blue-grey-700 font-xs-semibold">
      <div className="absolute top-[0px] left-[0px] bg-color-white w-[345px] h-[1311px]">
        <div className="absolute top-[267px] left-[70px] w-[223px] h-[211px]">
          <div className="absolute top-[0px] left-[0px] w-[223px] h-8">
            <img
              className="absolute h-full w-[14.35%] top-[0%] right-[85.65%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
            />
            <div className="absolute top-[2.5px] left-[calc(50%_-_55.5px)]">
              User Management
            </div>
          </div>
          <div className="absolute top-[179px] left-[0px] w-[132px] h-8">
            <div className="absolute top-[3px] left-[56px]">Sign Out</div>
            <img
              className="absolute top-[3px] left-[0px] w-8 h-8"
              alt=""
              src="/sign-out-icon.svg"
            />
          </div>
          <div className="absolute top-[120px] left-[0px] w-[129px] h-8">
            <img
              className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
              alt=""
              src="/mdicogoutline.svg"
            />
            <div className="absolute top-[2.5px] left-[calc(50%_-_8.5px)]">
              Settings
            </div>
          </div>
        </div>
        <div className="absolute top-[50px] left-[43px] w-[171px] h-14 overflow-hidden text-11xl text-greys-blue-grey-900">
          <div className="absolute top-[5px] left-[80px] leading-[150%] font-semibold">
            MiBus
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-14 h-14"
            alt=""
            src="/dummy-logo.svg"
          />
        </div>
      </div>
      <div className="absolute top-[310px] left-[46px] w-[268px] h-[1001px] overflow-hidden text-color-white">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-900 shadow-[0px_20px_50px_rgba(55,_69,_87,_0.1)] w-[268px] h-16 flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px]">
          <img
            className="relative w-8 h-8 overflow-hidden shrink-0"
            alt=""
            src="/interface--chart-line.svg"
          />
          <div className="relative font-semibold">Bus Route records</div>
        </div>
      </div>
      <div className="absolute top-[171px] left-[59px] w-[252px] h-[1140px] overflow-hidden text-lightslategray-200">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-color-white shadow-[0px_20px_50px_rgba(55,_69,_87,_0.1)] w-[252px] h-16 flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px]">
          <img className="relative w-8 h-8" alt="" src="/graph-1.svg" />
          <div className="relative font-semibold">Dashboard</div>
        </div>
      </div>
    </div>
  );
};

export default ContainerFrame;
