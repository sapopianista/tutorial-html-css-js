function openModal(){
    const modal = document.querySelector(".modal")
    modal.style.display = "flex"
}

function closeModal(){
    const modal = document.querySelector(".modal")
    modal.style.display = "none"
}

function addTicker(event){
    event.preventDefault()

        const ticker = event.target.ticker.value
        const bolsa = event.target.bolsa.value
        const valor = event.target.valor.value
        const ativos = event.target.ativos.value

        const total = valor * ativos

        const card = `
            <div class="card">
                        <div class="card-header">
                            <div class="card-logo">

                                <h2 class="ticker">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/500px-Apple_logo_black.svg.png">${ticker}
                                </h2>
                            </div>
                            <h2 class="bolsa">${bolsa}</h2>
                        </div>
                        <div class="card-main">
                            <h1 class="preço">▲ U${valor}</h1>
                        </div>
                        <div class="card-footer">
                            <h3 class="ativos">N° ativos: ${ativos}</h3>
                            <h3 class="posição">U$${total}</h3>
                        </div>
                    </div>
        `
        const cards = document.getElementById("cards")

        cards.innerHTML += card
        closeModal()

        console.log(card)
}