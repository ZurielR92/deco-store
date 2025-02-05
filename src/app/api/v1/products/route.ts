import ProductModel from "@/models/product.model";
import { connect, disconnect } from "@/utils/mongo";
import { NextRequest, NextResponse } from "next/server";



export async function GET (req:NextRequest) {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page');
    const search = searchParams.get('search');
    const category = searchParams.get('category');

    let query = {};
    let sort ={}
    if(search) {
        query = {
        ...query,
        $text:{$search:search}
        }
        sort = {
        ...sort,
        $score:{$meta:'textScore'}
        }
    }
    if(category) {
        query = {
        ...query,
        category
        }
    }
    console.log(page)

    await connect();
    const products = await ProductModel.paginate({
      limit:20,
      page,
      query,
      sort,
      select:'title ref type images'
    });
    await disconnect();

    return NextResponse.json(products);

}