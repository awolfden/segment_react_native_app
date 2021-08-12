**Setup Process IOS**

-Clone Repo
- Go into the reactNativeTestApp directory via `cd reactNativeTestApp`
- Now execute these commands
    - `yarn add @segment/analytics-react-native`
    - `yarn react-native link`
    - `cd iOS`
    - `pod install`
    - `cd ..`
- Open the `reactNativeTestApp` directory your code editor.
- In your code editor, open `App.js`
    - Go down to the bottom of the file, just below `export default App`
    - Add your write-key `analytics.setup('<YOUR WRITE KEY>', {})`
    
**Additional Setup Information**    
- Open Xcode
- Go to File→Open
    - Select the directory of reactNativeTestApp/iOS and open reactNativeTestApp.xcworkspace
- Now do Product→Build in Xcode
    - When this is complete, you should see a command line window open called “Metro”.
- Now do Product→Run in Xcode
    - This will start the Simulator and install your reactNativeTestApp app into it.
    
**Android**
- Open Android Studio
- Go to Tools->Avd Manager and launch a virtual device
    - If you have no devices listed click the `Create Virtual Device` button
- You should now have a virtual android device running
- Open a terminal window in the root of this project
- Run the following command: `react-native start`
- Open a new terminal tab or window and run the command: `react-native run-android`
    - If you see errors at this stage like the following:
    ```
    error Failed to start the app.
    Error: spawnSync adb ENOENT
    ```
    This can solve the issue: https://stackoverflow.com/a/38847005
    - For reference my bash profile looks like the following:
    ```
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export ANDROID_SDK_ROOT=/Users/adam.wolfman/Documents/reactNativeTestApp/android/local.properties
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```
- The app should now be launched in Android




