'use client'

import { useState } from "react";
import { useGetAllProductQuery } from "../../redux/services/productManagementApi";
import Container from "../../shared/Container";
import { IProduct } from "../../types/products";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ProductCard from "./ProductCard";


const Products = () => {
    const [limit, setLimit] = useState(9);
    const {data:productData, isLoading} = useGetAllProductQuery({limit})
    const totalProduct = productData?.length
    console.log(totalProduct,'productData');
    if(isLoading){
        return <div className="flex justify-center items-center  h-screen">
            <AiOutlineLoading3Quarters className="animate-spin text-7xl"/>
        </div>
    }
    const handleSeeMore = () => {
        setLimit(prevLimit => prevLimit + 9); 
    };
    return (
        <Container className="mt-10">
            <h1 className="text-4xl font-sans mb-6">Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    
    {
        productData?.map((product:IProduct,indx:number)=>(<ProductCard key={indx} product={product}/>))
    }
</div>
{/* /* See More Button */} 
            {productData?.length > productData?.length && (
                <div className="flex justify-center mt-8">
                   <button onClick={handleSeeMore} className="flex justify-center items-center gap-3  cursor-pointer relative overflow-hidden px-6 py-3 text-[17px] font-medium uppercase transition-all duration-500 border rounded bg-transparent text-[#00A97F] border-[#00A97F] z-10 before:content-[''] before:w-[50px] before:h-[50px] before:bg-[#00A97F] before:rounded-full before:absolute before:top-[-1em] before:left-[-1em] before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] after:content-[''] after:w-[50px] after:h-[50px] after:bg-[#00A97F] after:rounded-full after:absolute after:left-[calc(100%+1em)] after:top-[calc(100%+1em)] after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-1000 after:ease-in-out after:z-[-1] hover:text-white hover:before:w-[410px] hover:before:h-[410px] hover:after:w-[410px] hover:after:h-[410px] active:brightness-90">
                                           See More 
                                       </button>
                </div>
            )}
    </Container>
    );
};

export default Products;