### What is this?
It's a small Mithril-based portfolio website made for my friend Abbie.
The live site can be viewed at onthemarkpr.org.

### How do I use this code?
After cloning the repository, you'll have to set up an app at https://www.firebase.com/.

If you do not wish to make any changes to the app, you should be able to deploy it using
the terminal command:

firebase deploy


### What if I make changes to the code?
If you make any changes to the code (in app.js or views) and wish to deploy these changes to your firebase app,
the first thing you must do is delete js/bundle.js.

After that, you must generate a new bundle.js from your code in app.js using the following command:

browserify public/js/app.js -o public/js/bundle.js

If you see errors in your terminal, please note that a bundle.js file is still created. After fixing the
errors you will have to again delete bundle.js and run the above 'browserify' command again.

After 'browserify' has been run without any errors, simple run 'firebase deploy' again:

firebase deploy
