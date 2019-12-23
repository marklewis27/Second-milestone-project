# Second-milestone-project
BRCA East of England page

Project introduction.


The thought behind this project originally was to build a demonstration website showcasing some of the powers of Javascript but i felt that idea lacked a strong theme and i was struggling to make it look as professional as i would have like it to have been.
After some consideration i decided to make a website that gave the user information about a racing series that i am involved in with Radio Control cars. A simple yet affective site that gave the user a clear way of finding out the information you'd need to know before attending one of these events in person.

UX


The design of this site i wanted to be as clean as possible, i didn't want to much going on in the background which is why i have designed the site using a simple background. To match the colors in the background of the purple that is in it i used the adobe color matcher online to find the green color as a good color that matched the purple featured. To go with this i also used a button class from bootstrap that had the green around it to tie it in nicely with the rest of the sites theme.
The colors for the heading and the main text i went  for the white smoke color to make the most important eye catching text really stand out but without being a brilliant white color that might have given a bit to much of a glare to it.
A user that would come on to this site would want to know about the location of the site, the sort of facilities on the site so that they know what they need to bring or not bring themselves. Another important thing to know befroe one of these events is the weather, this can have a huge impact on car setup and tyre choice so a link to the weather for the are that the event is being held is extremely useful to a racer.


Features.


Feature 1. Loading page, by using a combination of css and javascript i gave the page the loading icon to give it a professional loading              theme to enter the site with.

Feature 2. Both of the welcome and regional series pages have smooth loading, rather than the sudden appearance of the site having it              blend on to the screen give the site that softer more user friendly feel.

Feature 3. The welcome page has a button at the bottom with a link to the BRCA website for all the rules and regulations for this class            of racing which a lot of people find helpful to check on from time to time.

Feature 4. In the regional series page the list of venues at the top can be clicked on and the page will smoothly scroll to that venue              information section.

Feature 5. The list of venues also chenge there css proprties when clicked on to remind the user which ones they have clicked on                    already.

Feature 6. As mentioned before there is a link to the weather forecast for each venue on the site.

Feature 7. Each venure has a list of important information that when hovered over change to italic to catch the users attention is there            mouse hovers over them.

Feature 8. Each venue has a small map preview that when hovered over zooms in slightly to show it is clickable, When clicked takes you              to the google maps for that track.


Features left to implement.

I was going to use a google API for the maps to add even more interactivity in to the website but i didnt feel comofortable doing so as it needed details for payment. That therefore meant that my card could be charged if someone were to view my page on github and use the maps on my site. I have made the maps as interactive as i can by giving them some css changes to make them zoom in and then linked them to the full google maps page for the relevent track location.

For the original project idea of a demonstration page i made a few features that are still in the code but not on the site, i have chosen to leave them in the code for you to view to demonstrate some further understanding of the javascript language.



Technologys used.


The site has been built using the bootstrap framework which can be found here ... https://getbootstrap.com/ I used this for the grid system to get the layout i have and also the defualt classes for things such as buttons and the navigation on the site.

The site has Javascript in it to make some of the animations work and some of the features on the site to work based on the user input to give it more interactivity.. https://www.javascript.com/

As part of the design process i used the adobe color wheel that matches colors that work well together to help with the design of the colors on the site ... https://color.adobe.com/create

The maps have of course come from the source of google maps, although not via an API as i explained earlier. https://www.google.com/maps/@53.800651,-4.064941,6z

Testing.


I have included a folder in the project with some of the screen shots of the testing i have done on the site.

One of the first things i tested was the loading animation and making sure that the welcome button that then followed was in the same location on the webpage, this needed some adjustment in the css and a few reloads to check it rendered in the correct loacation.

Layout, The genral layout of the site and its content running in the same manor from top to bottom required testing with regards to the col-sm- sizes that i used and the offests that were also put in place with these to get the site to render nicely.

The smooth transistion of the pages, while making this site i didnt like the clunky feel to the page change so added in the smooth loading affect to cure this problem. i set feature up and then tested it until it took the right amount of time to load without it being to slow or to fast.

Javascript scroll feature. i wanted the menu at the top to be clickable in a way that it would take you to the relevent page on the screen. Once i'd made the function i noticed that it wasnt scrolling far enough that the whole page i wanted to be in view would actually be in the view of the user. To fix this i had to make some changes to the number of pixels down the screen that the function wouldd work over. After i had tested this several times with the functions for all three sections it now scrolls nicely to the section of the website that it meant to.

Changing the font style of the location list. This function i wrote but it didnt seem to work at first, with some research i realised that i hadnt assigned it to a variable that would make it run when the user clicked on the list item. And that i also hadnt set the new css properties for the site to know what it should look like after the user has clicked on the list item on the site.

Mobile view. As you will be able to see in some of my pictures i had trouble with the white space on the right hand side of the screen and i could'nt work out why this was. After checking my work i found that i had mixed up some of my classes for the containers and rows which was causing this problem.
Once i had got the white space sorted out i was pretty happy with the view on mobile, However when i added in my first image for the maps it was to large of scale in the mobile view and went beyond the width i wanted it to. A simple change to the width property in the css classes soon made sure that it rendered nicely on the mobile view as it did on the desktop view.



A couple of things i made and tested but arent in the final website are the block of text that when clicked changes color and stays at the new properties set in the css that are activated by the javascript, when making this i tested to make sure it worked however it was conflicting with the list that changed back to the original style with a second click. It turned out to be a naming issue with the javascript that  was able to rectify quickly.

The number entering box. This feature set up a text box that the user could enter in a number and then a message would be returned to screen based on the number that was entered using a set of if statments in the java script. i first made the javascript and tested it in the console, however to start with it was printing the javascript as well as the number in the console. this turned out to be a naming issue of the console log. once this was sorted the message that should be returned was printing to the console like it should. After this was sorted i then set up the ability to have the user input the number and return the message to the screen. First tests it was returning the number to the screen not the message as i'd got the names the wrong way around in the function again, once id changed those over it was working as it should be.


Deployment.

Despite my best efforts i was unable to get the site to deploy on github pages, after follwoing there online instructions and watching several videos along side a lot of googling the answer it still didn't want to work for me. Frustrating but i have always found github to be a very un-user friendly programme.

I was going to deploy the site under the web address of www.brca.EOE.info.com had i been able to get that to work and have a deployed version on show.

credits.

I have mentioned in the comments in the code any pieces of code that i have sourced from external sites in my project.


Media.

The photos for the background were from a google search for purple background images. 

The screen shots for the maps were from google maps


Acknowledgements.

The inspiration for this site came from the need for a one stop place for information for this racing series. The design elliment and the color scheme's were inspired by some searching on pintrest.
