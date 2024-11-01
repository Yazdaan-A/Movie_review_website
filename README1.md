Movie Review Website
A web application for reviewing and discussing movies.
Features
User authentication (registration and login)
Movie search and details
Upcoming movies and latest news
Add and view comments for each movie
Installation
Backend
Clone the repository:
bash
git clone https://github.com/Yazdaan-A/Movie_review_website.git

1.Navigate to the backend directory:
bash:
cd Movie_review_website/backend

2.Install the dependencies:
bash:
npm install

3.Create a .env file in the backend directory with the following content:
plaintext:
MONGODB_URI=mongodb+srv://Yazdaan:Movieyazdaan@cluster0.safny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_jwt_secret_key
TMDB_API_KEY=4707ff4fc20b0735b93269395a573fe8

4.Start the backend server:
bash:
node server.js



Frontend
1.Navigate to the frontend directory:
bash:
cd Movie_review_website

2.Install the dependencies:
bash:
npm install

3.Start the frontend server:
bash:
npm start
Usage
Open your web browser and navigate to http://localhost:3000.
Register a new account or log in with an existing account.
Search for movies, view details, and add comments.
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
License
This project is licensed under the MIT License.
