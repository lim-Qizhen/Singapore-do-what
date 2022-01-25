# Singapore-do-what

Deployed site: https://singapore-do-what.netlify.app

### Objective
When a common question is "Later where we go?" or "The other time, I found some recommendation online, but never mind, I lost it.", it becomes easy to assume that there is nowhere to go in Singapore. With the tourism site offering an API, I decided to compile a site which allows people to search for Singapore attractions and plan a simple one day itinerary.

### Project Objective
The purpose of the project was to create a React app with an API. In this particular project, two APIs were used.
API 1: Tourism Information and Services Hub
API 2: Here Developer (for map)

### App Features
1. Search page
2. Search Results page
3. Individual results page
  a. Title
  b. Location
  c. Contact
  d. Description
  e. Reviews
4. Favourites page (with route mapping)

### How the App Works
On launch, the app prompts the user for a keyword to search for Singapore attractions.

<img width="919" alt="Individual Page" src="https://user-images.githubusercontent.com/65413578/150926035-9c3c2f64-6bf2-490d-a291-2ecb5a5c5c75.png">

Users will then be provided with the search results and can click on a particular attraction that that allows them to have more details about a particular attraction. They can also like an attraction to save it to their favourites. This is saved and will be reflected should they leave that page and come back to it later.

https://user-images.githubusercontent.com/65413578/150926768-2c81abca-f2a2-4f60-905e-020d871c0296.mov

At the planning page, the user's favourites will be shown in their wishlist and the options available to plan a simple itinerary. As users input the different attractions they would like to visit, the order would be reflected in the map for them to better plan their route.

<img width="1124" alt="plan" src="https://user-images.githubusercontent.com/65413578/150927007-5b7af692-a953-4dbd-9c5f-1a2daf7c17b5.png">

### Codes and Struggles
The codes to generate the results and individual option pages were reasonable until the option to favourite it was included. One lesson learnt was the need to plan how the different pages interact and when they will re-render to prevent any loss of information. 

Using the maps API to display the locations as user keyed in their itinerary was another challenge as I had to consider that users might go back to a location after a meal. This resulted in the tab to overlap and manual adjustments had to be made in a separate code. This is still a work in progress as while tabs have been written to shift right should a tab currently be there, this shift is not refreshed when a user removes a repeated location.
