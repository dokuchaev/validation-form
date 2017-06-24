    
;(function( $ ) {

    var requiredClass = $('.input--required'),
        errorClass = 'input--error',
        appendTextError = '<span role="alert" class="input__text-error">Обязательное поле</span>';

    $('input').on('input', function() { 
        var _ = $(this);   
        _.removeClass('input--error');
        _.next().remove();
    });


$.fn.validation_form = function() {
    $(this).submit(function(){
    var error = 0,    
        textErrorClass = $('.input__text-error');

    textErrorClass.remove(); 

    requiredClass.each(function(){
        var _ = $(this);
        var value = Boolean(_.val());


    if ( value === false ){
        _.addClass(errorClass)
        .parent()
        .append(appendTextError)
        error++;
     }
    else{
        _.removeClass(errorClass);
     }
    });

    if( error ) {
        return false;
    } else {
        return true;
    }
})
    return this;
   } 
})(jQuery);
