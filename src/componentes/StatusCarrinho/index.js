import React from 'react';
import { View , Text, Button, Alert} from 'react-native';
import Botao from '../Botao'
import estilos from './estilos'

export default function StatusCarrinho({total}){
    return <View style ={estilos.conteudo}>
        <View style = {estilos.total}>
            <Text style = {estilos.descricao}>Total do Carrinho</Text>
            <Text style ={estilos.valor}>
                {
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)
                }
            </Text>
        </View>
        <View style = {estilos.botao}>
            <Botao style = {estilos.botao} valor = 'Concluir Pedido' invertido = 'true' acao = {()=>alert('Pedido confirmado no total de = ' + total)}/>
        </View>
    </View>
}