import React, { Component } from 'react';
import farebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            email: "",
            dataNascimento: "",
        };
    }
    async componentDidMount() {
        await farebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                var uid = user.uid;
                await farebase.firestore().collection("usuarios").doc(uid).get()
                    .then((doc) => {
                        if (doc.exists) {
                            this.setState({
                                nome: doc.data().nome || "",
                                sobrenome: doc.data().sobrenome || "",
                                email: doc.data().email || "",
                                dataNascimento: doc.data().dataNascimento || ""
                            });
                        } else {
                            console.log("Nenhum documento encontrado para o usuário.");
                        }
                    })
                    .catch((error) => {
                        console.error("Erro ao buscar dados do usuário:", error);
                    });
            }
        });
    }

    render() {
        return (
            <div className="App-header">
                <input type="button" value="Sair" onClick={() => farebase.auth().signOut().then(() => window.location.href = "/")} style={{ fontFamily: 'Arial', fontSize: '18px'}} />
                <h1>Bem-vindo à Página Principal!</h1>
                <p>Esta é a página principal do aplicativo. Aqui você pode acessar as funcionalidades principais após fazer login.</p>
                <h2>Informações do Usuário</h2>
                <p><strong>Nome:</strong> {this.state.nome}</p>
                <p><strong>Sobrenome:</strong> {this.state.sobrenome}</p>
                <p><strong>Email:</strong> {this.state.email}</p>
                <p><strong>Data de Nascimento:</strong> {this.state.dataNascimento}</p>
            </div>
        );
    }

}

export default Principal;