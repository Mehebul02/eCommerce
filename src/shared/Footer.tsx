
import { GoDotFill } from "react-icons/go";
import { BsEnvelopeAt } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import Container from "./Container";
import SocialLinks from "./SocialLinks";
import { navigation } from "../constants";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/assets";


const Footer = () => {
    return (
        <div className="bg-lightBg py-10 lg:py-20  pb-16  mt-20 border border-gray-200 shadow">

<Container className="flex flex-col lg:flex-row justify-between gap-6 " >
        <div className="flex flex-col items-start gap-y-5 w-52">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={100} height={100} className="w-20" />
          </Link>
          <p className="">
            Could you clarify what the short description is   for? For example, is it for your online   profile, portfolio, or a project description? This will help me tailor the description accordingly!
          </p>
          {/* <SocialLink/> */}
          <SocialLinks className="bg-themeWhite text-black border-[#115061]  inline-flex p-2 rounded-full hover:text-sky-600 hover:border-sky-300 duration-300 cursor-pointer"/>
        </div>
        <div>
          <h1>My Account</h1>
          <div className="mt-3 flex flex-col gap-y-2">
            {navigation?.map((item) => (
              <Link
                key={item?.title}
                href={item?.path}
                className="flex items-center gap-x-2  text-gray-700 hover:text-themeColor duration-200 font-medium"
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1>Information</h1>
          <div className="mt-3 flex flex-col gap-y-2">
            {navigation?.map((item) => (
              <Link
                key={item?.title}
                href={item?.path}
                className="flex items-center gap-x-2 text-gray-700 hover:text-themeColor duration-200 font-medium"
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1>Talk to Us</h1>
          <div className="mt-3 ">
            <div className="">
              <p className="text-sm gap-y-4">Got Questions? Call us</p>
              <h1>+8801642287450</h1>
            </div>
            <div className="mt-3">
              <p className="text-base flex items-center gap-x-3 gap-2 text-gray-600">
                <BsEnvelopeAt /> OnlineShop@suppert.com
              </p>
              <p className="text-base flex items-center gap-x-3 gap-2 text-gray-600">
                <GrLocation /> Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </Container>
        <h1 className="text-center">Copyright © 2024 Meh. All rights reserved</h1>

    </div>
    );
};

export default Footer;