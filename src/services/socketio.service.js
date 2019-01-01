import io from 'socket.io-client';
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'

const host = 'http://localhost:3030';
const socket = io(host, { transports: ['websocket'] });

// Set up Feathers client side
const FeathersIO = feathers();

// Register socket.io
FeathersIO.configure(socketio(socket));

// Authentication
FeathersIO.configure(auth({
  storage: localStorage
}))

export default FeathersIO