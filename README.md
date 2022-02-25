# Blog project based on JavaScript

- Backend: Express
- Front-end (Blog Admin): Vue2 with Vuetify
- Database: MongoDB

# Usage

## Backend

1. Install npm packges

`npm install`

2. Create config file

config file: server/config/config.default.js

```
export default {
    // dbUrl: "${MONGODB LINK}",
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

3. Run project

`npm run serve`