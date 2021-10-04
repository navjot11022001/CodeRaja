const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Navjot:Navjot%401102@cluster0.cwlmu.mongodb.net/visitorRecord?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify:false
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection ${err}`));