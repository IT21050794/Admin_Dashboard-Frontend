import { useMemo } from "react";

const FilteredCard = ({
  routeName,
  locationCode,
  locationText,
  eventDate,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackgroundColor3,
  propBackgroundColor4,
}) => {
  const rectangleDiv8Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDiv9Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const rectangleDiv10Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const rectangleDiv11Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const rectangleDiv12Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor4,
    };
  }, [propBackgroundColor4]);

  return (
    <div className="w-[1184px] overflow-hidden flex flex-row items-center justify-between py-6 px-4 box-border text-left text-sm text-brand-colors-moviebox-black font-helvetica-neue">
      <div className="w-[250px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
        <div className="relative font-medium">{routeName}</div>
      </div>
      <div className="w-[200px] flex flex-row items-start justify-start text-3xs text-brand-shades-moviebox-liberty-75">
        <div className="rounded-22xl bg-brand-shades-moviebox-liberty-10 flex flex-row items-center justify-start py-2 px-4">
          <div className="relative tracking-[0.05em] uppercase font-medium">
            Semi luxury
          </div>
        </div>
      </div>
      <div className="w-[150px] flex flex-row items-start justify-start">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
          <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
          <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
          <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5"
            style={rectangleDiv8Style}
          />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5"
            style={rectangleDiv9Style}
          />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5"
            style={rectangleDiv10Style}
          />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5"
            style={rectangleDiv11Style}
          />
          <div
            className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5"
            style={rectangleDiv12Style}
          />
          <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-highlight-50 w-0.5" />
        </div>
      </div>
      <div className="relative inline-block w-[100px] shrink-0">
        {locationCode}
      </div>
      <div className="relative inline-block w-[100px] shrink-0">
        {locationText}
      </div>
      <div className="relative inline-block w-[150px] shrink-0">
        {eventDate}
      </div>
      <div className="rounded-lg bg-color-white flex flex-row items-center justify-center py-2 px-4 border-[1px] border-solid border-brand-colors-moviebox-highlight-50">
        <a href="/routeSummary"><div className="relative font-medium">View</div></a>
      </div>
    </div>
  );
};

export default FilteredCard;
