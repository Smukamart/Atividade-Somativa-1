import { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <form className='App-header'>
                <h1>Sistema</h1>
                <div>
                    <input type='text' placeholder='Usuário'></input>
                </div>
                <div>
                    <input type='password' placeholder='Senha'></input>
                </div>
                <div>
                    <label></label>
                </div>
                <div>
                    <button name='logar'>Logar</button>
                    <button name='cancelar'>Cancelar</button>
                </div>
            </form>
        )
    }
}

export default Login