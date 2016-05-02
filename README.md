# Pimmr development case

Pengiun Pim has given you the task to build a small web frontend for his search to the perfect restaurant in Amsterdam.
A backend is provided to you which returns the top restaurants in Amsterdam, an example is provided in index.html.
Currently, the backend can return the same restaurants at different positions. You can ignore this behavior.

Non-functional requirements:
* Instructions on how to get your application up-and-running should be included
* It should build on OSX
* It should work with Node 5
* It should work in Chrome
* It should be styled with css
* It should use React
* It should be tested

Functional requirements:
* Show a maximum of 5 restaurants on the page
* There must be navigational controls to show the next page with restaurants, if there are any.
* Show the name, a picture and the cuisines of a restaurant
* All restaurants at an uneven position in the list should have a black name
* All restaurants at an even position in the list should have a red name
* If the name of a restaurant contains the word 'restaurant', the word restaurant should be bold.
* Each restaurant has a collection of one or more images. Ideally the brightest image of a collection is shown.

Additional API information:
* Currently the example uses a RPC call to obtain 5 restaurants. There is also a function that returns the *next* 5 restaurants

Other than React, you have the freedom to choose any libraries you like. The application should load with `npm start` or a Docker run command.
