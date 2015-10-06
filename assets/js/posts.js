/**
 * Created by Nicolas on 10/1/2015.
 */
$( document ).ready(function() {
    $.ajax(
        {
            url : "/post",
            type: "GET",
            success:function(data)
            {
                console.log(data);
                $("#posts").append(data);
            }
        });
});

$("#postForm").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax(
        {
            url : formURL,
            type: "POST",
            data : postData,
            success:function(data)
            {

            }
        });
    e.preventDefault();
});

