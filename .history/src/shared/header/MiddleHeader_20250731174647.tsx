import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { LiaUser } from "react-icons/lia";


// import HeaderIcons from "./HeaderIcons";
import Container from "../../shared/Container";
import MobileNavigation from "./moblieNavigation";
import HeaderIcons from "./HeaderIcons";
// import { logo } from "../../assets/images";


const MiddleHeader = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className='border-b-[1px] border-b-gray-400'>
            <Container className='py-5 flex justify-between items-center gap-4 md:gap-6 lg:gap-20'>
                <Link to={'/'}>  <img src={logo} alt="logo" className="w-20 opacity-98 hover:opacity-100" /></Link>

                {/* Search ber  */}
                <div className='hidden md:inline-flex flex-1 h-10 relative'>
                    <input
                        type="text"
                        placeholder="Search products here..."
                        className="w-full h-full outline-none border-2 border-[#11405A] px-4"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    {searchValue && (
                        <RiCloseLine
                            onClick={() => setSearchValue("")}
                            className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
                        />
                    )}
                    <span className="w-10 h-10 bg-[#11405A] inline-flex items-center justify-center text-white absolute top-0 right-0 border border-themeColor hover:bg-themeColor duration-200 cursor-pointer">
                        <RiSearchLine />
                    </span>
                </div>

                <div className='hidden md:inline-flex items-center gap-3'>
                    {/* user  */}
                    <div className='flex items-center gap-3'>
                        <div className='border-2 border-gray-700 p-2 rounded-full text-xl'>
                            <LiaUser />
                        </div>
                        <div>
                            <p className='text-xs'>Hello, Guests</p>
                            <p className='text-sm'>Login / Register</p>
                        </div>
                    </div>
                    {/* header Icon */}

                <HeaderIcons/>

                </div>
                {/* Mobile navigation  */}
                <MobileNavigation />
            </Container>
        </div>
  );
};

export default MiddleHeader;
