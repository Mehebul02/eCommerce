
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdFavorite } from "react-icons/md";
const Sidebar = () => {
 
    // const { favorite } = useSelector((state: StateType) => state?.onlineShop);
    // const [existingProduct, SetExistingProduct] = useState<Product | null>(null);
    // const dispatch =useDispatch()
    // useEffect(()=>{
    //     const availableProduct = favorite?.find((item)=>item?.id === product?.id)
    //     if(availableProduct){
    //         SetExistingProduct(availableProduct)
    //     }else{
    //         SetExistingProduct(null)
    //     }
    // },[favorite , product,dispatch,existingProduct])

   
    // const handleFavorite=()=>{
    //     dispatch(addToFavorite(product))
    //     if(existingProduct){
    //         toast.success('Removed from favorite successfully')
    //     }
    //     else{
    //         toast.success('Added to favorite successfully')
    //     }

    // }

    return (
        <div className="absolute right-2 bottom-44 flex flex-col border text-2xl border-blue-200 bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40">
            <button title="tedd" className="p-2 hover:bg-[#11405A] hover:text-white duration-200"> <FiShoppingCart /> </button>
            <button className="p-2 hover:bg-[#11405A] hover:text-white"> <LuEye /> </button>
           
           <button className="p-2 hover:bg-[#11405A] hover:text-white">  <MdFavorite /></button>
          
        </div>
    );
};

export default Sidebar;