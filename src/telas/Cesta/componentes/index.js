import React from "react";
import { StyleSheet, View, ScrollView} from "react-native"

import Detalhes from "./Detalhes";
import Itens from "./itens";
import Topo from "./Topo";


export default function Cesta( {topo, detalhes, itens} ) {
    return <ScrollView>
    <Topo {...topo} />
    <View style={estilos.cesta}>
    <Detalhes {...detalhes} />
    <Itens {...itens}/>
    </View>
    </ScrollView>
}

const estilos = StyleSheet.create( {
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,

    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})