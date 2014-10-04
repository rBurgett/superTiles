superTiles
==========

Use superTiles to bring bring fun and active tiles to your web site. To see examples of superTiles, visit http://burgettweb.meteor.com and scroll down the page. There is still some work to be done, but it currently works! Using this, you can add sprites to your page which automatically scroll (transition) from left to right.

First, add superTiles.js to the bottom of your HTML document. If you have not added jQuery, go ahead and add that before superTiles. When your document loads, you want to run:
```
superTiles.activate()
```
If you were doing this using jQuery, you could add it to your JavaScript file as such:
```
$(document).ready(function () {
    superTiles.activate();
});
```
Now go back to your HTML document and add your pictures (superTiles assumes your images are in a folder name 'images'). Each image needs to be a sprite with two panels, one on the left and one on the right. You can see mine in the folder 'images'. I created them using LibreOffice. So add an image:
```
<img class="superTiles" src='images/trans-img.gif' data-superTiles="meteor.png" data-superToggle="true" width='420' height='200'>
```
As shown above, you need to add the following attributes to your ```<img>``` tags:

class="superTiles
src="[path to a transparent image]"
data-superTiles="[your image name]"
data-superToggle="true"
width="[enter half the width of the sprite]"
height="[the height of your sprite]"

Now load your page and watch them come to life!
