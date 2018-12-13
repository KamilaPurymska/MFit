# Project Name MFit

## Description

Find the best trainer for your personal goals. Fill the form and explore a list of personal trainers who are the best match for you. 

---

## User stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist 
- **Signup:** As an anon I can sign up in the platform so that I can start searching for the best trainer match 
- **Login:** As a user I can login to the platform so that I can find the best trainer and send a request
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **List personal trainers** As a user I can see list of personal trainers filtered by my preferences
- **Filter/search** filter trainers list
-  **Fill a form** As a user I can fill a form with my preferences so I can find my perfect match
-  **Trainer card** As a user I can check a trainer card
- **Save a trainer** As a user I can save a trainer so then I can see it in my profile
- **Remove a saved trainer** As a user I can remove a saved trainer
-  **Edit a profile** As a user I can edit my profile and change my prefrences
- **Check my profile** As a user I can see my profile, my preferences and saved trainers


## Backlog

- email form 
- Youtube API
- Communication between users



# Client 

## Routes

- `/`
    - HomePageComponent
- `/auth/signup`
    - SignupPageComponent
    - anon only
    - navigate to homepage after signup
- `/auth/login`
    - LoginPageComponent
    - anon only
    - navigate to homepage after login
- `/trainers`
    - TrainersListComponent
    - if preferences show match list else show all trainers 
    - users only
    - search/filter for trainers
- `/trainers/:id`
    - TrainerPageComponent
        - navigates to trainer card
    - user only
- `/profile`
    - UserPageComponent
    - user only (current session)
    - display my info and my saved preferences
    - display saved trainers
- `/profile/edit`
  - edit the profile 
- `/preferences`
    -FormPageComponent
    
---

## Components

- Login:
  - userFormComponent(username: string, password: string, onSubmit: function)
- Sign up:
  - userFormComponent(username: string, password: string, email: string, trainer: true/false, onSubmit: function)
- HomePageComponent
- NavbarComponent
- TrainerPageComponent
  - Trainers list
      - trainersListComponent (list: array)
      - trainerCardComponent
- Trainer Profile
    - trainerProfileComponent
- User Profile 
    - userProfileComponent
    - preferenceFormComponent
    - savedTrainersComponent
- Preferences Page
    - FormPageComponent

---
## Services
- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- API Service
  - getMatchTrainers(preferences)
  - getTrainerDetail(id)
  - updateTrainer(id, data)
  - toggleSavedTrainer(id)
  - savePreferences(data)
  - updateUser(data)

# Server

## Models

User model 

- username - String // required
- email - string //required
- password - String // required
- desciption - string
- savedtrainers - [ObjectId ref:User]
- preferences - {
  - city - string
  - online - boolean
  - goals - enum []
  - gender - enum []
  - price - string
  - profession - string
}
- isTrainer: Boolean
- videoId - String

----

## API Endpoints (backend routes)
- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
    - isTrainer: boolean
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204
- PUT /preferences
    - update user preferences
    - 401 if user logged in
  - body:
    - goal
    - city
    - online
    - gender
    - profdesion
- GET /trainers/list
  - get list
- GET /trainer/:id
  - get trainer details from API
- GET /profile
    - form info results
- POST /profile/edit
  - edit profile
- POST /trainers/list
  - save/unsave trainer

## Links

### Trello/Kanban

### Git
The url to your repository and to your deployed project

[Deploy Link]()
### Slides
The url to your presentation slides
[Slides Link]()