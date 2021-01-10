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

    $(".devoure-btn").on("click",function(event){
        const id = $(this).data("id");
        const newDevoured = $(this).data("bool");
        
        console.log("Id is " + id);
        console.log("Devoured state is " + newDevoured);

        const newDevouredState = { devoured: newDevoured};
        
        $.ajax("/api/burgers/"+id,{
            type: "PUT",
            data: newDevouredState
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