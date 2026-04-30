import { Component } from "react";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            label: ""
        }

        this.login = this.login.bind(this);
    }

    async login() {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .then((userCredential) => {
                // Login successful
                window.location.href = "/principal";
            })
            .catch((error) => {
                // Login failed
                if (error.code === 'auth/invalid-credential') {
                    this.setState({ label: "Usuário ou senha incorretos!" });
                }
                else if (error.code === 'auth/invalid-email') {
                    this.setState({ label: "Email inválido!" });
                }
                else if (error.code === 'auth/missing-password') {
                    this.setState({ label: "Senha não informada!" });
                }
                else {
                    this.setState({ label: "Erro ao acessar: " + error.code });
                }
            });
    }


    render() {
        return (
            <>
                <form className="App-header" onSubmit={(e) => {
                    e.preventDefault();
                    this.login();
                }}>
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" size={20} onChange={(e) => this.setState({ email: e.target.value })} /><br />
                    <input type="password" placeholder="Senha" size={20} onChange={(e) => this.setState({ senha: e.target.value })} /><br />
                    <div>
                        <input type="submit" value="Acessar" />
                        <input type="button" value="Cadastrar" onClick={() => window.location.href = "/cadastro"} />
                    </div>
                    <br />
                    <label>{this.state.label}</label>
                </form>
            </>
        )
    }
}

export default Home;
