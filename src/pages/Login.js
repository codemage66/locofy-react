import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-full relative bg-brand-background-card-dark overflow-hidden flex flex-col items-center justify-start py-60 pr-[21px] pl-5 box-border gap-[41px] tracking-[normal] text-center text-[21px] text-base-white font-text-xs-medium mq600:gap-[20px]">
      <img
        className="w-full absolute my-0 mx-[!important] h-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image@2x.png"
      />
      <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[20px]">
        <div className="h-[43.2px] w-[42.8px] relative z-[1]">
          <img
            className="absolute top-[0px] left-[-0.5px] w-full h-full"
            loading="eager"
            alt=""
            src="/vector.svg"
          />
          <div className="absolute top-[32.16px] left-[4px] bg-khaki w-[6.7px] h-[6.7px] [transform:_rotate(-0.49deg)] [transform-origin:0_0] z-[1]" />
        </div>
        <h3 className="m-0 relative text-inherit leading-[36.73px] font-semibold font-inherit z-[1] mq450:text-[17px] mq450:leading-[29px]">
          Buzz Coworking
        </h3>
      </div>
      <form className="m-0 w-[536px] rounded-2xl bg-base-white flex flex-col items-center justify-start py-10 px-8 box-border gap-[40px] max-w-full z-[1] mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq600:gap-[20px]">
        <button className="cursor-pointer [border:none] py-0 pr-0 pl-px bg-[transparent] self-stretch flex flex-row items-center justify-center">
          <b className="relative text-5xl leading-[36px] font-text-xs-medium text-typography-heading text-left mq450:text-[19px] mq450:leading-[29px]">
            Login
          </b>
        </button>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
              <div className="relative text-sm leading-[24px] font-medium font-text-xs-medium text-typography-body text-left">
                Email Address
              </div>
              <div className="self-stretch rounded-xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden flex flex-row items-center justify-start py-2.5 pr-[13px] pl-[11px] gap-[8px] max-w-full border-[1px] border-solid border-gray-300">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-[26px] flex-1 flex flex-row items-center justify-start font-text-xs-medium text-base text-slategray min-w-[250px] max-w-full"
                  placeholder="olivia@gmail.com"
                  type="text"
                />
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
              </div>
            </div>
            <div className="self-stretch relative text-sm leading-[24px] font-text-xs-medium text-gray-600 text-left hidden">
              This is a hint text to help user.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
              <div className="relative text-sm leading-[24px] font-medium font-text-xs-medium text-typography-body text-left">
                Password
              </div>
              <div className="self-stretch rounded-xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden flex flex-row flex-wrap items-center justify-start py-2.5 pr-[13px] pl-[11px] gap-[8px] max-w-full border-[1px] border-solid border-gray-300">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <input
                  className="w-[calc(100%_-_44px)] [border:none] [outline:none] bg-[transparent] h-[26px] flex-1 flex flex-row items-center justify-start font-text-xs-medium text-base text-slategray min-w-[272px] max-w-full"
                  placeholder="*********"
                  type="text"
                />
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/eyeoff.svg"
                />
              </div>
            </div>
            <div className="self-stretch relative text-sm leading-[24px] font-text-xs-medium text-gray-600 text-left hidden">
              This is a hint text to help user.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <input
              className="m-0 h-6 w-6 relative rounded-lg box-border border-[1px] border-solid border-brand-divider"
              type="checkbox"
            />
            <div className="relative text-sm leading-[24px] font-medium font-text-xs-medium text-typography-body text-left">
              Remember Me
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[18px] pr-5 pl-[21px] bg-brand-brand-primary self-stretch rounded-xl shadow-[0px_6px_30px_rgba(42,_55,_119,_0.06)] overflow-hidden flex flex-row items-center justify-center gap-[8px]">
        <Link to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
            alt=""
          />
          <div className="relative text-sm leading-[20px] font-semibold font-text-xs-medium text-base-white text-left">
            Login
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
            alt=""
          />
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
