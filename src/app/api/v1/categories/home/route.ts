import ProductModel from "@/models/product.model";
import { connect, disconnect } from "@/utils/mongo";
import { NextRequest, NextResponse } from "next/server";





export async function GET(req:NextRequest) {

    try {
        await connect();
        const news = await ProductModel.find().sort({createdAt:-1}).limit(8);

        const animals = await ProductModel.find({$text:{$search:'animales'}}).sort({createdAt:-1}).limit(8);

        const paints = await ProductModel.find({$text:{$search:'pintura pinturas'}}).sort({createdAt:-1}).limit(8);

        const nature = await ProductModel.find({$text:{$search:'naturaleza'}}).sort({createdAt:-1}).limit(8);

        const cities = await ProductModel.find({$text:{$search:'ciudades ciudad'}}).sort({createdAt:-1}).limit(8);


        await disconnect();
        
        return NextResponse.json({
            news,
            animals,
            paints,
            nature,
            cities
        })
    } catch (error) {
        return NextResponse.json(error)
    }



}