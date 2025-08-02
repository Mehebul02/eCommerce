'use client'
import { Button, Dialog, DialogPanel } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { RiMenu3Fill } from 'react-icons/ri';
import SocialLinks from '../SocialLinks';
import { logo } from '@/assets';
import Image from 'next/image';
import { navigation } from '@/constants';
import HeaderIcons from './HeaderIcons';


const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div 
                onClick={toggleMenu} 
                className="text-2xl cursor-pointer md:hidden text-gray-500 hover:text-themeColor transition duration-200"
            >
                <RiMenu3Fill />
            </div>

            <Dialog 
                open={isOpen} 
                as="div" 
                className="relative z-50 md:hidden text-white/80" 
                onClose={() => setIsOpen(false)}
            >
                <div className="fixed inset-0 z-10 flex items-start justify-center p-4 bg-black/90 w-screen overflow-y-auto top-0">
                    <DialogPanel 
                        className="w-full max-w-md rounded-xl bg-black border border-indigo-300 p-4 backdrop-blur-2xl transition duration-300 ease-out"
                    >
                        <div className="flex justify-between items-center">
                        <Image src={logo} alt="logo" className='w-20'/>
                            <Button 
                                onClick={() => setIsOpen(false)} 
                                className="text-white/40 text-2xl hover:bg-red-600 transition duration-300 border border-white/20 rounded-sm hover:border-white/40"
                            >
                                <MdClose />
                            </Button>
                        </div>
                        
                        <div className="flex flex-col gap-5 pt-5">
                            {navigation?.map((item) => (
                                <Link 
                                    key={item.title} 
                                    href={item.path || "#"} 
                                    className="hover:text-sky-600 relative group flex items-center gap-2"
                                >
                                    <span className="w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:border-sky-700"></span> 
                                    {item?.title}
                                    <span className='absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-sky-600 duration-200 '></span>
                                </Link>
                            ))}
                        </div>
                        {/* social link  */}
                        <SocialLinks/>
                       <div className="flex items-center gap-5 pt-5">
                         <HeaderIcons/>
                       </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};

export default MobileNavigation;
