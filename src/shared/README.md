# SHARED FOLDER

This folder contains functionality to be shared among components.

The organization consists of an `index.js` file and individual files containing functionality to be shared. `index.js` imports any exported functions or objects from individual files and exports them. This is done so that we can import multiple items in one import statement by importing the folder and specifying the items we want.