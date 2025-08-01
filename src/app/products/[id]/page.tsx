'use client'
import { MdStar } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useParams } from "next/navigation";
import { useGetSingleProductQuery } from "@/redux/services/productManagementApi";
import Container from "@/shared/Container";

import Image from "next/image";
import { useAppDispatch, } from "@/redux/hooks/hooks";
import { addToCart } from "@/redux/feature/cartSlice";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetSingleProductQuery(id);
const dispatch = useAppDispatch();
 

  const handleAdd = () => {
    dispatch(addToCart({ id: product?.id,image: product?.image, name: product?.title, price: product?.price, quantity: 1 }));
    toast.success("Product added to cart");
  };
 if(isLoading){
        return <div className="flex justify-center items-center  h-screen">
            <AiOutlineLoading3Quarters className="animate-spin text-7xl"/>
        </div>
    }

  return (
    <Container className="py-12">
      {/* Product Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
       <div className="flex justify-center items-center">
        <Image src={product?.image} alt="productImage" width={500} height={500} className="w-full h-64 object-contain"/>
       </div>

        {/* Product Information */}
        <div className="flex flex-col gap-6">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800">{product?.title}</h1>

          {/* Rating and Views */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
  {/* Rating Stars */}
  <div className="flex items-center">
    {Array.from({ length: 5 }).map((_, index) => (
      <MdStar
        key={index}
        className={`w-5 h-5 ${
          index + 1 <= Math.round(product?.rating?.rate)
            ? 'text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ))}
  </div>

  <span className="text-gray-500 text-sm">
    {product?.rating?.rate?.toFixed(1)} Rating ({product?.rating?.count} Reviews)
  </span>
</div>


            {/* Viewers
            <div className="flex items-center text-gray-500 text-sm">
              <FaRegEye className="mr-2" /> 250+ people are viewing this right now
            </div> */}
          </div>

          {/* Price & Discount */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-sky-600">${product?.price}</span>
            <span className="text-green-600 font-semibold text-sm">
              Save {product?.discountPercentage}%!
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product?.description}</p>

          {/* Extra Details */}
          <div className="space-y-2 text-sm text-gray-700">
            
            <p><strong>Category:</strong> {product?.category}</p>
           
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6 space-x-10">
          <button onClick={handleAdd} className="bg-[#F45E2D] cursor-pointer text-white py-3 px-8 rounded-full text-sm uppercase font-semibold hover:bg-sky-700 transition">
              Add to Cart
            </button>
         
          </div>

          {/* Payment Safety Note */}
          <div className="bg-gray-100 p-4 rounded-md text-center mt-6">
            <p className="text-gray-600 font-medium">Guaranteed Safe & Secure Checkout</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;