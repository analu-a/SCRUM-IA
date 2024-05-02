
const send = document.getElementById('entrada')

const consultGemini = async(question) => {
    const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle;

    const requestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${question}`
                    }
                ]
            }
        ]
    }


    const requestOptions = {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    }
    await fetch (url, requestOptions)
    .then(response => response.json())
    .then(data => {
        const respostaTextIA = data.candidates[0].content.parts[0].text
        
        respostaIA(respostaTextIA)
    })
    .catch(error => console.error('Error:', error));
}

const respostaIA = (responseTextIa) => {
    const textAreaPt = document.getElementById('portugues')
    textAreaPt.value = responseTextIa
}

send.addEventListener('keypress', (event) =>{
    

    if(event.code === 'Enter'){
        const question = document.getElementById('entrada')
        consultGemini(question)
    }
})