import { StyleSheet } from "react-native"
import { useUser } from "../info/UserContext"
import Constants from "expo-constants"
import theme from "./theme"

export const stylesGlobalMaster = () => {
  const { user } = useUser()
  const dark = user.darkMode

  return StyleSheet.create({
    menu: {
      backgroundColor: "purple",
    },

    menuContent: {
      justifyContent: "center",
      alignItems: "center",
      //flexDirection: "row",
      gap: 5,
    },

    menuButton: {
      padding: 5,
      paddingVertical: 10,
      width: 90,
      margin: 1,
      borderRadius: 2,
      justifyContent: "center",
      alignItems: "center",
    },

    menuTextButton: {
      color: "white",
    },

    contentPrueba: {
      marginTop: theme.global.margin,
      padding: theme.global.padding,
      backgroundColor: theme.backgrounds.Primary,
      minHeight: "auto",
      borderRadius: theme.global.borderRadius,
    },

    infoContent: {
      justifyContent: "center",
      padding: theme.global.padding,
      backgroundColor: theme.backgrounds.Secondary,
      borderRadius: theme.global.borderRadius,
    },

    titleInfoContent: {
      fontSize: 25,
      fontWeight: "bold",
      color: theme.textColor.Secondary,
      marginBottom: 15,
    },

    textInfoContent: {
      fontSize: 11,
      marginBottom: 3,
    },

    text: {
      fontSize: 10,
      color: theme.textColor.Primary,
    },

    pink: { backgroundColor: "#ff00e6" },
    orange: { backgroundColor: "#f24822" },
    green: { backgroundColor: "#14ae5c" },
    purple: { backgroundColor: "#9747ff" },
    yellow: { backgroundColor: "#ffcd29" },
    blue: { backgroundColor: "#0d99ff" },

    fullScreen: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    topScreen: {
      flex: 0.68,
      padding: 10,
    },

    bottomScreen: {
      flex: 0.32,
      bottom: 0,
      left: 0,
      right: 0,
      position: "fixed",
    },

    darkmodeContent: {
      backgroundColor: "#383838",
    },

    lightmodeContent: {
      backgroundColor: "#f5f5f5",
    },

    //Modal
    modal: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      color: "white",
    },
    modalItem: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
      width: "90%",
      alignItems: "center",
    },
    modalOptions: {
      color: "white",
      fontSize: 40,
    },

    labelSearch: {
      textAlign: "center",
      fontSize: 20,
      color: dark
        ? theme.darkMode.textColorPrimary
        : theme.lightMode.textColorPrimary,
      marginTop: 40,
    },

    inputSearch: {
      display: "flex",
      backgroundColor: dark
        ? theme.darkMode.textColorSecundary
        : theme.lightMode.textColorSecundary,
      borderWidth: 2,
      borderColor: "red",
      alignSelf: "center",
      width: "90%",
      fontSize: 20,
      marginTop: 20,
      padding: 10,
      paddingHorizontal: 20,
      borderRadius: theme.global.borderRadiusMini,
      fontWeight: "bold",
    },

    cardOnePlayer: {
      paddingBottom: 40,
    },
  })
}

/* "alignContent",
  "alignItems",
  "alignSelf",
  "aspectRatio",
  "borderBottomWidth",
  "borderEndWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderStartWidth",
  "borderTopWidth",
  "borderWidth",
  "bottom",
  "columnGap",
  "direction",
  "display",
  "end",
  "flex",
  "flexBasis",
  "flexDirection",
  "flexGrow",
  "flexShrink",
  "flexWrap",
  "gap",
  "height",
  "inset",
  "insetBlock",
  "insetBlockEnd",
  "insetBlockStart",
  "insetInline",
  "insetInlineEnd",
  "insetInlineStart",
  "justifyContent",
  "left",
  "margin",
  "marginBlock",
  "marginBlockEnd",
  "marginBlockStart",
  "marginBottom",
  "marginEnd",
  "marginHorizontal",
  "marginInline",
  "marginInlineEnd",
  "marginInlineStart",
  "marginLeft",
  "marginRight",
  "marginStart",
  "marginTop",
  "marginVertical",
  "maxHeight",
  "maxWidth",
  "minHeight",
  "minWidth",
  "overflow",
  "padding",
  "paddingBlock",
  "paddingBlockEnd",
  "paddingBlockStart",
  "paddingBottom",
  "paddingEnd",
  "paddingHorizontal",
  "paddingInline",
  "paddingInlineEnd",
  "paddingInlineStart",
  "paddingLeft",
  "paddingRight",
  "paddingStart",
  "paddingTop",
  "paddingVertical",
  "position",
  "right",
  "rowGap",
  "start",
  "top",
  "width",
  "zIndex",
  "shadowColor",
  "shadowOffset",
  "shadowOpacity",
  "shadowRadius",
  "transform",
  "backfaceVisibility",
  "backgroundColor",
  "borderBottomColor",
  "borderBottomEndRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomStartRadius",
  "borderColor",
  "borderCurve",
  "borderEndColor",
  "borderEndEndRadius",
  "borderEndStartRadius",
  "borderLeftColor",
  "borderRadius",
  "borderRightColor",
  "borderStartColor",
  "borderStartEndRadius",
  "borderStartStartRadius",
  "borderStyle",
  "borderTopColor",
  "borderTopEndRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopStartRadius",
  "elevation",
  "opacity",
  "pointerEvents",
  "color",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "includeFontPadding",
  "letterSpacing",
  "lineHeight",
  "textAlign",
  "textAlignVertical",
  "textDecorationColor",
  "textDecorationLine",
  "textDecorationStyle",
  "textShadowColor",
  "textShadowOffset",
  "textShadowRadius",
  "textTransform",
  "userSelect",
  "verticalAlign",
  "writingDirection" */
