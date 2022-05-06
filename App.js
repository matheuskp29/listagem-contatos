import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

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
            let aux = [...contatos, { key: contador.toString(), value: {nome: nome, telefone: telefone}}];
            setNome('');
            setTelefone('');

            // Imprimindo no log o array
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

            {/* Bonus FlatList */}
            <FlatList
                data={contatos}
                renderItem={contato => (
                    <View style={styles.itemNaLista}>
                        <Text>{contato.item.value.nome} - {contato.item.value.telefone}</Text>
                    </View>
                )}
            />
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
    itemNaLista: {
        marginTop: 8,
        padding: 12,
        backgroundColor: '#CCC',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
        width: 250
    }
});
