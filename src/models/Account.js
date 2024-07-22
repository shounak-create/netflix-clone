import mongoose from "mongoose";
import moongoose from "moongoose";

const AccountSchema = new moongoose.Schema(
    {
        uid:String,
        name:String,
        pin:String,
    },
    {timeStamps:true}
);

const Account = moongoose.models.Account || mongoose.model('Account', AccountSchema)

export default Account;