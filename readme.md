# AppGallery MERN Application

This is a MERN application that uses Docker Compose to run the application.
This an AppGallery that shows you different from images you can search by name, theme etc...
when you hover on the image you can see the author name and his profile picture 
## Prerequisites

- Docker and Docker Compose installed on your machine
- A MongoDB connection string

## Running the application

1. Clone this repository

2. Create a `.env` file in the folder 'opusserver' and set the following environment variables:
   PORT
   MONGO_URI=your_mongo_connection_string
   UNSPLASH_URL=your_unsplash_url_string
   accessKey=access_key_for_unsplash

3. Run the following command in the root of the project:
   docker compose up

This will start the application and it will be available on `http://localhost:3000`

## Stopping the application

To stop the application, you can use the following command:
docker-compose down
