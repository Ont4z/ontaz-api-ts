import { model, Schema, Document} from 'mongoose';

export interface ICategory extends Document {
    uid: string;
    title: string,
    urlImg: string,
    color: string,
    status: boolean
    order: number
}

const categorySchema = new Schema<ICategory>({
    title: String,
    urlImg: String,
    color: String,
    status: {
        type: Boolean,
        default: true
    },
    order: Number
});

categorySchema.methods.toJSON = function(){
    const { __v, _id , ...category } = this.toObject();
    category.uid = _id;
    return category;
}

export default model<ICategory>("Category", categorySchema)