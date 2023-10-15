import SideMenuContainer from "../components/SideMenuContainer";
import FormContainer from "../components/FormContainer";
import NewUsersContainer from "../components/NewUsersContainer";
import VisitorInsightsContainer1 from "../components/VisitorInsightsContainer1";
import ContainerCustomerSatisfactionT from "../components/ContainerCustomerSatisfactionT";
import TopProductsCard1 from "../components/TopProductsCard1";
import TargetVsRealityContainer1 from "../components/TargetVsRealityContainer1";

const Dashboard = () => {
  return (
    <div className="relative w-full h-[1311px] text-left text-xl text-primary-dark-shade font-xs-semibold">
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[1311px]">
        <div className="absolute top-[0px] left-[0px] bg-gray box-border w-[1920px] h-[1311px] overflow-hidden border-[1px] border-solid border-greys-blue-grey-300">
          <SideMenuContainer />
          <FormContainer iconId="/united1.svg" pageTitle="Dashboard" />
          <div className="absolute h-[26.77%] w-[33.59%] top-[42.26%] right-[46.72%] bottom-[30.97%] left-[19.69%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-color-white shadow-[0px_4px_20px_rgba(238,_238,_238,_0.5)] box-border border-[1px] border-solid border-whitesmoke" />
            <div className="absolute w-[91.32%] top-[calc(50%_-_149.5px)] right-[4.34%] left-[4.34%] h-[297px]">
              <div className="absolute top-[calc(50%_-_148.5px)] left-[0%] leading-[32px] font-semibold">
                Total Revenue
              </div>
              <div className="absolute h-[80.81%] w-full top-[19.19%] right-[0%] bottom-[0%] left-[0%] text-center text-xs text-primary-200">
                <div className="absolute h-[6.67%] w-[36.16%] top-[93.33%] right-[28.52%] bottom-[0%] left-[35.31%] text-left text-darkslategray-400 font-open-sans">
                  <div className="absolute h-full w-[40.38%] top-[0%] right-[59.62%] bottom-[0%] left-[0%] overflow-hidden">
                    <div className="absolute w-[122.09%] top-[calc(50%_-_9px)] left-[19.77%] leading-[16px] inline-block">
                      Local
                    </div>
                    <div className="absolute h-[68.75%] w-[12.79%] top-[12.5%] right-[87.21%] bottom-[18.75%] left-[0%] rounded-md bg-dodgerblue" />
                  </div>
                  <div className="absolute h-full w-[40.85%] top-[0%] right-[0%] bottom-[0%] left-[59.15%] overflow-hidden">
                    <div className="absolute w-[80.46%] top-[calc(50%_-_9px)] left-[19.54%] leading-[16px] inline-block">{`Foreign `}</div>
                    <div className="absolute h-[68.75%] w-[12.64%] top-[12.5%] right-[87.36%] bottom-[18.75%] left-[0%] rounded-md bg-mediumspringgreen-200" />
                  </div>
                </div>
                <div className="absolute h-[73.33%] w-full top-[0%] right-[0%] bottom-[26.67%] left-[0%] text-left">
                  <img
                    className="absolute h-[0.57%] w-[93.55%] top-[77.27%] right-[-0.08%] bottom-[22.16%] left-[6.54%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path-2-copy.svg"
                  />
                  <img
                    className="absolute h-[0.57%] w-[93.55%] top-[94.89%] right-[-0.08%] bottom-[4.55%] left-[6.54%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path-2-copy.svg"
                  />
                  <img
                    className="absolute h-[0.57%] w-[93.55%] top-[59.09%] right-[-0.08%] bottom-[40.34%] left-[6.54%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path-2-copy.svg"
                  />
                  <img
                    className="absolute h-[0.57%] w-[93.55%] top-[40.91%] right-[-0.08%] bottom-[58.52%] left-[6.54%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path-2-copy.svg"
                  />
                  <img
                    className="absolute h-[0.57%] w-[93.55%] top-[22.73%] right-[-0.08%] bottom-[76.7%] left-[6.54%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path-2-copy.svg"
                  />
                  <img
                    className="absolute h-[0.57%] w-[93.55%] top-[4.55%] right-[-0.08%] bottom-[94.89%] left-[6.54%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path-2-copy.svg"
                  />
                  <div className="absolute top-[calc(50%_-_88px)] left-[0%] leading-[16px]">
                    25k
                  </div>
                  <div className="absolute top-[calc(50%_-_56px)] left-[0%] leading-[16px]">
                    20k
                  </div>
                  <div className="absolute top-[calc(50%_+_8px)] left-[0%] leading-[16px]">
                    10k
                  </div>
                  <div className="absolute top-[calc(50%_-_24px)] left-[0%] leading-[16px]">
                    15k
                  </div>
                  <div className="absolute top-[calc(50%_+_40px)] left-[0%] leading-[16px]">
                    5k
                  </div>
                  <div className="absolute top-[calc(50%_+_72px)] left-[0%] leading-[16px]">
                    0
                  </div>
                </div>
                <div className="absolute w-[13.24%] top-[calc(50%_+_64px)] left-[6.62%] leading-[16px] inline-block">
                  Monday
                </div>
                <div className="absolute w-[13.24%] top-[calc(50%_+_64px)] left-[20.03%] leading-[16px] inline-block">
                  Tuesday
                </div>
                <div className="absolute w-[13.24%] top-[calc(50%_+_64px)] left-[33.28%] leading-[16px] inline-block">
                  Wednesday
                </div>
                <div className="absolute w-[13.24%] top-[calc(50%_+_64px)] left-[46.69%] leading-[16px] inline-block">
                  Thursday
                </div>
                <div className="absolute w-[13.24%] top-[calc(50%_+_64px)] left-[60.1%] leading-[16px] inline-block">
                  Friday
                </div>
                <div className="absolute w-[13.24%] top-[calc(50%_+_64px)] left-[73.34%] leading-[16px] inline-block">
                  Saturday
                </div>
                <div className="absolute w-[13.24%] top-[calc(50%_+_64px)] left-[86.76%] leading-[16px] inline-block">
                  Sunday
                </div>
                <div className="absolute h-[36.67%] w-[4.75%] top-[32.92%] right-[84.55%] bottom-[30.42%] left-[10.7%]">
                  <div className="absolute h-full w-[42.86%] top-[0%] right-[57.14%] bottom-[0%] left-[0%] rounded-sm bg-dodgerblue" />
                  <div className="absolute h-[90.91%] w-[42.86%] top-[9.09%] right-[0%] bottom-[0%] left-[57.14%] rounded-sm bg-mediumspringgreen-200" />
                </div>
                <div className="absolute h-[45%] w-[4.75%] top-[24.58%] right-[70.63%] bottom-[30.42%] left-[24.62%]">
                  <div className="absolute h-full w-[42.86%] top-[0%] right-[57.14%] bottom-[0%] left-[0%] rounded-sm bg-dodgerblue" />
                  <div className="absolute h-[69.44%] w-[42.86%] top-[30.56%] right-[0%] bottom-[0%] left-[57.14%] rounded-sm bg-mediumspringgreen-200" />
                </div>
                <div className="absolute h-3/5 w-[4.75%] top-[9.58%] right-[57.39%] bottom-[30.42%] left-[37.86%]">
                  <div className="absolute h-1/4 w-[42.86%] top-[75%] right-[57.14%] bottom-[0%] left-[0%] rounded-sm bg-dodgerblue" />
                  <div className="absolute h-full w-[42.86%] top-[0%] right-[0%] bottom-[0%] left-[57.14%] rounded-sm bg-mediumspringgreen-200" />
                </div>
                <div className="absolute h-[41.67%] w-[4.75%] top-[27.92%] right-[43.97%] bottom-[30.42%] left-[51.27%]">
                  <div className="absolute h-full w-[42.86%] top-[0%] right-[57.14%] bottom-[0%] left-[0%] rounded-sm bg-dodgerblue" />
                  <div className="absolute h-2/5 w-[42.86%] top-[60%] right-[0%] bottom-[0%] left-[57.14%] rounded-sm bg-mediumspringgreen-200" />
                </div>
                <div className="absolute h-[31.67%] w-[4.75%] top-[37.92%] right-[30.9%] bottom-[30.42%] left-[64.35%]">
                  <div className="absolute h-full w-[42.86%] top-[0%] right-[57.14%] bottom-[0%] left-[0%] rounded-sm bg-dodgerblue" />
                  <div className="absolute h-[93.42%] w-[42.86%] top-[6.58%] right-[0%] bottom-[0%] left-[57.14%] rounded-sm bg-mediumspringgreen-200" />
                </div>
                <div className="absolute h-[44.17%] w-[4.75%] top-[25.42%] right-[17.83%] bottom-[30.42%] left-[77.42%]">
                  <div className="absolute h-full w-[42.86%] top-[0%] right-[57.14%] bottom-[0%] left-[0%] rounded-sm bg-dodgerblue" />
                  <div className="absolute h-[80.19%] w-[42.86%] top-[19.81%] right-[0%] bottom-[0%] left-[57.14%] rounded-sm bg-mediumspringgreen-200" />
                </div>
                <div className="absolute h-[55.83%] w-[4.75%] top-[13.75%] right-[3.9%] bottom-[30.42%] left-[91.34%]">
                  <div className="absolute h-full w-[42.86%] top-[0%] right-[57.14%] bottom-[0%] left-[0%] rounded-sm bg-dodgerblue" />
                  <div className="absolute h-[52.24%] w-[42.86%] top-[47.76%] right-[0%] bottom-[0%] left-[57.14%] rounded-sm bg-mediumspringgreen-200" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[160px] left-[378px] w-[877px] h-[348px] text-sm text-darkslategray-300">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-color-white shadow-[0px_4px_20px_rgba(238,_238,_238,_0.5)] box-border w-[877px] h-[348px] overflow-hidden border-[1px] border-solid border-whitesmoke">
              <NewUsersContainer
                percentageChangeYesterday="0,5% from yesterday"
                metricValue="New Users"
                metricValueText="300"
                metricIconUrl="/icon.svg"
              />
              <NewUsersContainer
                percentageChangeYesterday="+1,2% from yesterday"
                metricValue="Tickets Purchased"
                metricValueText="25000"
                metricIconUrl="/icon1.svg"
                propLeft="454px"
                propBackgroundColor="#dcfce7"
              />
              <NewUsersContainer
                percentageChangeYesterday="+5% from yesterday"
                metricValue="Total Passengers"
                metricValueText="20000"
                metricIconUrl="/icon2.svg"
                propLeft="243px"
                propBackgroundColor="#fff4de"
              />
              <NewUsersContainer
                percentageChangeYesterday="+8% from yesterday"
                metricValue="Day Earnings"
                metricValueText="RS 1,000,000"
                metricIconUrl="/icon3.svg"
                propLeft="32px"
                propBackgroundColor="#ffe2e5"
              />
              <div className="absolute top-[32px] left-[745px] w-[100px] h-10">
                <div className="absolute top-[0px] left-[0px] rounded-lg box-border w-[100px] h-10 border-[1px] border-solid border-lightsteelblue" />
                <div className="absolute top-[10px] left-[16px] w-[68px] h-5">
                  <div className="absolute top-[0px] left-[24px] leading-[20px] font-medium">
                    Export
                  </div>
                  <div className="absolute top-[2px] left-[0px] w-4 h-4">
                    <div className="absolute top-[0px] left-[0px] w-4 h-4" />
                    <div className="absolute top-[1.33px] left-[1.33px] w-[13.33px] h-[13.33px]">
                      <div className="absolute top-[0px] left-[0px] w-[13.33px] h-[13.33px]" />
                      <img
                        className="absolute top-[1.33px] left-[1.33px] w-[10.67px] h-[10.67px]"
                        alt=""
                        src="/union1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[23px] left-[31px] w-[149px] h-[66px] text-xl text-primary-dark-shade">
                <div className="absolute top-[0px] left-[0px] leading-[32px] font-semibold">
                  Today’s Usage
                </div>
                <div className="absolute top-[36px] left-[2px] text-base leading-[30px] text-greys-blue-grey-700">
                  Usage Summery
                </div>
              </div>
            </div>
          </div>
          <VisitorInsightsContainer1 />
        </div>
        <ContainerCustomerSatisfactionT />
        <TopProductsCard1 />
        <TargetVsRealityContainer1 />
      </div>
    </div>
  );
};

export default Dashboard;
