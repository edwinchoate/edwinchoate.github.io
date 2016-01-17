
$(document).ready(function() {
    
    // change off season graphic to springtime guy
    $("#flower").on('mouseenter', function() {
        $('.project-offseason-img').attr('src', 'assets/images/projects/thumbnail_off_season_spring.png'); 
    });
    
     // change off season graphic to summer guy
    $("#sun").on('mouseenter', function() {
        $('.project-offseason-img').attr('src', 'assets/images/projects/thumbnail_off_season_summer.png'); 
    });
    
     // change off season graphic to fall guy
    $("#leaf").on('mouseenter', function() {
        $('.project-offseason-img').attr('src', 'assets/images/projects/thumbnail_off_season_fall.png'); 
    });
    
     // change off season graphic to springtime guy
    $("#snowflake").on('mouseenter', function() {
        $('.project-offseason-img').attr('src', 'assets/images/projects/thumbnail_off_season_winter.png'); 
    });
    
    // reset sprite to minimalist guy
    $('#flower, #sun, #leaf, #snowflake').on('mouseleave', function() {
        $('.project-offseason-img').attr('src', 'assets/images/projects/thumbnail_off_season.png');
    });
    
    var animatedImages = '.project-greenlight-img, .project-coatlanta-img, .coatlanta-screenshot, .project-twitterticker-img, .twitterticker-screenshot';
    $(animatedImages).on('mouseenter mouseleave', function() {
        var _this = $(this);
        var current = _this.attr('src');
        var next = _this.attr('data-swap');
        _this.attr('src', next).attr('data-swap', current);
    });

});

