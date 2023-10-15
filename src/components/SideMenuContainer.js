import { Link } from "react-router-dom";

const SideMenuContainer = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[345px] h-[1311px] text-left text-lg text-greys-blue-grey-700 font-xs-semibold">
      <div className="absolute top-[0px] left-[0px] bg-color-white w-[345px] h-[1311px]" />
      <div className="absolute top-[155px] left-[46px] w-[252px] h-[324px]">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-primary-900 shadow-[0px_20px_50px_rgba(55,_69,_87,_0.1)] w-[252px] h-16 flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px] text-color-white">
          <img className="relative w-8 h-8" alt="" src="/graph-11.svg" />
          <Link to="/" className="relative font-semibold">
            Dashboard
          </Link>
        </div>
        <div className="absolute h-[9.88%] w-[88.49%] top-[34.57%] right-[1.98%] bottom-[55.56%] left-[9.52%]">
          <img
            className="absolute h-full w-[14.35%] top-[0%] right-[85.65%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group1.svg"
          />
          <Link
            to="/userManagement"
            className="absolute top-[2.5px] left-[calc(50%_-_55.5px)]"
          >
            User Management
          </Link>
        </div>
        <div className="absolute top-[172px] left-[24px] w-[218px] h-8">
          <img
            className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
            alt=""
            src="/interface--chart-line1.svg"
          />
          <Link
            to="/busRouteRecords"
            className="absolute top-[3px] left-[calc(50%_-_53px)]"
          >
            Bus Route records
          </Link>
        </div>
        <div className="absolute top-[232px] left-[24px] w-[129px] h-8">
          <img
            className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
            alt=""
            src="/mdicogoutline1.svg"
          />
          <Link to="/" className="absolute top-[2.5px] left-[calc(50%-_8.5px)]">
            Settings
          </Link>
        </div>
        <div className="absolute top-[292px] left-[25px] w-[132px] h-8">
          <div className="absolute top-[179px] left-[0px] w-[132px] h-8">
            <Link to="/" className="absolute top-[3px] left-[56px]">
              Sign Out
            </Link>
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
        src="/dummy-logo1.svg"
      />
    </div>
  );
};

export default SideMenuContainer;
