$(document).ready(function () {
  $('#Wallker').hide();
  $('#pagepiling').pagepiling({
    loopBottom:true,
    loopTop:true,
    verticalAllign:false,
    /*navigation: {
        'textColor': '#000',
        'bulletsColor': '#000',
        'position': 'right',
        'tooltips': ['Welcome!', 'Waqlker', 'Maestro', 'section4']
      },*/
      onLeave: function(index, nextIndex, direction){
        if(index == 1 && (direction == 'down')) {
          $('#Wallker').show('slow');
        }
        else if (index == 2 && (direction == 'up') || (direction == 'down')) {
          $('#Wallker').hide('slow');
        }
      }

  });

  $('#arrow').click(function(event) {

    $.fn.pagepiling.moveSectionDown();
  });

});
