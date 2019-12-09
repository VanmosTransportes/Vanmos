import LoginScreen from '../telas/LoginScreen'
import CadastroPassageiro from '../telas/CadastroPassageiro';
import Home from '../telas/Home'
import CadastroVeiculo from '../telas/CadastroVeiculo'
import CadastroMotorista from '../telas/CadastroMotorista'
import CadastroTransportadora from '../telas/CadastroTransportadora';
import PerfilPassageiro from '../telas/PerfilPassageiro';
import TelaDono from '../telas/TelaDono';
import TelaListarFrota from '../telas/TelaListarFrotas';
import TelaListarVansPassageiros from '../telas/TelaListarVansPassageiro';
import TelaMarcarViagemPassageiro from '../telas/TelaMarcarViagemPassageiro';
import Main from '../pages/Main/index'

import {createStackNavigator, createAppContainer} from 'react-navigation-stack';

const Navigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Cadastro: {screen: CadastroPassageiro},
  Home: {screen: Home},
  CadastroVeiculo: {screen: CadastroVeiculo},
  CadastroTransportadora: {screen: CadastroTransportadora},
  CadastroMotorista: {screen: CadastroMotorista},
  PerfilPassageiro: {screen: PerfilPassageiro},
  TelaDono: {screen: TelaDono},
  TelaListarFrota: {screen: TelaListarFrota},
  TelaListarVansPassageiros: {screen: TelaListarVansPassageiros},
  TelaMarcarViagemPassageiro: {screen: TelaMarcarViagemPassageiro},
  Main: {screen: Main}
});

const Routes = createAppContainer(Navigator);

export default Routes;