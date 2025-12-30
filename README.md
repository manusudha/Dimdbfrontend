# 🎬 D-IMDb Project

## 🚀 Live Demo 
**Frontend:** [https://dimdbfrontend.vercel.app/](https://dimdbfrontend.vercel.app/)



---

## 👤 User Functionality 
* **IMDb Integration:** View movie details fetched from the IMDb Top 250 dataset.
* **Advanced Search:** Search for movies by title or description with optimized query performance.
* **Smart Sorting:** Sort the catalog by Name, Rating, Release Date, and Duration.
* **Pagination:** Smooth browsing experience with server-side pagination.
* **Responsive Design**
* **Secure Dashboard:** Accessible only via JWT-authenticated admin accounts.
* **Movie Management:** Full CRUD (Create, Read, Update, Delete) capabilities.
* **Protected Routes:** Frontend and backend guards to prevent unauthorized access.



---

## 🛠️ Tech Stack 
* **Frontend:** react, tailwincsss, Axios 
* **Backend:** Express.js , jwt 
* **Database:** MongoDB

---

## 💻 Installation & Setup

### Frontend setup 
```bash
git clone https://github.com/yourusername/Dimdbfrontend.git
cd Dimdbfrontend 
npm install 
npm run dev
```
### Backend setup 
```bash
git clone https://github.com/manusudha/dummyimdbbackend.git
 # setup .env file with below given variables 
 cd dummyimdbbackend 
 npm i
 node index.js
 .env config
  MONGO_URI=your_mongodb_atlas_uri 
  JWT_SECRET=your_super_secret_key
  ```
