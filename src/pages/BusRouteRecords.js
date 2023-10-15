//import UserManagementContainer from "../components/UserManagementContainer";
import FormContainer from "../components/FormContainer";
import BusRootsTable1 from "../components/BusRootsTable1";
import SideMenuContainer from "../components/SideMenuContainer";

const BusRouteRecords = () => {
  return (
    <div className="relative bg-gray box-border w-full h-[1311px] overflow-hidden text-left text-lg text-brand-colors-moviebox-black font-helvetica-neue border-[1px] border-solid border-greys-blue-grey-300">
      <SideMenuContainer />
      <FormContainer
        iconId="/united3.svg"
        pageTitle="Bus Route records"
        propColor="#000"
      />
      <div className="absolute top-[246px] left-[414px] overflow-hidden flex flex-col items-center justify-start py-8 px-32 gap-[32px] text-base">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative font-medium">
              Collection of all Bus Routes
            </div>
            <div className="relative text-sm text-brand-colors-moviebox-gray">
              Keep track of all the Bus Routes on system
            </div>
          </div>
          <div className="rounded-lg box-border w-[276px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm text-brand-colors-moviebox-gray border-[1px] border-solid border-brand-colors-moviebox-highlight-50">
            <div className="rounded-lg flex flex-row items-center justify-center">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/phmagnifyingglassbold.svg"
              />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="relative font-medium border-none outline-none bg-transparent"
            />
            <button className="relative bg-brand-colors-moviebox-highlight-10 px-3 py-1 rounded-lg font-medium text-brand-colors-moviebox-black hover:bg-brand-colors-moviebox-highlight-20">
              Search
            </button>
          </div>
        </div>
        <BusRootsTable1 />
      </div>
      <div className="absolute top-[173px] left-[413px] box-border w-[1442px] h-[74px] overflow-hidden flex flex-row items-center justify-between py-8 px-32 text-5xl border-[1px] border-solid border-brand-colors-moviebox-highlight-50">
        <b className="relative">Bus Route Records</b>
        <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
          <button className="rounded-lg flex flex-row items-center justify-center p-2 gap-[8px] border-[1px] border-solid border-brand-colors-moviebox-highlight-50">
            <img
              className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
              alt=""
              src="/phfunnelsimplebold.svg"
            />
            <div className="relative">Filter</div>
          </button>
          <button className="rounded-lg flex flex-row items-center justify-center p-2 gap-[8px] border-[1px] border-solid border-brand-colors-moviebox-highlight-50">
            <img
              className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
              alt=""
              src="/phcloudarrowdownbold.svg"
            />
            <div className="relative">Export as PDF</div>
          </button>
        </div>
      </div>
      {/* <div className="absolute top-[166px] left-[59px] rounded-2xl bg-color-white shadow-[0px_20px_50px_rgba(55,_69,_87,_0.1)] w-[252px] h-16 flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px] text-lightslategray-200 font-xs-semibold">
        <img className="relative w-8 h-8" alt="" src="/graph-13.svg" />
        <div className="relative font-semibold">Dashboard</div>
      </div>
      <div className="absolute top-[307px] left-[47px] rounded-2xl bg-primary-900 shadow-[0px_20px_50px_rgba(55,_69,_87,_0.1)] w-[268px] h-16 flex flex-row items-center justify-start py-4 px-6 box-border gap-[24px] text-color-white font-xs-semibold">
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0"
          alt=""
          src="/interface--chart-line.svg"
        />
        <div className="relative font-semibold">Bus Route records</div>
      </div> */}
    </div>
  );
};

export default BusRouteRecords;
