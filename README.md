# Tweeper - Backend

A Twitter like clone application with the ability to read, create, delete and update "Tweeps". Additional users can comment on "Tweeps".

## Planning and Design
#### App Plan
   1. Design Twitter Like application
   2. Incorporate Jest for Unit Testing
   3. Build Full CRUD (Create, Read, Update, Delete) capability with interface
   4. Seperate backend and frontend into different Github repos
   5. Have two non-user models
   6. Use MongoDB as NOSQL database
   
#### Back end Requirements
   1. Use Node
   2. Use Express
   3. Use Mongoose API  
   
### Minimal Viable Product (MVP) / Tier 3 / Tier 2/ Tier 1
#### Tier 3 (MVP)
   - Populate Interface with mock data that is read only, which shows the tweeps of multiple users on their profiles
   - CRUD Ability for Users, and CRUD for Tweeping
   - CRUD for Users, CRUD FOR Tweeping, and CRUD for Commenting
   
#### Tier 2
   Bronze:
   - View profile of others
   - Add Followers
     
  Silver:
  - Add profile pictures
  
  Gold:
  - "like" button
    
#### Tier 1
   Bronze:
   - Send pictures as tweep

## Features
- Users can create "Tweeper" accounts
- Users can login into their individual accounts
- Users can create, delete, and manage their own "Tweeps"
- Users can add, delete, and mannage their own comments 

### Technologies Used
- Node.js
- Mongoose
- Express
- Jest
- Axios
- Heroku

## Installing
Backend: https://github.com/clarknoah/ga-mern-project-backend

- Install MongoDB 
- Run MongoDB 
- Seed backend server data


Frontend: https://github.com/clarknoah/ga-mern-project-frontend

- Git clone
- npm install
- npm run Start

## Running the tests
npm test

## Example
This is an example object from the API:
```
  {
    firstName:"Joshua",
    lastName:"Neves",
    handle:"awesomeGuy",
    description: "I'm a Cool Guy just looking to shine",
    tweeps:[
      {
        timestamp:new Date(), tweepContent:"Hello World",
        comments:[
          {
            commentContent:"Great tweep",
            authorId:"MONGO USER ID",
            timestamp:new Date
          },
          {
            commentContent:"Great tweep",
            authorId:"MONGO USER ID",
            timestamp:new Date
          }
        ]
      }
    ]
  }
```

## Deployment

- Deployed using Heroku


## Authors

 **Noah Clark** - Full Stack / Deployment
 
 **Jenna Dean** - Backend / Design
 
 **Josh Neves** - Design / Documentation


## Acknowledgments

* Inspiration - Twitter
