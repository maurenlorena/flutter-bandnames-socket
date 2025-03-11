const mongoose = require('mongoose');


//Funcion que se encarga de hacer la conexion con mongoose
const dbConnection = async() => {
    try {

        //Conexion a la base de datos
        await mongoose.connect(process.env.DB_CNN);



        console.log('DB Online');

        
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos - hable con el admin');
    }
} 


module.exports = {
    dbConnection
}