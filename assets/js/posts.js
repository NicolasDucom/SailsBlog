/**
 * Created by Nicolas on 10/1/2015.
 */
$("#postForm").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax(
        {
            url : formURL,
            type: "POST",
            data : postData,
            success:function(data, textStatus, jqXHR)
            {
                //data: return data from server
            }
        });
    e.preventDefault();
});

$("#ajaxform").submit();