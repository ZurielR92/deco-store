import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
    isConnected: 0
}

export const connect = async() => {

    if ( mongoConnection.isConnected ) {
        console.log('Ya estabamos conectados');
        return;
    }

    if ( mongoose.connections.length > 0 ) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;

        if ( mongoConnection.isConnected === 1 ) {
            console.log('Usando conexión anterior');
            return;
        }

        await mongoose.disconnect();
    }

    //await mongoose.connect( process.env.MONGO_URL || 'mongodb+srv://zabdiva:KZHvSFadp3Cr4@ciudadcreativa.s0yik.mongodb.net/deco-store?retryWrites=true&w=majority&appName=deco-store');
    await mongoose.connect( 'mongodb+srv://zabdiva:KZHvSFadp3Cr4@ciudadcreativa.s0yik.mongodb.net/deco-store?retryWrites=true&w=majority&appName=deco-store');
    mongoConnection.isConnected = 1;
    console.log('Conectado a MongoDB:', process.env.MONGO_URL );
}

export const disconnect = async() => {
    
    if ( process.env.NODE_ENV === 'development' ) return;

    if ( mongoConnection.isConnected === 0 ) return;

    await mongoose.disconnect();
    mongoConnection.isConnected = 0;

    console.log('Desconectado de MongoDB');
}