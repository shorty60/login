# Login Verification

Users can login and start our service.

## Features

- Users can login.
- If users type wrong email or password, we'll notice them.


## Screen Photos

#### Login

![Login](https://github.com/shorty60/login/blob/main/public/images/login.jpg)

#### Home

![Home](https://github.com/shorty60/login/blob/main/public/images/home.jpg)

#### Error

![Error](https://github.com/shorty60/login/blob/main/public/images/error.jpg)

## Getting Started

### Prerequisites

If you are windows user but has not yet installed git bash, please go to below link and download git bash.

- [git](https://git-scm.com/) - click 'Download for windows'

### Installing

1.Switch to your terminal for MacOS or git-bash, CMD for Windows, and then clone this project to local.

```
git clone https://github.com/shorty60/login.git
```

2.Change directory to project folder

```
cd login
```

3.Install npm packages

```
npm install
```

4.Setting MongoDB environment variables

```
set "MONGODB_URI=Your MongoDB connection string" // for Windows cmd

export MONGODB_URI="Your MongoDB connection string" // for bash (Both MacOS bash terminal and Git bash for Windows)

```

5.Writing seeds data

```
npm run seed
```

6.Run Login verification project

```
npm run start
```

7.If your bash terminal(for Mac OS) or git bash(for windows) shown

```
Express is listening on http://localhost:3000
```

the application server starts successfully.
Please go to [http://localhost:3000](http://localhost:3000) with your browser.

8.To turn off the application server, type in

```
ctrl + c
```

in your terminal.

## Built With

- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/)
- [Node.js](https://nodejs.org/zh-tw/download/) - v14.16.0
- [Express](https://www.npmjs.com/package/express) - v4.18.2
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - view engine template v6.0.6
- [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) - front-end template v5.2
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM v6.6.5
- [express-validator](https://express-validator.github.io/docs/) - server side validation v6.14.2
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) -v1.4.6

## Authors

- [Author](https://github.com/shorty60) - Shorty Lin
