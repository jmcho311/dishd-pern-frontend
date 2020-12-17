# When In Roam
> Note: Built to work with [this repo](https://github.com/jmcho311/dishd-pern-backend).

### About

A photo sharing social media app to bring people and food together. When users are craving something really good, this is the place to explore photos to eat with your eyes first. Users can post, share and search favorite dishes in various ways while learning where you can find it.

### Development Approach

#### User Stories

This application was built to make it easier and more visual to store and search favorite dishes from various places. I'm not big on reading, searching through written review posts to learn what I should or should not order for food. Users will be able to do a quick search of specific food they want to eat and visually see what's appealing to them to help decide where to grab that next meal. 

Users can do the following:
* Register to access the application.
* Upload a photo various sources, enter your location, select a category, enter the name of the dish, caption.
* View their own profile page.
* Search dishes by Category, Location, Dish. 


### Design Approach

#### ERD Database

One-to-Many Entity Relationship Diagram

![ERD] (./public/images/p4ERD.png)

#### Wireframes

![Wireframes] (./public/images/p4Wireframes.png)


### Technologies

#### What it includes

* Sequelize 
* Node.js
* PostgreSQL
* Express 
* React
* React-Bootstrap

#### Routes
Server side
| Method | Path | Purpose |
|--------|------|---------|
| POST | /auth/login | User authentication and login |
| POST | /auth/register | User account creation |
| DELETE | /auth/logout | User logout |
| GET | /auth/user/:id | Gets user info using Id |
| GET | /post | Gets all users' posts |
| GET | /post/category/:category | Gets all users' posts using Category |
| GET | /post/location/:locationName | Gets all users' posts using Location Name |
| GET | /post/dish/:dishName | Gets all users' posts using Dish Name |
| GET | /post/:id | Gets all user's posts using User Id |
| PUT | /post/:postId | Updates an existing post using Post Id |
| DELETE | /post/:postId | Deletes an existing post using Post Id |
| POST | /post | Creates a new post |

#### Routes
Client side
| Path | Purpose |
|--------|------|
| / | Homepage |
| /register | Sign Up page |
| /login | Login page |
| /profile | User Profile page |
| /new | Create a New Post page | 
| /search | Search Form page | 
| /category | Category show page | 
| /location | Location show page | 
| /dish | Dish show page |


### Future Features

* Connect to Yelp API so that users can link from Post to Restaurant page for more information.
* Save other users' posts into a favorites MUST TRY page.
* Improved Search function for user experience.
* 'Like' and Comment on other users' posts
* Add filter function to Profile and Search Results pages for improved user experience.


### Credits

Special shoutout to the extra set of eyes (in alphabetical order), debugging help and moral support for this project. 
* Ashley Nguyen
* Brock Molmen
* Brock Whitbread-Cole
* Casey Jenkins
* Erik Heikkila
* Jacob Kleiman
* James Sinkler
* Jamie Cabrigas
* Kelsey Whallon
* Lauren Nguyen
* Lucy Franco
* Michael Petty
* Seanny Phoenix
* Tess Bishop
* Uyen Lam

Also, regularly referenced and/or pulled photos from these sites:
* https://reactjs.org/
* https://react-bootstrap.github.io/
* https://cloudinary.com/documentation/upload_widget
* https://www.w3schools.com/
* https://stackoverflow.com/questions 
* https://css-tricks.com/snippets/css/complete-guide-grid/
* https://www.pexels.com/
* https://www.jimhenkens.com/