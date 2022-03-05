# Blog project based on JavaScript

- Backend: Express
- Front-end (Blog Admin): Vue2 with Vuetify
- Database: MongoDB

My Blog Link: http://139.155.236.54/#/

# Usage

## Backend

1. Install npm packges

`npm install`

2. Create config file

config file: server/config/config.default.js

```
export default {
    dbUrl: "${MONGODB LINK}",
    jwtSecret: "${YOUR JWT SECRET}"
}
```

3. Run app.js

`node app.js`

## Front-end (Blog Admin)

1. Install npm packges

`npm install`

2. Modify config file

config file: 
- admin/vue.config.js
- admin/jsconfig.json
- admin/.env.development (for development enviroment)
- admin/.env.production (for production enviroment)

3. Run project

`npm run serve`

# Front-end (Show Page)

1. Install npm packges

1. Install npm packges

`npm install`

2. Modify config file

config file: 
- showPage/vue.config.js
- showPage/jsconfig.json
- showPage/.env.development (for development enviroment)
- showPage/.env.production (for production enviroment)

3. Run project

`npm run serve`

