const mongoose=require('mongoose');

// mongoose.connect('mongodb+srv://cerin-susan:cerinsusan@clusternew.aalc9so.mongodb.net/rithusDB?retryWrites=true&w=majority&appName=ClusterNew').then(()=>{
    mongoose.connect('mongodb+srv://cerin-susan:cerinsusan@clusternew.aalc9so.mongodb.net/rithusDB?retryWrites=true&w=majority&appName=ClusterNew').then(()=>{
    console.log('DB is connected')
}).catch((error)=>{
    console.log('Error in connection')
})

