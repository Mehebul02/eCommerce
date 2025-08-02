import { IProduct } from "../../types/products";
import AddToCartButton from "../../components/products/AddToCartButton";
import Sidebar from "../../components/products/Sidebar";
import Link from "next/link";
import Image from "next/image";




interface ProductCardProps {
    product: IProduct;
}


const ProductCard = ({ product }: ProductCardProps) => {
    console.log("Show card product", product);

    return (

        <div>

           <Link href={`/products/${product?.id}`} className="group">
           <div className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md overflow-hidden group relative">
               
                <Image src={product?.image} alt="productImage" width={500} height={500} className="w-full h-64 object-contain hover:scale-110 duration-300"></Image>
                {/* sidebar  */}
                <Sidebar />
                <p className="absolute top-2 right-2 bg-[#2BB04A] text-white px-3 py-1 text-xs rounded-md">
                    ${product?.discountPercentage}

                </p>

                {/* description  */}
                <div className="border-t border-gray-200  py-2 px-4 flex flex-col justify-between h-40 font-jost">
                    <div>
                        <p className="text-md capitalize text-gray-600">{product?.category}</p>
                        <h2 className="text-md font-semibold">{product?.title}</h2>
                        <h2 className="text-md text-[#28A04D] font-semibold ">${product?.price}</h2>
                        {/* <ProductPrice product={product.price}/> */}
                    </div>
                    {/* <AddToCartButton product={product}/> */}
                    <AddToCartButton />
                </div>
            </div>
           </Link>
            
        </div>
    );
};

export default ProductCard;