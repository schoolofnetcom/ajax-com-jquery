$(function(){
    var requestList = $.ajax({
        method:"GET",
        url:"post.php",
        data:{listAll:"list"},
        dataType:"json"
    });
    requestList.done(function(e){
        console.log(e);
        var table = '<thead><tr><th>#</th><th>Name</th><th>Email</th><th>Telephone</th></tr></thead><tbody>';
        for(var k in e){
            table += '<tr><th scope="row">'+e[k].id+'</th>';
            table += '<td>'+e[k].name+'</td>';
            table += '<td>'+e[k].email+'</td>';
            table += '<td>'+e[k].tel+'</td></tr>';
        }
        table +='</tbody>';
        $('#contacts').html(table);
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
