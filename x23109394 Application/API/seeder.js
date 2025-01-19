import dotenv from 'dotenv';
dotenv.config();
console.log(process.env)
import { hobbies } from './data/hobby.js'
import hobbiesData from './models/hobbyDataModel.js'
import connectDB from "./config/db.js";

await connectDB()

 export const importData = async() =>{
    try{

        await hobbiesData.deleteMany()

        const hobbiesLevel = await hobbiesData.insertMany(hobbies)
        console.log("created",hobbiesLevel)
        console.log('Data Imported!')
        process.exit(0)
    }catch(error){
        console.log(`${error}`)
        process.exit(1)
    }
}

const destroyData = async() =>{
    try{

        await workshop.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit(1)
    }catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}