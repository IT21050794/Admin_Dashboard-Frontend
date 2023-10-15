import { useMemo } from "react";

const BusRootViewContainer = ({
  routeName,
  passengerCount,
  numericValue,
  date,
  propAlignItems,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackgroundColor3,
  propBackgroundColor4,
  propBackgroundColor5,
  propBackgroundColor6,
  propBackgroundColor7,
}) => {
  const tagsStyle = useMemo(() => {
    return {
      alignItems: propAlignItems,
    };
  }, [propAlignItems]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const rectangleDiv3Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const rectangleDiv4Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor4,
    };
  }, [propBackgroundColor4]);

  const rectangleDiv5Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor5,
    };
  }, [propBackgroundColor5]);

  const rectangleDiv6Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor6,
    };
  }, [propBackgroundColor6]);

  const rectangleDiv7Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor7,
    };
  }, [propBackgroundColor7]);

  return (
    <div className="w-[1184px] overflow-hidden flex flex-row items-center justify-between py-6 px-4 box-border text-left text-sm text-brand-colors-moviebox-black font-helvetica-neue">
      <div className="w-[250px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
        <div className="relative font-medium">{routeName}</div>
      </div>
      <div
        className="w-[200px] flex flex-row items-start justify-start text-3xs text-brand-shades-moviebox-liberty-75"
        style={tagsStyle}
      >
        <div className="rounded-22xl bg-brand-shades-moviebox-liberty-10 flex flex-row items-center justify-start py-2 px-4">
          <div className="relative tracking-[0.05em] uppercase font-medium">
            Semi luxury
          </div>
        </div>
      </div>
      <div className="w-[150px] flex flex-row items-start justify-start gap-[8px] text-xs text-brand-shades-moviebox-liberty-50">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
          <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5"
            style={rectangleDivStyle}
          />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5"
            style={rectangleDiv1Style}
          />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5"
            style={rectangleDiv2Style}
          />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5"
            style={rectangleDiv3Style}
          />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5"
            style={rectangleDiv4Style}
          />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5"
            style={rectangleDiv5Style}
          />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-highlight-50 w-0.5"
            style={rectangleDiv6Style}
          />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-highlight-50 w-0.5"
            style={rectangleDiv7Style}
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src="/phtrendupbold.svg"
          />
          <div className="relative font-medium">Trending</div>
        </div>
      </div>
      <div className="relative inline-block w-[100px] shrink-0">
        {passengerCount}
      </div>
      <div className="relative inline-block w-[100px] shrink-0">
        {numericValue}
      </div>
      <div className="relative inline-block w-[150px] shrink-0">{date}</div>
      <div className="rounded-lg bg-color-white flex flex-row items-center justify-center py-2 px-4 border-[1px] border-solid border-brand-colors-moviebox-highlight-50">
        <a href="/routeSummary"><div className="relative font-medium">View</div></a>
      </div>
    </div>
  );
};

export default BusRootViewContainer;
