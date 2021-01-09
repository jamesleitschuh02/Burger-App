$(function(){
    $(".create-burger").on("submit",function(event){
        event.preventDefault();
        console.log("hi");

        const newBurger = {
            burger_name: $('#bg').val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $(".change-devoured").on("click",function(event){
        const id = $(this).data("id");
        
        $.ajax("/api/burgers/"+id,{
            type: "PUT",
            data: 0
        }).then(
            function(){
                console.log("Devoured state changed!");
                location.reload();
            }
        );
    });

    $(".delete-btn").on("click",function(event){
        const id = $(this).data("id");

        $.ajax("/api/burgers/"+id,{
            type: "DELETE"
        }).then(function(){
            console.log("Deleted Burger Succesfully!");
            location.reload();
        });
    });
});