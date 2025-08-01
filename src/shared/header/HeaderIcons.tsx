
import { useAppSelector } from '@/redux/hooks/hooks';
import { RootState } from '@/redux/store';

import Link from 'next/link';
import { BiShoppingBag } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

const HeaderIcons = () => {
 const cartItems = useAppSelector((state: RootState) => state.cart.items);
    // const {cart,favorite} = useSelector((state:StateType)=>state?.onlineShop)
    // console.log(cart);
    return (
        <>
            <Link href='/favorite' className='text-2xl relative'>
                    <MdOutlineFavoriteBorder />
                    <span className='iconDesign'>
                       {/* {favorite?.length>0 ? favorite.length:'0'} */}
                    </span>
                    </Link>

                     <Link href="/checkout" className="relative inline-block text-2xl">
      <BiShoppingBag />
      <span
        className="
          absolute -top-2 -right-2
          bg-red-500 text-white text-xs font-bold
          w-5 h-5 flex items-center justify-center
          rounded-full shadow-md
        "
      >
        {cartItems?.length > 0 ? cartItems.length : "0"}
      </span>
    </Link>
        </>
    );
};

export default HeaderIcons;