import { View, Text, ScrollView } from "react-native"
import { globalStyles } from "../styles/globalStyle"
import { styles } from "../styles/componentXStyle"
import globalTraductions from "../traductions/globalTraductions"
import traductions from "../traductions/componentXTraductions"
import { callApi } from "../functions/globalFunctions"
import { language } from "../info/infoConfigUser"
import { infoUser } from "../info/infoUser"
import { AdFooter } from "../ads/adSection"
import Menu from "./Menu"

import FooterMenu from "../components/FooterMenu"

const Players = ({ navigation }) => {
  return (
    <View style={globalStyles.fullScreen}>
      <ScrollView style={globalStyles.topScreen}>
        <View style={globalStyles.contentPrueba}>
          <Text>Submenu componente</Text>
        </View>

        <View style={globalStyles.infoContent}>
          <Text style={globalStyles.titleInfoContent}>Players</Text>

          <Text style={globalStyles.textInfoContent}>
            - Sale quien te ha comprado y tiene la opcion de volverte a comprar
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Sale un listado de todos tus jugadores comprados y el valor actual
            de cada uno
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Historial de toda la gente que te ha comprado y por cuanto dinero,
            en plan log??
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Una opcion para buscar otros usuarios por sus nombres
          </Text>
          <Text style={globalStyles.textInfoContent}>
            - Ranking con los mejores jugadores y la opcion de comprarlos
          </Text>
        </View>
      </ScrollView>

      <FooterMenu {...navigation} />
    </View>
  )
}

export default Players