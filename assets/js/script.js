
for (i = 0; i < localStorage.length; i++) {
    let keyName = localStorage.key(i)
    let keyValue = localStorage.getItem(localStorage.key(i))
    main.innerHTML +=
        `<div class="recap" id="${keyName}">
                <div class="numero">
                    <p>${i+1}</p>
                </div>
                <div class="titre">
                    <p>${keyName} ${keyValue}</p>
                </div>
                <div class="buttonSuppr">
                <button type="button" class="suppression" data-keyname="${keyName}">
                <i class="fas fa-trash-alt"></i>
                </button>
                </div>
            </div>`
            let suppr = document.getElementById(`${keyName}`)
            console.log(suppr)
            document.querySelector(`[data-keyname="${keyName}"]`).addEventListener("click", function(){
                localStorage.removeItem(`${keyName}`)
                suppr.remove()
                //reload nécessaire pour corriger le bug qui ne supprime qu'une fois sans refresh
                location.reload()
            })
}


ajouter.addEventListener("click", function () {

    let keyName = document.getElementById("titreExpo").value
    let keyValue = document.getElementById("lien").value

    localStorage.setItem(keyName, keyValue)

    main.innerHTML += 
    `<div class="recap" id="${keyName}">
        <div class="numero" data->
            <p>#</p>
            </div>
            <div class="titre">
            <p>${keyName} ${keyValue}</p>
            </div>
            <div class="buttonSuppr">
            <button type="button" class="suppression" data-keyname="${keyName}">
            <i class="fas fa-trash-alt"></i>
            </button>
            </div>
    </div>`
    let suppr = document.getElementById(`${keyName}`)
    document.querySelector(`[data-keyname="${keyName}"]`).addEventListener("click", function(){
        localStorage.removeItem(`${keyName}`)
        suppr.remove()
        location.reload()
    })
})




