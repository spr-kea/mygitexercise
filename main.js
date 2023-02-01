fetch("actors.json")
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json()
    })

    .then((data) => {
        console.log(data)
        handleData(data);

    })

    .catch((e) => {
        console.error("an error occured", e.message)
    });

function handleData(actors) {
    actors.forEach((actor) => {
        const myTemplate = document.querySelector("template").content;
        const clone = myTemplate.cloneNode(true);
        clone.querySelector("#name").textContent = actor.fullname;
        clone.querySelector("p.info").textContent = actor.movie;
        const mainEl = document.querySelector("main");

        mainEl.appendChild(clone);


        console.log(actor);
    });

const element = document.getElementById("myBtn");
element.addEventListener("click", function () {
    removeHidden()
});















    // document.querySelector(".movie").addEventlistener("click",() => removeHidden());
};




function removeHidden() {
    document.querySelector(".movie").classList.remove("black");
    console.log("hi");
};




// .then(function(actors){
//     document.querySelector("myTemplate").content;

// })