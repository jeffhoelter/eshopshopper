This project is a work in progress, designed ultimately to be a Nintendo Switch eShop price tracker.

## Table of Contents

- [Current Features](#updating-to-new-releases)
- [Planned Features](#planned-features)
  - [Features](#features)
  - [Deployment](#deployment)


## Current Features
Currently the app is running Node/Express/React and simply queries the US Nintendo eShop and lists all of the games in a table.

## Planned Features
Below is a running list of ideas to implement to make this app more fully-functional.

### Features
- [ ] Fix bug in nintendo-switch-eshop.
- [ ] Pull latest prices on an hourly basis.
- [ ] UI Refinement
  - [ ] Enable pagination and sorting.
- [ ] Cache store results in case the store is down.
- [ ] Store price history tracking.
  - [ ] Add database (AWS? Dynamo?).
- Enable price watches (simple email registration).

### Deployment
- [ ] Deploy on AWS

