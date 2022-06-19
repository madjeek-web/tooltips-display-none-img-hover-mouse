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
