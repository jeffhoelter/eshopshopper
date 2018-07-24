This project is a work in progress, designed ultimately to be a Nintendo Switch eShop price tracker.

## Table of Contents

- [Current Features](#current-features)
- [Planned Features](#planned-features)
  - [Features](#features)
  - [Deployment](#deployment)
- [How to Install and Run the App](#how-to-install-and-run-the-app)


## Current Features
Currently the app is running Node/Express/React and simply queries the US Nintendo eShop and lists all of the games in a table.

## Planned Features
Below is a running list of ideas to implement to make this app more fully-functional.

### Features
- [x] ~~Fix bug in nintendo-switch-eshop.~~ Fixed in v1.1.3.
- [x] Pull latest prices on an hourly basis.
- [x] Add some basic unit tests.
- [ ] UI Refinement
  - [ ] Enable pagination and sorting.
- [ ] Cache store results in case the store is down.
- [ ] Store price history tracking.
  - [ ] Add database (AWS? Dynamo?).
- [ ] Enable price watches (simple email registration).

### Deployment
- [ ] Deploy on AWS


## How to Install and Run the App
Get the code and run the install:
```git clone git@github.com:jeffhoelter/eshopshopper.git
cd eshopshopper
nvm use
npm install
```

Run the app:

Front end:
```
npm start
```
Back end:
```
PORT=3001 node bin/www
```