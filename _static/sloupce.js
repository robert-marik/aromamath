$( document ).ready(function() {

    jQuery("#main-content div:first-child").removeClass("col-md-9");
    jQuery("#bd-toc-nav").css("display","none");
    jQuery(".bd-toc .tocsection").css("display","none");
    jQuery(".footer .container p").html('<p><em>Autor: Robert Mařík, robert.marik.cz@gmail.com</em></p> <p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0; width:81px; display:inline-block" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a> This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.</p>');

    });
