$(function(){
    $('#AjaxRequest').submit(function(){
        var form = $(this).serialize();
        var request = $.ajax({
            method:"POST",
            url:"post.php",
            data:form,
            dataType:"json"
        });
        request.done(function(e){
            console.log("done");
            console.log(e);
        });
        request.fail(function(e){
            console.log("fail");
            console.log(e);
        });
        request.always(function(e){
            console.log("always");
            console.log(e);
        });

        return false;
    });
});
