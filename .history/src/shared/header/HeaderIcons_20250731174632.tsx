
import Link from 'next/link';
import { BiShoppingBag } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

const HeaderIcons = () => {

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

                    <Link href='/cart' className='text-2xl relative'>
                    <BiShoppingBag />
                    <span className='iconDesign'>
                        {/* {cart?.length > 0? cart?.length : '0'} */}
                    </span>
                    </Link>
        </>
    );
};

export default HeaderIcons;