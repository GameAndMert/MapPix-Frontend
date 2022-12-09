export const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://localhost/mappix';
export const WS_URL  = process.env.NODE_ENV === 'development' ? 'ws://localhost:8080' : 'wss://localhost/mappix';
