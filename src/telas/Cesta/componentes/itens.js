import React from "react";
import Texto from "../../../componentes/Texto";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native";

export default function Itens({ titulo, lista }) {
    return <>
        <Texto style={estilos.titulo}>{ titulo }</Texto>
        {lista.map(({nome, imagem}) => {
           return <View key={nome} style={estilos.itens}>
            <Image source={imagem} style={estilos.imagem}/>
            <Texto style={estilos.nome}>{ nome }</Texto>
            </View>
        })}
    
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,

    },
    itens: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        color: "#464646",
        marginLeft: 11,
    }
})