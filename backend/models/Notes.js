const mongoose=require("mongoose");
const {Schema} = mongoose;

const NotesSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:String,
        default:Date.now
    },
});
module.exports=mongoose.model('user',NotesSchema);