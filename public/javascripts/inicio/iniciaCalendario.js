
function initCalen(_dat){      
  mobiscroll.setOptions({locale: mobiscroll.localeEs,theme: 'ios',themeVariant: 'light'});
    $(function () {
   
    $('#demo-drag-drop-events')
      .mobiscroll()
      .eventcalendar({
        view: {
          calendar: { labels: true },
        },
        dragToCreate: false,
        dragToMove: true,
        dragToResize: false,
        dragTimeStep: 15,
        data: _dat,
       
        onclick: function(evento){
          console.log(evento)
        }
      })
      .mobiscroll('getInst');
  });

}