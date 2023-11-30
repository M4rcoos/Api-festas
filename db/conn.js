const mongoose = require('mongoose')
require('dotenv').config();

async function main(){
  try{
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true, useUnifiedTopology: true
})
  }catch(error){
    console.log(`erro:${error}` )
  }

}

module.exports = main