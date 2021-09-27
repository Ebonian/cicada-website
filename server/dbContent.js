import mongoose from "mongoose";

const cicadaSchema = mongoose.Schema({
  content: String,
  name: String,
  type: Number,
});

//collection
export default mongoose.model("content", cicadaSchema);
