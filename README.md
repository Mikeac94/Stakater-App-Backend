# Getting Started with Stakater App Backend

This NodeJS Backend project is part of the interview process at [Stakater] (https://stakater.com/) for Mike Ashley Cedric.

## Available Scripts

In the project directory, you can run:

```
npm start

```

Runs the app in the development mode.\
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
### Deployment

To run the app in a dockerized environment, run the below commands to 1) build the docker image 2) run the docker image 

```

docker build -t stakater-app-backend .
docker run -p 9002:9000 stakater-app-backend

```

### Testing

Test the backend NodeJS app using the below curl

```
curl -i localhost:9002/api

```
## License
[MIT](https://choosealicense.com/licenses/mit/)