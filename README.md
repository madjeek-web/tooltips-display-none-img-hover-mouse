#_____★ ☆ ✭_____Fabien Conéjéro / FC84_____-- •· ·
#____https://madjeek-web.github.io/____★ ☆ ✭_____

#As a webmaster or a beginner website creator, one sometimes wants to be able to configure everything and customize everything compared to
#the default display of web browsers. This is the case for several reasons, notably the visual rendering and aesthetic choices.
#This code manages the display of tooltips for images by hiding the default ones and restoring them only when the mouse is no longer hovering
#over the image. This can help improve user experience while maintaining SEO compatibility (as the title attribute is often used for search
#engines). This code can be useful for aesthetic reasons or user experience, for example, if the default tooltip is not styled enough or if
#you want to handle the display in a different way.
#You can plan to create your own style for displaying titles on images (in CSS, for example). Or simply to have complete freedom: not to display
#titles on the screen (for visitors/users), while still keeping the unique title within the HTML code itself (to optimize SEO).
#Place the JS code in a .js file and insert it in the head section of your web pages, as well as below the jQuery libraries (they must load first).

#tooltips-display-none-img-hover-mouse
#Tooltips - write the titles of the images ( in addition to size and alt...) ( important for SEO ) but no display of the text information

```js
//Tooltip - titles img ( seo ) : display none if mouse hover
    jQuery(document).ready(function($) {
      $("img").mouseenter(function() {
          let $ld_title = $(this).attr("title");
          $(this).attr("ld_title", $ld_title);
          $(this).attr("title", "");
      }).mouseleave(function() {
          let $ld_title = $(this).attr("ld_title");
          $(this).attr("title", $ld_title);
          $(this).removeAttr("ld_title");
      });
  });
```
##no Infobulles
##.tooltip('hide') solution : no meta data : JQUERY


##Tooltips - write the titles of the images ( in addition to size and alt...) ( important for SEO ) but no display of the text information (titles images therefore ) on #the web page at the passage of the mouse over the titled images - solutions
##JQUERY
##SEE : FILES

#You can also combine this code with this one :
##COMBO WITH : https://github.com/madjeek-web/link-titles-no-tooltip-tooltip-info-when-mouse-moves---hover---hide---display-none
___
