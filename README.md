
## Pre-Coding Project Setup

* [ ] Choose project "idea" and write it on the wall!
* [ ] Wireframe your site. (You should have at least two pages on your final project)
    * [HTML tag reference](https://www.w3schools.com/tags/ref_byfunc.asp)
    * [API list reference](https://github.com/toddmotto/public-apis)
    * [UIkit reference](https://getuikit.com/docs/introduction)
    * [jQuery event reference](https://api.jquery.com/category/events/)
    * [jQuery effect reference](https://api.jquery.com/category/effects/)
* [ ] Complete at least 1 user story for your site (on the back of your wireframe).
* [ ] Break up your project into tickets, and put your tickets up on the wall to keep track of your progress.
* [ ] Pitch your project :) 


## Code Project Setup
* [ ] Use `touch` to create your html files, `styles.css`, and `script.js`. (You may use multiple javascript files and multiple CSS files if your prefer.)
* [ ] Link your CSS file(s) inside your HTML files using something like  `<link rel="stylesheet" type="text/css" href="styles.css">` in the `<head>` tag on all HTML files.
* [ ] Link your jQuery by putting `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>` in the `<head>` tag of all HTML files.
* [ ] Link your JavaScript file(s) inside your HTML files using something like `<script type="text/javascript" src="script.js"></script>` in the `<head>` tag on all HTML files.
  > **NOTE** jQuery needs to be linked above your JavaScript files so that it is loaded into your JavaScript.
* [ ] If you are using UIKit, add the [Cloudflare content delivery network](https://getuikit.com/docs/installation#download) links to your HTML files. **Note** you do not have to follow the download instructions, just put the proper links in your HTML files.
* [ ] Add jQuery's document ready function to your JavaScript files.
    ```
    $( document ).ready(function() {
      // write your code below
    });
    ```
* [ ] Add a `.gitignore` and `.surgeignore` file. Inside each of those files put `secrets.js`. This will exclude out secrets file when pushing to GitHub and deploying to surge.
* Add a `secrets.js` file to store your api keys locally.


## Test your setup
* [ ] Add an `<h1>` to your HTML and open the page in your browser to check your HTML.
* [ ] Try changing the background color of your `<body>` to make sure your CSS is hooked up properly.
* [ ] Use `console.log` inside your JavaScript file and look for your message in the console once you refresh the page to make sure your JavaScript is hooked up properly.
* [ ] Select your `<h1>` using jQuery and call `.fadeOut()` to make sure your jQuery is working.
* [ ] Add a [UIkit heading class](https://getuikit.com/docs/heading) to your `<h1>` to make sure UIkit is working!
* [ ] Push your code to GitHub and make sure that your `secrets.js` file did not get pushed!


# CONGRATS! YOU'RE READY TO START CODING!

