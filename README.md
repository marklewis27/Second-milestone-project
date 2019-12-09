# Second-milestone-project
Second milestone project

Project introwduction.

This project i have tried to create a website that is smooth to use, has a professional look and feel to it with some interactive parts
that a potential client would look at and like and want in there own webpage.
I have made a few things on the page that are interactive and require users input to make them come alive, in todays web world interactivity 
on a page is key. To highlight this to potential clients wanting a website building it gives a few insigihts and ideas on what they could 
have on there own page.

UX.

Features.

There are a few features that are automatic on the page, from the loading animation to the simple css fading of the welcome button when
hovered over. The smooth loading of the page rather than the sudden flash of the page there to give it all a smoother and more professional
feel about it.
As for the interactive features that are on the site..

Feature 1.
When clicking on the text the css properties change permanetly for the user, this is a feature that would be helpful when wanting to 
highlight certain products so to make it clear what has been clicked on. This uses a custom css class and a javaxsctiprt function to run it.

Feature 2.
In a way similar to the first item, a click on the list items will highlight what has been clicked on. However different to the first feature
this one is using the loop meathod in javascript to only apply the css to the clicked on text and does'nt apply the new css styles to the whole
list. I have also used the toggle option in the javascript so that with a second click on the same list item will return it to the original
properties it had when the page loaded.

Feature 3.
The full screen overlay with text in its centre. This uses a fair bit of css to create the affect and also add the text on. It lke the 
previous features makes use of the eventlisteners in javascript and waits for the click of the button before the function then applys
the css styles that result in the overlay on the screen. This would be a really good feature to use to highlight an additional offer on
a item or draw attention to another section of the site. It can also be implemented to load automaticlly when the page loads but for this
site i wanted the interaction of being able to turn it on and off with the users click of the mouse.

Feature 4.
The number checker, this feature i wanted to make that bit more interactive with the user by them needing to type in an input to get 
something back from the site. i used the if else statments with the parameters of what numbers would return what message for this one.
At the start of the javascript code i have included a NAN if statments so that if anything other than a number is entered it will
display that entry with a space and then a message to indicate that whats been entered is not quiet right.

Features left to do.


Technologies Used.

https://getbootstrap.com/
The framework of this site was built around the bootstrap grid system, using it to gain the layout of the page and some of its
deflaut styles. 


Testing.

During the build of this site i have taken a few screenshots of testing that has taken pace which i will include in a testing file 
so that the images are avalible to view.

While i've been bulding this site i have been using visual studio code as my prefered software, one of the first things that i added
to this programme was the live server plugin so as i was making changes to the site and saving them the changes would appear on the 
screen straight away. i found this useful and helped speed up the build.

When building the firs page that has the loading icon in the center of the screen i noticed that the button that would follow was not
in the centre of the screen where the loading icon was. I changed the css properties of the button and the posistion it was in 
until i got the properities right and the button would render on the correct part of the page to look professional and alligned.

Moving in to the landing page on the site useing the grid system allowed me to lay the page out without to may problems, i was 
finding that i would have a small area of white on the right hand side of the page, that even when i used the built in google 
chrome Dev tools it wasn't clear what caused this. I tried removing marging and padding on the right hand side of the page but
it still persisted. I then used the containter fluid class on the page and that solved the problem by filling 100% width of the page.

Once the gird was in place i moved in to the interactive part of the site, First up i created a small pieces of javascript that
contained some new css propeties so that when the text was clicked on these would the be put in place as the new css properties. 
At first my javascript wasn't applying these new styles but that was due to a simple syntax error i made.

Next was the list that i made that could be interacted with andbchanged color with the click of a button i test first off in
the console to make sure the for loop was working, when i click on each list item it would appear one at a time in the console 
in a node list. once this was in the place i added the new css properties in to the css file that the javascript would get
and apply to only that one item when clicked on in the list. I have put in the toggle option on this one so that with a second click
the syles would revert back to the origninal ones.

After this is set about the overlay with the message on. I again set up the css properties for this that i needed and the javascipt 
functions to turn it on and off when the user clicks. I am having some trouble with this not rendering right on the screen, it 
seems that some of the code after this feature is still visable rather than being behind the overlay like the code that has gone before
it. I believe this is a loading order issue that i am still trying to get the to bottom of.

Then comes the number chekcer on the page. i wanted to come away from the loops and click events i had done before. I used IF statments
for this one, to start with i wrote the if statements and console logged the results. To being with i was entering in the number in the 
code and console logging it only to find it was priting the number to the console not the message. I found the solution to this 
and knew that the statement was working so then i moved on to getting it to render to the screen. I had a problem of the the entry of 
a number and clicking the button not returning anything to the screen, i soon worked out that this was down to a wrong assingment of 
where the message result was going. Once that was worked out i had a wokring feature that the user could interect with an input and 
get a message back from the browser.


Deployment.

Credits.


