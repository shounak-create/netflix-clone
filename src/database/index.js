import mongoose from "mongoose";

const connecttoDb = async () =>{
    try {
        await mongoose.connect(
            "mongodb+srv://shounakpandit47:UMYAN9qwqUYnfpro@cluster0.jwyziuf.mongodb.net/"
        )
        console.log("mongodb is connected...");
    } catch (error) {
        console.log(error);
    }
}

export default connecttoDb;