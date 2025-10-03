jQuery(document).ready(function() {
        var lecon_en_cours = 7;
        jQuery("header ul.lecons li").each(function(index, element) {
            index ++;
            console.log("List Item " + index + ": " + $(this).text());
            if(index > lecon_en_cours){
                jQuery(this).hide();
            }
        });
        jQuery("article ul.lecons li").each(function(index, element) {
            index ++;
            console.log("List Item " + index + ": " + $(this).text());
            if(index > lecon_en_cours){
                jQuery(this).hide();
            }
        });
    
}); // fin de ready