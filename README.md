superTiles
==========

Use superTiles to bring bring fun and active tiles to your web site. To see examples of superTiles, visit <a href="http://burgettweb.meteor.com">BurgettWeb.net</a> and scroll down the page. There is still some work to be done, but it currently works! Using this, you can add sprites to your page which automatically scroll (transition) from left to right.

First, add superTiles.js to the bottom of your HTML document. If you have not added jQuery yet, go ahead and add that before superTiles. When your document loads, you want to run:
```
superTiles.activate()
```
If you were doing this using jQuery, you could add it to your JavaScript file as follows:
```
$(document).ready(function () {
    superTiles.activate();
});
```
Now go back to your HTML document and add your image. Each image needs to be a sprite with two panels, one on the left and one on the right. You can see mine in the folder 'images'. I created them using LibreOffice. So add an image:
```
<img class="superTiles" src='images/trans-img.gif' data-superTiles="meteor.png" width='420' height='200'>
```
As shown above, you need to add the following attributes to your ```<img>``` tags:

<table>
    <tr>
        <th>Attribute</th>
        <th>Value</th>
    </tr>
    <tr>
        <td>class</td>
        <td>superTiles</td>
    </tr>
    <tr>
        <td>src</td>
        <td>[path to a transparent image]</td>
    </tr>
    <tr>
        <td>data-superTiles</td>
        <td>[path to your image sprite]</td>
    </tr>
    <tr>
        <td>width</td>
        <td>[enter half the width of the sprite]</td>
    </tr>
    <tr>
        <td>height</td>
        <td>[enter the height of your sprite]</td>
    </tr>
</table>

Now load your page and watch them come to life!
