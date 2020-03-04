$(function(){ 
    function buildHTML(message){
      if ( message.image ) {
        var html =
         `
            <div class="mainchat__message__list__posts">
              <div class="mainchat__message__list__posts__name">
                ${message.user_name}
              </div>
              <div class="mainchat__message__list__posts__date">
                ${message.created_at}
              </div>
            </div>
            <div class="mainchat__message__list__text">
              <p class="mainchat__message__list__text__content">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
        return html;
      } else {
        var html =
         `
            <div class="mainchat__message__list__posts">
              <div class="mainchat__message__list__posts__name">
                ${message.user_name}
              </div>
              <div class="mainchat__message__list__posts__date">
                ${message.created_at}
              </div>
            </div>
            <div class="mainchat__message__list__text">
              <p class="mainchat__message__list__text__content">
                ${message.content}
              </p>
            </div>
          </div>`
        return html;
      };
    }
$('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
     .done(function(data){
       var html = buildHTML(data);
       $('.mainchat__message__list').append(html); 
       $('.mainchat__message__list').animate({scrollTop: $('.mainchat__message__list')[0].scrollHeight}, 'fast');
       $('form')[0].reset();
     })
     .fail(function(){
      alert('error');
     })
     .always(function() {
      $('.submit-btn').prop('disabled', false);
    })
  });
});
