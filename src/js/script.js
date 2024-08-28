document.querySelector(".btn-advice").addEventListener('click', gerarNovoConselho)

async function gerarNovoConselho(){
    try {
        const url = await fetch('https://api.adviceslip.com/advice')
            if (!url.ok) {
                throw new Error("Ops, parace que tivemos um erro com a resposta da API!!");
            }

        const resp = await url.json()
        const mensagemConselho = resp.slip.advice
        const idMensagem = resp.slip.id
        document.querySelector(".advice-of-day").innerText = mensagemConselho    
        document.querySelector(".advice-number").innerText = `ADVICE #${idMensagem}`
    } catch (error) {
        console.error("Erro ao tentar buscar as informações da API", error);
    }
    
}
gerarNovoConselho()
