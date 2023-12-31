import { StyleSheet } from "react-native"
import { useUser } from "../info/UserContext"

export const stylesX = () => {
  const { user } = useUser()
  const dark = user.darkMode

  return StyleSheet.create({
    red: {
      color: dark ? "red" : "green",
    },
  })
}
