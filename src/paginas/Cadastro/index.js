import { Component } from "react";
import firebase from "../../Firebase";

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            loading: false,
            error: "",
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: "" });

        try {
            // Create user with Firebase Auth
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha);

            // Store additional user data in Firestore (without password)
            await firebase.firestore().collection("usuarios").doc(userCredential.user.uid).set({
                email: this.state.email,
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                dataNascimento: this.state.dataNascimento,
            });

            alert("Usuário cadastrado com sucesso!");
            // Reset form
            this.setState({
                email: "",
                senha: "",
                nome: "",
                sobrenome: "",
                dataNascimento: "",
            });
            window.location.href = "/"; // Redirect to login page after successful registration
        } catch (err) {
            this.setState({ error: err.message });
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        return (
            <div className="App-header">
                <h1>Cadastro</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    /><br />
                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={this.state.senha}
                        onChange={this.handleChange}
                        required
                    /><br />
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        value={this.state.nome}
                        onChange={this.handleChange}
                        required
                    /><br />
                    <input
                        type="text"
                        name="sobrenome"
                        placeholder="Sobrenome"
                        value={this.state.sobrenome}
                        onChange={this.handleChange}
                        required
                    /><br />
                    <label style={{ fontWeight: 'bold', fontSize: '16px' }}>Data de Nascimento:</label><br />
                    <input
                        type="date"
                        name="dataNascimento"
                        placeholder="Data de Nascimento"
                        onChange={this.handleChange}
                        required /><br />
                    <button type="submit" disabled={this.state.loading}>
                        {this.state.loading ? "Cadastrando..." : "Cadastrar"}
                    </button>
                    <button type="cancel" onClick={() => window.location.href = "/"} disabled={this.state.loading}>
                        Cancelar
                    </button>
                </form>
                {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
            </div>
        );
    }
}

export default Cadastro;