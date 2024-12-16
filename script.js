if(jQuery){
    console.log("jquery loaded");
}

else{
    console.log("no jquery")
}



new Splide( '.splide', {
    grid:{
        rows: 3,
        cols: 3,
        gap: {
            row: '1rem',
            col: '1.5rem'
        },
    },
} ).mount( window.splide.Extensions );



// mobile
$('#menu-button').click(function(){
    $('#overlay-menu-contaner').fadeIn();
})

$('#close-menu').click(function(){
    $('#overlay-menu-contaner').fadeOut();
})