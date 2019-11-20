# Tweeper - Backend

A Twitter like clone application with the ability to read, create, delete and update "Tweeps". Additional users can comment on "Tweeps".

## Planning and Design
#### App Plan
   1. Design Twitter Like App
   2. Incorporate Jest for Unit Testing
   3. Build Full CRUD (Create, Read, Update, Delete) capability with Interface
   4. Seperate Backend and Frontend into different Github Repos
   5. Have two Non-User Models
   6. Use MongoDB as NOSQL database
   
#### Back end Requirements
   1. Use Node
   2. Use Express
   3. Use Mongoose API  
   
### Minimal Viable Product (MVP) / Tier 3 / Tier 2/ Tier 1
#### Tier 3 (MVP)
   Bronze:
   1. Populate Interface with mock data that is read only, which shows the tweeps of multiple users on their profiles
  
  Silver:
   1. CRUD Ability for Users, and CRUD for Tweeping
  
  Gold:
   1. CRUD for Users, CRUD FOR Tweeping, and CRUD for Commenting
   
#### Tier 2
   Bronze:
     1. Add images to Tweep
     2. Add Followers
  Silver:
    1. Delete images from Tweep 
#### Tier 1
   Bronze:
    1. Add gifs to Tweep
### Initial Design Layout
<img width="780" alt="tweeper-mock" src="https://media.git.generalassemb.ly/user/22371/files/01cee900-09fb-11ea-9ca7-cad5e8dbe0ae">

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
```
Give the example
```

## Running the tests

Explain how to run the automated tests for this system


### API Database

| Query | Path | Description | Additional Information |
|:--------:|:-------:| ------------| ----|
| **POST** | `/` | create a new object |  |
| **GET** | `/` | find all objects in database |  |
| **DELETE** | `//{id}` | find an object by the id and delete the entire object |  |


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

 **Noah Clark** - Front End / Deployment
 
 **Jenna Dean** - Backend / Design
 
 **Josh Neves** - Design / Project Management


## Acknowledgments

* Inspiration - Twitter
* This project was bootstrapped with [Create React App]
