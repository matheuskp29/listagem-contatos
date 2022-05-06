import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [contatos, setContatos] = useState([]);
    const [contador, setContador] = useState(0);

    const capturarNome = (nomeDigitado) => {
        setNome(nomeDigitado);
    }

    const capturarTelefone = (telefoneDigitado) => {
        setTelefone(telefoneDigitado);
    }

    const adicionarContato = () => {
        setContatos(contatos => {
            setContador(contador + 1)
            let aux = [...contatos, { key: contador.toString(), value: {nome: nome, telefone: telefone} } ];
            setNome('');
            setTelefone('');
            console.log(aux);
            return aux;
        });
    }

    return (
        <View style={styles.telaPrincipalView}>
            <View>
                <TextInput
                    style={styles.inputText}
                    placeholder="Digite o Nome"
                    onChangeText = {capturarNome}
                    value={nome}
                />
                <TextInput
                    style={styles.inputText}
                    placeholder="Digite o telefone"
                    onChangeText = {capturarTelefone}
                    value={telefone}
                />
                <Button
                    disabled={nome.length === 0 || telefone.length === 0}
                    title="Adicionar Contato"
                    onPress={adicionarContato}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    telaPrincipalView: {
        padding: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputText: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 4,
        padding: 12,
    },
});
