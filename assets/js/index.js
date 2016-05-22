$(document).ready(function() {
    $('#Wallker').hide();
    $('#Maestro').hide();
    $('#pagepiling').pagepiling({
        loopBottom: true,
        loopTop: true,
        verticalAllign: false,
        onLeave: function(index, nextIndex, direction) {
          if ((index == 1 && direction == 'down' && nextIndex == 2 )|| (index == 3 && direction == 'up' && nextIndex == 2)){
            $('#Wallker').show('slow');
          }
           if((index ==1 && direction == 'down' && nextIndex == 3) || (index == 2 && direction == 'down' && nextIndex == 3)){
            $('#Maestro').show('slow');
          }
          if(index == 2 && (direction == 'up' || direction == 'down')){
            $('#Wallker').hide('slow');
          }
          if(index == 3 && direction == 'up' && (nextIndex == 1 || nextIndex == 2)){
            $('#Maestro').hide('slow');
          }
        }

    });

    $('#arrow').click(function(event) {

        $.fn.pagepiling.moveSectiondown();
    });

});
