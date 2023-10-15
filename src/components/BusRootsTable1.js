import BusRootViewContainer from "./BusRootViewContainer";
import FilteredCard from "./FilteredCard";

const BusRootsTable1 = () => {
  return (
    <div className="rounded-lg overflow-hidden flex flex-col items-start justify-start text-left text-sm text-brand-colors-moviebox-black font-helvetica-neue border-[1px] border-solid border-brand-colors-moviebox-highlight-50">
      <div className="bg-brand-colors-moviebox-highlight-10 w-[1184px] overflow-hidden flex flex-row items-center justify-between p-4 box-border">
        <div className="w-[250px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[10px]">
          <div className="relative rounded box-border w-3.5 h-3.5 overflow-hidden shrink-0 border-[1px] border-solid border-brand-colors-moviebox-highlight-50" />
          <div className="relative font-medium">Bus Route</div>
          <img
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src="/icon--arrow.svg"
          />
        </div>
        <div className="relative font-medium inline-block w-[200px] shrink-0">
          Bus Category
        </div>
        <div className="relative font-medium inline-block w-[150px] shrink-0">
          Popularity/Interest
        </div>
        <div className="relative font-medium inline-block w-[100px] shrink-0">
          Tickets Weekly
        </div>
        <div className="relative font-medium inline-block w-[100px] shrink-0">
          Tickets Daily
        </div>
        <div className="relative font-medium inline-block w-[150px] shrink-0">
          Last Updated Date
        </div>
        <div className="relative font-medium inline-block w-[63px] shrink-0 opacity-[0]">
          View
        </div>
      </div>
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <BusRootViewContainer
        routeName="138 Kottawa - Pettah"
        passengerCount="590,972,542"
        numericValue="21,452"
        date="21th May, 2023"
      />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <FilteredCard
        routeName="174 Borella - Kottawa"
        locationCode="88,458,892"
        locationText="32,892"
        eventDate="21th May, 2023"
      />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <FilteredCard
        routeName="993 Malabe - Maharagama"
        locationCode="22,008,901"
        locationText="345,321"
        eventDate="21th May, 2023"
        propBackgroundColor="#6a6a6a"
        propBackgroundColor1="#6a6a6a"
        propBackgroundColor2="#6a6a6a"
        propBackgroundColor3="#6a6a6a"
        propBackgroundColor4="#6a6a6a"
      />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <BusRootViewContainer
        routeName="336 Malabe - Kottawa"
        passengerCount="670,901"
        numericValue="2,453"
        date="21th May, 2023"
        propAlignItems="flex-start"
        propBackgroundColor="#e0e0e0"
        propBackgroundColor1="#e0e0e0"
        propBackgroundColor2="#e0e0e0"
        propBackgroundColor3="#e0e0e0"
        propBackgroundColor4="#e0e0e0"
        propBackgroundColor5="#e0e0e0"
        propBackgroundColor6="#e0e0e0"
        propBackgroundColor7="#e0e0e0"
      />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <BusRootViewContainer
        routeName="689 Hokandara - Nugegoda"
        passengerCount="56,893"
        numericValue="24,512,232"
        date="4th July, 2023"
        propAlignItems="center"
        propBackgroundColor="#6a6a6a"
        propBackgroundColor1="#6a6a6a"
        propBackgroundColor2="#6a6a6a"
        propBackgroundColor3="#6a6a6a"
        propBackgroundColor4="#6a6a6a"
        propBackgroundColor5="#6a6a6a"
        propBackgroundColor6="#e0e0e0"
        propBackgroundColor7="#e0e0e0"
      />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <FilteredCard
        routeName="170 Athurugiriya - Pettah"
        locationCode="789,234"
        locationText="13,043,145"
        eventDate="14th June, 2023"
        propBackgroundColor="#e0e0e0"
        propBackgroundColor1="#e0e0e0"
        propBackgroundColor2="#e0e0e0"
        propBackgroundColor3="#e0e0e0"
        propBackgroundColor4="#e0e0e0"
      />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <BusRootViewContainer
        routeName="190 Godagama - Pettah"
        passengerCount="130,901"
        numericValue="16,445"
        date="21th May, 2023"
        propAlignItems="flex-start"
        propBackgroundColor="#e0e0e0"
        propBackgroundColor1="#e0e0e0"
        propBackgroundColor2="#e0e0e0"
        propBackgroundColor3="#e0e0e0"
        propBackgroundColor4="#e0e0e0"
        propBackgroundColor5="#e0e0e0"
        propBackgroundColor6="#e0e0e0"
        propBackgroundColor7="#e0e0e0"
      />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <div className="w-[1184px] overflow-hidden flex flex-row items-center justify-between py-6 px-4 box-border">
        <div className="w-[250px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
          <div className="relative font-medium">17 Kandy- Panadura</div>
        </div>
        <div className="w-[200px] flex flex-row items-start justify-start gap-[8px] text-3xs text-brand-shades-moviebox-liberty-75">
          <div className="rounded-22xl bg-brand-shades-moviebox-liberty-10 flex flex-row items-center justify-start py-2 px-4">
            <div className="relative tracking-[0.05em] uppercase font-medium">
              Semi luxury
            </div>
          </div>
          <div className="rounded-22xl bg-brand-shades-moviebox-liberty-10 flex flex-row items-center justify-start py-2 px-4">
            <div className="relative tracking-[0.05em] uppercase font-medium">
              Luxury
            </div>
          </div>
        </div>
        <div className="w-[150px] flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
            <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
            <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
            <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
            <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
            <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
            <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-gray w-0.5" />
            <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-highlight-50 w-0.5" />
            <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-highlight-50 w-0.5" />
            <div className="self-stretch relative rounded-lg bg-brand-colors-moviebox-highlight-50 w-0.5" />
          </div>
        </div>
        <div className="relative inline-block w-[100px] shrink-0">200,901</div>
        <div className="relative inline-block w-[100px] shrink-0">6,542</div>
        <div className="relative inline-block w-[150px] shrink-0">
          21th May, 2023
        </div>
        <div className="rounded-lg bg-color-white flex flex-row items-center justify-center py-2 px-4 border-[1px] border-solid border-brand-colors-moviebox-highlight-50">
          <a href="/routeSummary"><div className="relative font-medium">View</div></a>
        </div>
      </div>
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <BusRootViewContainer
        routeName="154 Borella - Bamabalapitiya"
        passengerCount="890,342,576"
        numericValue="7,654,765"
        date="21th May, 2023"
        propAlignItems="flex-start"
        propBackgroundColor="#6a6a6a"
        propBackgroundColor1="#6a6a6a"
        propBackgroundColor2="#6a6a6a"
        propBackgroundColor3="#6a6a6a"
        propBackgroundColor4="#6a6a6a"
        propBackgroundColor5="#6a6a6a"
        propBackgroundColor6="#6a6a6a"
        propBackgroundColor7="#6a6a6a"
      />
      <div className="self-stretch relative bg-brand-colors-moviebox-highlight-50 h-px" />
      <div className="bg-brand-colors-moviebox-highlight-10 w-[1184px] overflow-hidden flex flex-row items-center justify-center p-4 box-border text-right text-grayscale-gray font-bold-24">
        <div className="relative w-[184px] h-6">
          <div className="absolute top-[0px] right-[0px] w-[184px] h-6">
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
      </div>
    </div>
  );
};

export default BusRootsTable1;
