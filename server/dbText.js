import mongoose from "mongoose";

const cicadaSchema = mongoose.Schema({
  content: String,
  name: String,
});

export default mongoose.model("content", cicadaSchema);
