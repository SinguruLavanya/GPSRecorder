This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

Project Requirements: 
Java version - 17,
Download openjdk version 17,
Node version - 18

```bash
# add environment variable for macos
export JAVA_HOME=/Library/Java/JavaVirtualMachines/{jdk17}/Contents/Home
# {jdk17} would mostly in this format - zulu17.jdk in macos
```

run source ~/.zshrc in terminal

```bash
# download node version 18 and run
nvm alias default 18
```

clone the project after react native environment setup is done

```bash
# run below commands
# using yarn
yarn

# if yarn version is not supported try running below command to install dependencies
# using npm
npm install
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# First run these commands before running the app
# go to your project directory
cd ios
pod install
# These are like installing dependencies for apple

# using npm
npm run ios

# OR using Yarn
yarn ios
```

If you have any issues with ndk version 
open android studio-> sdk manager -> appearance and behaviour -> system settings -> android sdk -> sdk tools
download the ndk version that you got error with.

If yarn ios or npm run ios is throwing any error after installing pods 
open xcode -> go to you project directory open ios folder
click the run button and xcode will open the simulator and install the app in the iphone selected
You can change the simulator if required.

```bash
# After setting up everything if you get any error try running this command and you will see the errors with setup
npx react-native doctor
```
