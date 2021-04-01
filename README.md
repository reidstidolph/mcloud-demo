# Multicloud Demo Web App
This contains a web application used for the 128T multicloud demo.

## Install
To install, just clone this repo, cd into the project directory, and install dependencies.
```
git clone https://rstidolph@bitbucket.org/rstidolph/multicloud-demo.git
cd multicloud-demo
npm install
```
## Configure
In the project directory, create a file called `cloudEnv.js`, with the following:
```
export default {
  platform:'aws',
  color: 'green'
}
```
Valid platform selections are `aws`, `gce`, or `azure`, which will set the logo at the bottom of the page.

Color selections such as `red`, `green`, `blue`, `orange`, etc. will color the page banner.
## Dev
To develop with a live reloading server:
```
npm run dev
```
## Build
After you are satisfied with your changes, build the app:
```
npm run build
```
## Serve
After the app is successfully built, configure a web server to serve the contents of `public/` in the project directory.
