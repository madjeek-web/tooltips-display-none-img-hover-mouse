#tooltips-display-none-img-hover-mouse
#Tooltips - write the titles of the images ( in addition to size and alt...) ( important for SEO ) but no display of the text information

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

![cats-no-tooltip](https://user-images.githubusercontent.com/83957788/174462019-bdbf9f6d-db8b-48bc-a1f0-2908ed6fe5dd.jpg)

##no Infobulles
##.tooltip('hide') solution : no meta data : JQUERY


##Tooltips - write the titles of the images ( in addition to size and alt...) ( important for SEO ) but no display of the text information (titles images therefore ) on #the web page at the passage of the mouse over the titled images - solutions
##JQUERY
##SEE : FILES

##COMBO WITH : https://github.com/madjeek-web/link-titles-no-tooltip-tooltip-info-when-mouse-moves---hover---hide---display-none
___
