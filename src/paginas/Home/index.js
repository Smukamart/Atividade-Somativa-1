import { Component } from "react";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            label: ""
        }
    }

    login() {
        if (this.state.email === "eduardo.lino@pucpr.br" && this.state.senha === "123456") {
            this.setState({ label: "Acessado com sucesso!" });
        } else {
            this.setState({ label: "Usuário ou senha incorretos!" });
        }
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
                    <input type="submit" value="Acessar" /><br />
                    <label>{this.state.label}</label>
                </form>
            </>
        )
    }
}

export default Home;
