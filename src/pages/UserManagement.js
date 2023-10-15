//import DashboardContainer from "../components/DashboardContainer";
import FormContainer from "../components/FormContainer";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import UserListComponent from "../components/UserListComponent";
import Container3 from "../components/Container3";
import SideMenuContainer from "../components/SideMenuContainer";

const UserManagement = () => {
  return (
    <div className="relative bg-gray box-border w-full h-[1311px] overflow-hidden text-left text-lg text-color-white font-xs-semibold border-[1px] border-solid border-greys-blue-grey-300">
      <SideMenuContainer />
      <FormContainer
        iconId="/united2.svg"
        pageTitle="User Managment"
        propColor="#151d48"
      />
      <div className="absolute w-[calc(100%_-_430px)] top-[155px] right-[44px] left-[386px] h-[1096px] overflow-hidden text-sm text-grayscale-gray-dark font-bold-24">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] text-brand-colors-moviebox-gray font-helvetica-neue">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-color-white box-border border-[1px] border-solid border-grayscale-divider" />
          <div className="absolute top-[21px] left-[974px] rounded-lg box-border w-[276px] overflow-hidden flex flex-row items-center justify-start p-0 gap-[8px] border-[1px] border-solid border-brand-colors-moviebox-highlight-50">
            <input
              type="text"
              placeholder="Search"
              className="relative outline-none bg-transparent border-none text-brand-colors-moviebox-black font-medium flex-grow"
            />
            <button
              className="relative bg-brand-colors-moviebox-highlight-10 p-2 rounded-lg font-medium text-brand-colors-moviebox-black hover:bg-brand-colors-moviebox-highlight-20"
              style={{ order: 1 }}
            >
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/phmagnifyingglassbold.svg"
              />
            </button>
          </div>
        </div>
        <Container1 />
        <Container />
        <UserListComponent
          timeLabel="11:30 AM"
          eventDates="May 25, 2019"
          eventDateLabel="on 22.05.2019"
          personName="Sam Smith"
          imageDimensions="/avatar--woman--6@2x.png"
          locationLabel="kandy"
        />
        <UserListComponent
          timeLabel="7:30 PM"
          eventDates="May 26, 2019"
          eventDateLabel="on 24.05.2019"
          personName="Robert Downey"
          imageDimensions="/avatar--woman--3@2x.png"
          locationLabel="Maharagama"
          propTop="318px"
          propRight="74px"
        />
        <div className="absolute top-[37px] right-[32px] w-[58px] h-5">
          <div className="absolute top-[0px] right-[0px] tracking-[0.2px] leading-[20px] font-semibold">
            Filter
          </div>
          <img
            className="absolute top-[1px] right-[42px] w-4 h-4 overflow-hidden"
            alt=""
            src="/icon--filter.svg"
          />
        </div>
        <div className="absolute top-[37px] right-[122px] w-[53px] h-5">
          <div className="absolute top-[0px] right-[0px] tracking-[0.2px] leading-[20px] font-semibold">
            Sort
          </div>
          <img
            className="absolute top-[1px] right-[37px] w-4 h-4 overflow-hidden"
            alt=""
            src="/icon--sort.svg"
          />
        </div>
        <div className="absolute top-[1037px] right-[32px] w-[371px] h-6 text-grayscale-gray">
          <div className="absolute top-[3px] right-[232px] w-[139px] h-[18px]">
            <div className="absolute top-[0px] right-[33px] tracking-[0.3px] leading-[20px] inline-block w-[106px] h-[18px]">
              Rows per page:
            </div>
            <div className="absolute top-[0px] right-[15px] tracking-[0.3px] leading-[20px] text-grayscale-gray-dark text-right inline-block w-2.5 h-[18px]">
              7
            </div>
            <img
              className="absolute top-[3px] right-[0px] w-3 h-3 overflow-hidden"
              alt=""
              src="/icon--dropdown.svg"
            />
          </div>
          <div className="absolute top-[0px] right-[0px] w-[184px] h-6 text-right">
            <div className="absolute top-[3px] right-[84px] tracking-[0.3px] leading-[20px] inline-block w-[100px] h-[18px]">
              1-7 of 1240
            </div>
            <img
              className="absolute top-[0px] right-[36px] w-6 h-6 overflow-hidden"
              alt=""
              src="/icon--arrow--left.svg"
            />
            <img
              className="absolute top-[0px] right-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/icon--arrow--right.svg"
            />
          </div>
        </div>
        <b className="absolute w-[calc(100%_-_722px)] top-[32px] left-[32px] text-lgi tracking-[0.4px] inline-block text-grayscale-black">
          All Users
        </b>
        <UserListComponent
          timeLabel="5:00 PM"
          eventDates="May 25, 2019"
          eventDateLabel="on 24.05.2019"
          personName="Christian Bale"
          imageDimensions="/avatar--man--7@2x.png"
          locationLabel="pettah"
          propTop="410px"
          propRight="73px"
        />
        <UserListComponent
          timeLabel="2:00 PM"
          eventDates="May 25, 2019"
          eventDateLabel="on 23.05.2019"
          personName="Chris Evans"
          imageDimensions="/avatar--man--4@2x.png"
          locationLabel="malabe"
          propTop="594px"
          propRight="68px"
        />
        <Container3 />
        <div className="absolute w-[calc(100%_-_2px)] top-[104px] right-[1px] left-[1px] h-[30px] text-grayscale-gray">
          <b className="absolute top-[0px] right-[1161px] tracking-[0.2px] inline-block w-52">
            User name
          </b>
          <b className="absolute top-[0px] right-[77px] tracking-[0.2px] inline-block w-[104px]">
            Town
          </b>
          <b className="absolute top-[0px] right-[221px] tracking-[0.2px] inline-block w-[140px]">
            Joined Date
          </b>
          <img
            className="absolute w-full top-[29.25px] right-[0px] left-[0px] max-w-full overflow-hidden h-[1.5px]"
            alt=""
            src="/divider--line--horizontal5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
