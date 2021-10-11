import React  from "react";
import { FlatList } from "react-native";


import Item from "./Item";

import TelaPadrao from "../../componentes/TelaPadrão";
import StatusCarrinho from "../../componentes/StatusCarrinho";

const servicos = [
    {
        id:1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Realizamos a higiene completa do seu pet",
        quantidade: 0
    },
    {
        id:2,
        nome: "Vacina v4",
        preco: 179.9,
        descricao: "Himunize seu pet de várias doenças.",
        quantidade: 0

    },
    {
        id:3,
        nome: "Vacina Antirrábica",
        preco: 89.9,
        descricao: "Vacina contra raiva.",
        quantidade: 0

    },
]

export default function Carrinho(){
    const total = servicos.reduce((soma, { preco, quantidade}) => soma + preco * quantidade, 0)
    return <TelaPadrao>
        <StatusCarrinho total = { total }/>
        <FlatList
            data = {servicos}
            renderItem = {({item}) => <Item {...item} />} 
            keyExtractor = {(item) => String(item.id)}
        />
        </TelaPadrao>
}