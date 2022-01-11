$('#mostrar').on('click',function () { 
    $('#toast').fadeIn("slow").animate({

    }, 'slow', function(){
        ocultar(); 

    })
});



function ocultar(){
    $('#toastt').fadeOut().animate({

    },'slow', function() {
        margen();
    })
};

function margen(){
    $('#margen').animate({
        margin: '15rem 0px 0px 0px'
    }).delay(2000).animate({
        margin: '0px'
    }, 'slow', function () {
        alto();
    })
}

function alto() {
    $('#alto').animate({
        width: '400px'
    }).delay(2000).animate({
        width: '300px'
    })
}