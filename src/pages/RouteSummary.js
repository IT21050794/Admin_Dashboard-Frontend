//import ContainerFrame from "../components/ContainerFrame";
import Header from "../components/Header";
import FormContainer1 from "../components/FormContainer1";
import TrendsContainer from "../components/TrendsContainer";
import SideMenuContainer from "../components/SideMenuContainer";

const RouteSummary = () => {
  return (
    <div className="relative bg-gray box-border w-full h-[1311px] overflow-hidden text-left text-sm text-grayscale-black font-bold-24 border-[1px] border-solid border-greys-blue-grey-300">
      {/* <ContainerFrame /> */}
      <SideMenuContainer />
      <div className="absolute top-[0px] left-[345px] w-[1575px] h-[1311px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[1575px] h-[1311px] overflow-hidden">
          <Header />
        </div>
        <div className="absolute top-[795px] left-[46px] w-[1485px] h-[516px] overflow-hidden">
          <div className="absolute top-[0px] left-[calc(50%_-_742.5px)] w-[1485px] h-[482px] overflow-hidden">
            <div className="absolute w-[calc(100%_-_758px)] top-[0px] right-[0px] left-[758px] h-[336px] overflow-hidden">
              <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-color-white box-border text-center text-2xs text-color-white border-[1px] border-solid border-grayscale-divider">
                <div className="absolute h-[calc(100%_-_303px)] w-[calc(100%_-_568px)] top-[277px] right-[31px] bottom-[26px] left-[537px] rounded-lg bg-blueviolet-200 overflow-hidden">
                  <b className="absolute w-[calc(100%_-_24px)] top-[calc(50%_-_6.5px)] left-[12px] tracking-[0.5px] uppercase flex items-center justify-center h-3.5">
                    Generate Reports
                  </b>
                </div>
                <div className="absolute w-[calc(100%_-_210px)] top-[calc(50%_+_60px)] left-[68px] text-sm tracking-[0.2px] leading-[20px] font-semibold text-grayscale-black text-left inline-block">
                  Include OverCrowding Prevention Schedules
                </div>
                <img
                  className="absolute top-[calc(50%_+_59px)] left-[32px] w-5 h-5 overflow-hidden"
                  alt=""
                  src="/controls--checkbox--inactive.svg"
                />
                <img
                  className="absolute w-full right-[0px] bottom-[69.5px] left-[0px] max-w-full overflow-hidden h-px"
                  alt=""
                  src="/divider--line--horizontal.svg"
                />
              </div>
              <div className="absolute top-[37px] right-[32px] w-[84px] h-[18px]" />
              <b className="absolute w-[calc(100%_-_210px)] top-[32px] left-[32px] text-lgi tracking-[0.4px] inline-block">
                Report Genarator
              </b>
              <div className="absolute w-[calc(100%_-_210px)] top-[64px] left-[32px] text-xs tracking-[0.1px] leading-[16px] text-grayscale-gray inline-block h-4">
                Today
              </div>
              <div className="absolute w-full top-[162px] right-[0px] left-[0px] h-[58px]">
                <div className="absolute w-[calc(100%_-_210px)] top-[calc(50%_-_9px)] left-[68px] tracking-[0.2px] leading-[20px] font-semibold inline-block">
                  Include OverCrowded People Amount
                </div>
                <img
                  className="absolute top-[calc(50%_-_10px)] left-[32px] w-5 h-5 overflow-hidden"
                  alt=""
                  src="/controls--checkbox--inactive.svg"
                />
                <img
                  className="absolute w-full right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden h-px"
                  alt=""
                  src="/divider--line--horizontal.svg"
                />
              </div>
              <div className="absolute w-full top-[104px] right-[0px] left-[0px] h-[58px]">
                <div className="absolute w-[calc(100%_-_210px)] top-[calc(50%_-_9px)] left-[68px] tracking-[0.2px] leading-[20px] font-semibold inline-block">
                  Include OverCrowing Time line
                </div>
                <img
                  className="absolute top-[calc(50%_-_10px)] left-[32px] w-5 h-5 overflow-hidden"
                  alt=""
                  src="/controls--checkbox--inactive.svg"
                />
                <img
                  className="absolute w-full right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden h-px"
                  alt=""
                  src="/divider--line--horizontal.svg"
                />
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_757px)] top-[0px] right-[757px] left-[0px] h-[336px] overflow-hidden">
              <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-color-white box-border border-[1px] border-solid border-grayscale-divider" />
              <b className="absolute w-[calc(100%_-_210px)] top-[32px] left-[32px] text-lgi tracking-[0.4px] inline-block">
                Daily Purchased tickets
              </b>
              <div className="absolute w-[calc(100%_-_210px)] top-[64px] left-[32px] text-xs tracking-[0.1px] inline-block h-4 text-grayscale-gray">
                <span className="leading-[16px]">{`Group: `}</span>
                <span className="font-semibold text-grayscale-gray-dark">
                  Support
                </span>
              </div>
              <div className="absolute w-full top-[96px] right-[0px] left-[0px] h-[58px]">
                <div className="absolute w-[calc(100%_-_168px)] top-[calc(50%_-_9px)] left-[32px] tracking-[0.2px] leading-[20px] font-semibold inline-block">
                  Total Purchased Tickets
                </div>
                <div className="absolute top-[calc(50%_-_9px)] right-[32px] tracking-[0.2px] leading-[20px] font-semibold text-grayscale-gray text-right inline-block w-20">
                  4260
                </div>
                <img
                  className="absolute w-full right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden h-px"
                  alt=""
                  src="/divider--line--horizontal1.svg"
                />
              </div>
              <div className="absolute w-full top-[154px] right-[0px] left-[0px] h-[58px]">
                <div className="absolute w-[calc(100%_-_168px)] top-[calc(50%_-_9px)] left-[32px] tracking-[0.2px] leading-[20px] font-semibold inline-block">
                  Total Users
                </div>
                <div className="absolute top-[calc(50%_-_9px)] right-[32px] tracking-[0.2px] leading-[20px] font-semibold text-grayscale-gray text-right inline-block w-20">
                  3000
                </div>
                <img
                  className="absolute w-full right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden h-px"
                  alt=""
                  src="/divider--line--horizontal1.svg"
                />
              </div>
              <div className="absolute w-full top-[212px] right-[0px] left-[0px] h-[58px]">
                <div className="absolute w-[calc(100%_-_168px)] top-[calc(50%_-_9px)] left-[32px] tracking-[0.2px] leading-[20px] font-semibold inline-block">
                  Local Travellers
                </div>
                <div className="absolute top-[calc(50%_-_9px)] right-[32px] tracking-[0.2px] leading-[20px] font-semibold text-grayscale-gray text-right inline-block w-20">
                  2500
                </div>
                <img
                  className="absolute w-full right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden h-px"
                  alt=""
                  src="/divider--line--horizontal1.svg"
                />
              </div>
              <div className="absolute w-full top-[270px] right-[0px] left-[0px] h-[58px]">
                <div className="absolute w-[calc(100%_-_168px)] top-[calc(50%_-_9px)] left-[32px] tracking-[0.2px] leading-[20px] font-semibold inline-block">
                  Foreign Travellers
                </div>
                <div className="absolute top-[calc(50%_-_9px)] right-[32px] tracking-[0.2px] leading-[20px] font-semibold text-grayscale-gray text-right inline-block w-20">
                  500
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[155px] left-[1362px] w-[169px] h-[1156px] overflow-hidden">
          <FormContainer1 />
        </div>
        <div className="absolute top-[155px] left-[46px] w-[1264px] h-[1156px] overflow-hidden">
          <TrendsContainer />
        </div>
      </div>
    </div>
  );
};

export default RouteSummary;
