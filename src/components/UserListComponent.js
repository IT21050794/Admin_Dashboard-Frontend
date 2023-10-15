import { useMemo } from "react";

const UserListComponent = ({
  timeLabel,
  eventDates,
  eventDateLabel,
  personName,
  imageDimensions,
  locationLabel,
  propTop,
  propRight,
}) => {
  const tableTicketPriorityLowStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const chipPriorityHighStyle = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  return (
    <div
      className="absolute w-[calc(100%_-_2px)] top-[686px] right-[1px] left-[1px] h-[92px] text-left text-xs text-grayscale-gray-light font-bold-24"
      style={tableTicketPriorityLowStyle}
    >
      <div className="absolute top-[calc(50%_-_22px)] right-[31px] w-[1426px] h-11">
        <img
          className="absolute top-[calc(50%_-_12px)] right-[0px] w-6 h-6 overflow-hidden"
          alt=""
          src="/icon--more--vertical.svg"
        />
        <div className="absolute top-[calc(50%_+_4px)] right-[190px] tracking-[0.1px] leading-[16px] inline-block w-[140px] h-4">
          {timeLabel}
        </div>
        <div className="absolute top-[calc(50%_-_20px)] right-[190px] text-sm tracking-[0.2px] leading-[20px] font-semibold text-grayscale-black inline-block w-[140px]">
          {eventDates}
        </div>
        <div className="absolute top-[calc(50%_+_4px)] right-[1130px] tracking-[0.1px] leading-[16px] inline-block w-52 h-4">
          {eventDateLabel}
        </div>
        <div className="absolute top-[calc(50%_-_20px)] right-[1130px] text-sm tracking-[0.2px] leading-[20px] font-semibold text-grayscale-black inline-block w-52">
          {personName}
        </div>
        <img
          className="absolute top-[calc(50%_-_22px)] left-[0px] w-11 h-11 object-cover"
          alt=""
          src={imageDimensions}
        />
      </div>
      <img
        className="absolute w-full right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden h-px"
        alt=""
        src="/divider--line--horizontal3.svg"
      />
      <img
        className="absolute w-full top-[-0.5px] right-[0px] left-[0px] max-w-full overflow-hidden h-px"
        alt=""
        src="/divider--line--horizontal3.svg"
      />
      <div
        className="absolute top-[calc(50%_-_12px)] right-[67px] w-[119px] h-6 overflow-hidden text-center text-2xs text-color-white"
        style={chipPriorityHighStyle}
      >
        <div className="absolute h-full w-[calc(100%_-_13px)] top-[0px] right-[13px] bottom-[0px] left-[0px] rounded-81xl bg-iris-80" />
        <b className="absolute w-[calc(100%_+_5px)] top-[calc(50%_-_7px)] left-[-5px] tracking-[0.5px] uppercase flex items-center justify-center">
          {locationLabel}
        </b>
      </div>
    </div>
  );
};

export default UserListComponent;
