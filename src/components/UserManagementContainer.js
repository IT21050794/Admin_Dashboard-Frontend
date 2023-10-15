const UserManagementContainer = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[345px] h-[1311px] text-left text-lg text-greys-blue-grey-700 font-xs-semibold">
      <div className="absolute top-[0px] left-[0px] bg-color-white w-[345px] h-[1311px]" />
      <div className="absolute h-[16.09%] w-[64.64%] top-[20.37%] right-[15.07%] bottom-[63.54%] left-[20.29%]">
        <div className="absolute h-[15.17%] w-full top-[0%] right-[0%] bottom-[84.83%] left-[0%]">
          <img
            className="absolute h-full w-[14.35%] top-[0%] right-[85.65%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group.svg"
          />
          <div className="absolute top-[2.5px] left-[calc(50%_-_55.5px)]">
            User Management
          </div>
        </div>
        <div className="absolute top-[120px] left-[0px] w-[129px] h-8">
          <img
            className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
            alt=""
            src="/mdicogoutline3.svg"
          />
          <div className="absolute top-[2.5px] left-[calc(50%_-_8.5px)]">
            Settings
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
      </div>
      <div className="absolute top-[55px] left-[123px] text-11xl leading-[150%] font-semibold text-greys-blue-grey-900">
        MiBus
      </div>
      <img
        className="absolute top-[50px] left-[43px] w-14 h-14"
        alt=""
        src="/dummy-logo3.svg"
      />
    </div>
  );
};

export default UserManagementContainer;
