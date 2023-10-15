import { useMemo } from "react";

const NewUsersContainer = ({
  percentageChangeYesterday,
  metricValue,
  metricValueText,
  metricIconUrl,
  propLeft,
  propBackgroundColor,
}) => {
  const divStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const bgStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="absolute top-[132px] left-[665px] w-[180px] h-[184px] text-left text-xs text-primary-800 font-xs-semibold"
      style={divStyle}
    >
      <div
        className="absolute top-[0px] left-[0px] rounded-2xl bg-colors-purple-100 w-[180px] h-[184px]"
        style={bgStyle}
      />
      <div className="absolute top-[148px] left-[20px] leading-[16px] font-medium">
        {percentageChangeYesterday}
      </div>
      <div className="absolute top-[116px] left-[20px] text-base leading-[24px] font-medium text-darkslategray-100">
        {metricValue}
      </div>
      <div className="absolute top-[76px] left-[20px] text-5xl leading-[32px] font-semibold text-greys-blue-grey-900">
        {metricValueText}
      </div>
      <img
        className="absolute top-[20px] left-[20px] w-10 h-10"
        alt=""
        src={metricIconUrl}
      />
    </div>
  );
};

export default NewUsersContainer;
