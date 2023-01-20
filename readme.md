# Clothing MERN Application

This is a MERN application .
This a Clothing App that shows you different luxury clothes you can search by name, theme etc...
## Prerequisites

- A MongoDB connection string

## Running the application

1. Clone this repository

2. Create a `.env` file in the folder 'ipactserver' and set the following environment variables:
   PORT
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=secret_key_for_jwt

3. Run the following command in the root of the project:
   npm run dev : for the ipactserver 
   npm start : for the ipactFront

This will start the application and it will be available on `http://localhost:3000`



To stop the application, you can use the following command:
docker-compose down
