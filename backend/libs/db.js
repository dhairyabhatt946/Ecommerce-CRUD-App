import mongoose from "mongoose";

const DbCon=async()=>{
    try {
        mongoose.connect("mongodb+srv://23010101023:Ug6zVB4zH7l44vUl@cluster0.tlxa8.mongodb.net/CSE_3A_105");
        console.log('Mongodb is connected')
        
    } catch (error) {
        console.log("Error in mongodb connection",error)
    }
}
export default DbCon