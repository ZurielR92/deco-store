import ProductModel from "@/models/product.model";
import { connect, disconnect } from "@/utils/mongo";
import { NextRequest, NextResponse } from "next/server";



export async function GET (req: NextRequest,{params}:{params:{ref:string}}) {
    await connect();
    const product = await ProductModel.findOne({ref:params.ref}).select({_id:0, file:0, createdAt:0, updatedAt:0}).lean();
    await disconnect();
    return NextResponse.json(product)
}