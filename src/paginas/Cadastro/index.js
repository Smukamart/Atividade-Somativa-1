import { Component } from "react";
import firebase from "../../Firebase";

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
        }
    }
    render() {
        return (
            <>
                <form className="App-header" onSubmit={async(e) => {
                    e.preventDefault();
                    await firebase.firestore().collection("usuarios").add({
                        nome: this.state.nome,
                        sobrenome: this.state.sobrenome
                    });
                    /*await firebase.firestore().collection("usuarios").doc("usuario1").set({
                        nome: this.state.nome,
                        sobrenome: this.state.sobrenome
                    });*/
                    alert("Usuário cadastrado com sucesso!");
                }}>
                    <h1>Cadastro</h1>
                    <input type="text" placeholder="Nome" size={20} onChange={(e) => this.setState({ nome: e.target.value })} /><br />
                    <input type="text" placeholder="Sobrenome" size={20} onChange={(e) => this.setState({ sobrenome: e.target.value })} /><br />
                    <input type="submit" value="Cadastrar" /><br />
                </form>
            </>
        )
    }
}

export default Cadastro;