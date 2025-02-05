import { ProductInterface } from "@/types";
import mongoose, { Schema } from "mongoose";
import { Pagination, mongoosePagination } from "mongoose-paginate-ts";

const productSchema = new Schema<ProductInterface>({
    title: {
        type: String,
        required: true
    },
    ref: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ['1 Pieza', '3 Piezas', '5 Piezas']
    },
    category: {
        type: String,
        required: true
    },
    tags: [
        {
            type:String
        }
    ],
    images: [
        {
            url:{type:String},
            alt:{type:String}
        }
    ],
    file: {
        type:String,
        required:true
    }
},{
    timestamps:true
})


productSchema.index({
    tags:'text',
    title:'text',
    category: 'text'
});

productSchema.plugin(mongoosePagination);

const ProductModel : any = mongoose.models.Product || mongoose.model<ProductInterface, Pagination<ProductInterface>>('Product',productSchema);
export default ProductModel as Pagination<ProductInterface>