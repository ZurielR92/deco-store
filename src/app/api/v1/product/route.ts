import ProductModel from "@/models/product.model";
import { connect, disconnect } from "@/utils/mongo";
import { NextRequest, NextResponse } from "next/server";




export async function POST ( req: NextRequest ) {
    const body = await req.json();
    console.log(body)
    try {
        await connect();
        const newProduct = new ProductModel(body);
        const savedProduct = await newProduct.save();
        await disconnect();
        console.log(savedProduct)
        return NextResponse.json(savedProduct)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error,{status:500})
    }
}


export async function GET (req: NextRequest,{params}:{params:{ref:string}}) {
    await connect();
    const product = await ProductModel.findOne({ref:params.ref}).lean();
    await disconnect();
    return NextResponse.json(product)
}