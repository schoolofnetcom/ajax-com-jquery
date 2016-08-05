$(function(){
    var requestList = $.ajax({
        method:"GET",
        url:"post.php",
        data:{listAll:"list"},
        dataType:"json"
    });
    requestList.done(function(e){
        console.log(e);
    });


    $('#AjaxRequest').submit(function(){
        var form = $(this).serialize();
        var request = $.ajax({
            method:"POST",
            url:"post.php",
            data:form,
            dataType:"json"
        });
        request.done(function(e){
            $('#msg').html(e.msg);

            if(e.status){
                $('#AjaxRequest').each(function(){
                    this.reset();
                });
            }

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
