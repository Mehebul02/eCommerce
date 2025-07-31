import { BaseQueryApi } from '@reduxjs/toolkit/query/react';



  export type TMeta = {
    limit: number,
    page: number,
    total: number,
    totalPage: number,

}


export type TError = {
    data: {
        message: string,
        stack: string,
        success: boolean
    };
    status: number;
}

export type TResponse<T> = {
    data?: T;
    error: TError;
    meta?: TMeta;
    success: boolean;
    message: string;
}

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi

export type TQueryParams = {
    id: string;
    name: string;
    category: string;
    price: number;
    discountPercentage?: number;
    image: string[];
}

export type TUser ={
    name:string,
    email:string
}
