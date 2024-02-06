
# Integrate Shaka Player in React

## How to run

#### Using custom video stream

    01. Run `yarn install` to install dependencies.
    02. Change the `manifestUri` in App.tsx to the desired .mpd file url
    03. Run `yarn dev` to start the app.
    04. Open the browser, go to the app localhost url and watch the video.

#### Using local stream

    01. Go to `server` directory.
    02. Run `yarn install` to install dependencies.
    03. Run `yarn generate:serve` to generate chunks from Intro.mp4 and then serve using http-server at localhost:8080.
    04. Go to `shaka-player-test`
    05. Run `yarn install` to install dependencies.
    06. Run `yarn dev` to start the app.
    07. Open the browser, go to the app localhost url and watch the video.
