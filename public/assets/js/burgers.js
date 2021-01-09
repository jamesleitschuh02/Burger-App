$(function(){
    $(".create-burger").on("submit",function(event){
        event.preventDefault();

        const newBurger = {
            burger_name: $('#bg').val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("You made a tasty burger!");
                location.reload();
            }
        );
    });
});