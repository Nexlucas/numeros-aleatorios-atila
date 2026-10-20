import { Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function PaginaInicial() {
    const [ numeroAleatorio, setNumeroAleatorio ] = useState(0);

    function gerarNumero(){
        const novoNumero = Math.floor(Math.random() * 100 );
        setNumeroAleatorio(novoNumero);
    }

    return(
        <View style={styles.conteudoCentralizado}>
            <Text style={styles.titulo}>Gerar número aleatório</Text>
            <Text style={styles.subTitulo}>{ numeroAleatorio }</Text>

            <View style={styles.areaBotao}>
                <Text>Clique no botão para gerar um número aleatório</Text>
                <Button title='Gerar número'></Button>
            </View>
        </View>
    );
}