import { model, Schema, Document} from 'mongoose';

export interface IUser extends Document {
    uid: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    status: boolean;
    typeAccount: string;
    location: {
        type: string;
        coordinates: number[];
    },
    settings:{
        minDistance: number;
        maxDistance: number;
        fcmToken: string;
    },
    createdAt: Date;
    crypt:{
        salt: string;
    }
}

const userSchema = new Schema<IUser>({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    status: {
        type: Boolean,
        default: true
    },
    typeAccount:{
        type: String,
        default: 'user'
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',
            required: false,
        },
        coordinates: {
            type: [Number],
            required: false,
            default: [-91.8130909, 18.6450665]
        }
    },
    settings:{
        minDistance:{
            type: Number,
            default: 1
        },
        maxDistance:{
            type: Number,
            default: 20000
        },
        fcmToken: {
            type: String,
            default: ''
        },
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    crypt:{
        salt:{
            type: String,
            default: ''
        }
    },
})

userSchema.methods.toJSON = function(){
    const { __v, _id, status, password, ...user } = this.toObject();
    user.uid = _id;
    return user;
}
export default model<IUser>("User", userSchema)