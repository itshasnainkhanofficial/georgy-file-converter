import Image from "next/image";
import Link from "next/link";

import { Footer } from "../Footer";
import chromeIcon from "../../public/images/chrome.png";

import "./style.css";

export const FileConverter = () => {
  return (
    <main className="bg-white">
      <nav className="w-full h-[75px] mb-[20px] mt-[15px] shadow-[0px_5px_4px_#929797]">
        <div className="flex items-center justify-between md:justify-around px-[10px] md:px-[150px]">
          <p className="text-[20px] md:text-[28px] font-bold font-sans">
            FileConverterOnline
          </p>
          <Image className="h-[60px]  w-[180px] md:w-auto" src={chromeIcon} alt="icon" />
        </div>
      </nav>
      <div className="bgImg">
        <div
          className="w-[360px]  md:w-[465px] xl:w-[780px] m-auto  h-[620px] rounded-[30px] bg-white 
        shadow-[0px_5px_4px_#929797]"
        >
          <div className="p-[70px] text-container">
            <p className="text-[20px] md:text-[44px] text-center font-sans font-medium leading-relaxed md:leading-[52px]">
              Convert Files Quickly & Easily
            </p>
            <p className=" text-[#727171] text-[14px] md:text-[22px] font-medium leading-[22px] text-center pt-[20px]">
              Download safely from the
              <span> Chrome Web Store</span>
            </p>
            <p
              className="pt-[20px] font-normal text-[#727171]
             text-[14px] leading-[22px] text-center"
            >
              FileConverterOnline provides file conversions and promos.
              <br /> To learn more, see our
              <Link
                className="underline"
                href="https://www.fileconverteronline.net/terms-of-use"
              >
                EULA
              </Link>
              and
              <Link
                className="underline"
                href="https://www.fileconverteronline.net/privacy-policy"
              >
                Privacy Policy
              </Link>
            </p>
            <div className="flex justify-center items-center">
              <button
                className="bg-[#1b68d2] hover:bg-[#EA4235] text-[14px]
                 xl:text-[22px] text-center rounded-[30px] 
              uppercase pt-[10px] pb-[10px] md:pt-[19px] md:pb-[19px] font-medium
               text-[#fff] w-[330px] md:w-[240px] xl:w-[360px]
              mt-[20px] xl:mt-[50px]"
                type="button"
              >
                Add to Chrome - It's free
              </button>
            </div>
            <p className="text-center pt-[25px] xl:pt-[50px] text-[#727171] text-[22px] font-normal">
              STEPS 1 TO 3
            </p>
            <ul
              className="flex flex-col xl:flex-row md:justify-center gap-[12px]
             xl:gap-0 xl:justify-around 
             xl:items-center pt-[16px] xl:pt-[40px]"
            >
              <li className="flex items-center gap-[10px]">
                <p
                  className="bg-[#5589F7] w-[33px] h-[33px] text-center rounded-[100%]
                text-[20px] text-[#fff]"
                >
                  1
                </p>
                <p className="text-[10px] md:text-[14px] text-[#727171] uppercase">
                  {" "}
                  Click 'Add to Chrome'
                </p>
              </li>
              <li className="flex items-center gap-[10px]">
                <p
                  className="bg-[#5589F7] w-[33px] h-[33px] text-center rounded-[100%]
                text-[20px] text-[#fff]"
                >
                  2
                </p>
                <p className="text-[10px] md:text-[14px] text-[#727171] uppercase">
                  Add Extension
                </p>
              </li>
              <li className="flex items-center gap-[10px]">
                <p
                  className="bg-[#5589F7] w-[33px] h-[33px] text-center rounded-[100%]
                text-[20px] text-[#fff]"
                >
                  3
                </p>
                <p className="text-[10px] md:text-[14px] text-[#727171] uppercase">
                  enjoy!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
