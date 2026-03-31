import { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "samukamartins@gmail.com",
            senha: 12345
        }
    }

    render() {
        return (
            <form className='App-header'>
                <h1>Sistema</h1>
                <div>
                    <input type='text' size="30" name="email" placeholder='Email'></input>
                </div>
                <div>
                    <input type='password' size="30" name="senha" placeholder='Senha'></input>
                </div>
                <div>
                    <label id="label"></label>
                </div>
                <div>
                    <button type="submit" name='logar'>Logar</button>
                    <button type="submit" name='cancelar'>Cancelar</button>
                </div>
            </form>
        )
    }
}

export default Login