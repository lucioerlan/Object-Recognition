import { Text, View, Linking } from 'react-native';
import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { termsStyles } from './style';

export default class TermsAndConditions extends Component {
  render() {
    const y = new Date();
    return (
      <View style={termsStyles.contentView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={termsStyles.loginTxt3}>
            Política de Privacidade e Proteção de Dados
          </Text>

          <Text style={termsStyles.loginTxt4}>
            O Image Recognition armazena os dados dos usuários que usam o
            aplicativo e garante sua segurança e confidencialidade. O registro
            de usuários neste aplicativo é gerenciado através do sistema de
            autenticação do Google. Você pode consultar clicando em{' '}
            <Text
              onPress={() => {
                Linking.openURL(
                  'https://policies.google.com/privacy?hl=pt&gl=br'
                );
              }}
              style={termsStyles.loginTxt2}
            >
              aquí
            </Text>
          </Text>

          <Text style={termsStyles.loginTxt3}>
            Condições gerais de uso do aplicativo
          </Text>

          <Text style={termsStyles.loginTxt4}>
            O acesso ao aplicativo é gratuito. Entretanto você pode notar alguns
            anúncios em sua tela. Você pode consultar a política de anúncios do
            Google, clicando em{' '}
            <Text
              onPress={() => {
                Linking.openURL(
                  'https://play.google.com/intl/pt-br/about/monetization-ads'
                );
              }}
              style={termsStyles.loginTxt2}
            >
              aquí.
            </Text>
          </Text>

          <Text style={termsStyles.loginTxt3}>Conteúdo</Text>

          <Text style={termsStyles.loginTxt4}>
            O Image Recognition é um aplicativo para reconhecimento de imagens
            que usa a biblioteca Tensorflow como base, você pode ler mais sobre
            o TensoFlow , clicando em{' '}
            <Text
              onPress={() => {
                Linking.openURL('https://www.tensorflow.org/');
              }}
              style={termsStyles.loginTxt2}
            >
              aquí.
            </Text>
          </Text>

          <Text style={termsStyles.loginTxt4}>
            {' '}
            {`copyright \u00A9 - Erlan Lucio. ${y.getFullYear()}`}
          </Text>
        </ScrollView>
      </View>
    );
  }
}
