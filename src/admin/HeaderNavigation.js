const HeaderNavigation = () => {
  return (
    <div className="w-full relative bg-base-white box-border overflow-hidden flex flex-col items-center justify-start text-left text-xl text-typography-subheading font-text-xl-semibold border-b-[1px] border-solid border-gray-200">
      <div className="self-stretch flex flex-col items-start justify-between py-0 px-8 box-border min-h-[72px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[581px] flex flex-row items-center justify-start gap-[24px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/menu01.svg"
            />
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[32px] font-semibold">
                Dashboard
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="rounded-md bg-base-white overflow-hidden flex flex-row items-start justify-start p-2.5">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  loading="eager"
                  alt=""
                  src="/infocircle.svg"
                />
              </div>
              <div className="rounded-md bg-base-white overflow-hidden flex flex-row items-start justify-start p-2.5">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  loading="eager"
                  alt=""
                  src="/bell01.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <img
                className="w-10 h-10 rounded-181xl object-cover"
                loading="eager"
                alt=""
                src="/avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
