const button = document.getElementById('entrar')


const validarLogin = async () => {
    const email = document.getElementById('usuario').value
    const password = document.getElementById('senha').value

    const urlLogin = 'https://back-login.vercel.app/usuarios'

    const listUsers = await fetch(urlLogin)

    const objUsers = await listUsers.json()

    if (email == '' || password == ''){
        alert('Por Favor Preencha todos os Campos !!')
    } else {

        let validaUser = false

        objUsers.forEach(user => {
        
            if(user.email == email && user.senha == password){
                validaUser = true
                window.location.href = './pages/home.html'
            }
        });

        if (!validaUser){
            alert('Por favor verifique o email e senha !!')
        }

    }

}
