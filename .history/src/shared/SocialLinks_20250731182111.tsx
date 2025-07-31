
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

import { twMerge } from "tailwind-merge";

const SocialLinks = ({className,}:{className?:string;}) => {
    const linksData=[
        {icon:<FaGithub/>, path:'https://github.com/Mehebul02'},
        {icon:<FaFacebook/>, path:'https://www.facebook.com/alif.islam.212'},
        {icon:<FaLinkedin/>, path:'https://www.facebook.com/alif.islam.212'}
    ]
    return (
        <div className="text-xl text-white/50 flex items-center gap-5 pt-5">
            {linksData?.map((item,index)=>(
                <Link key={index} ={item.path} target="_blank" className={twMerge("bg-themeWhite text-white border border-white/200 inline-flex p-2 rounded-full hover:text-sky-600 hover:border-sky-300 duration-300 cursor-pointer",className)}>{item.icon}  </Link>
            ))}
        </div>
    );
};

export default SocialLinks;