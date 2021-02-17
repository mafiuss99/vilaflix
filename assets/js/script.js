$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 10) {
            $(".header-top").addClass("active");
        }else{
            $(".header-top").removeClass("active");
        }
    })
    
    /* Slides */
    var nossalista = new Glide('.nossalista', {
        type: 'carousel',
        perView: 4,
        focusAt: 0,
        breakpoints: {
            767: {
                perView: 4
            },
            480: {
                perView: 3
            }
        }
    });
    nossalista.mount();

    var filmesinesqueciveis = new Glide('.filmesinesqueciveis', {
        type: 'carousel',
        perView: 4,
        focusAt: 0,
        breakpoints: {
            800: {
                perView: 2
            },
            480: {
                perView: 3
            }
        }
    });
    filmesinesqueciveis.mount();

    var series = new Glide('.series', {
        type: 'carousel',
        perView: 4,
        focusAt: 0,
        breakpoints: {
            800: {
                perView: 2
            },
            480: {
                perView: 3
            }
        }
    });
    series.mount();

})