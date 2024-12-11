
import { Grid } from '@splidejs/splide-extension-grid';


new Splide( '#splide' ).mount( { Grid } );

new Splide( '#splide' ).mount( window.splide.Extensions );

new Splide( '#splide', {
    grid: {
          rows: 3,
          cols: 3,
          gap : {
              row: '1rem',
              col: '1.5rem',
          },
    },
  } );