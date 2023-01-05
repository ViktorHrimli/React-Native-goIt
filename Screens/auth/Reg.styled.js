import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  conteiner: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 50,
  },
  conteinerImg: {
    position: "absolute",
    left: "35%",
    width: 120,
    height: 120,
    zIndex: 1,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  titleText: {
    fontFamily: "Silvana-1",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
  form: {
    marginTop: 33,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderColor: "#e8e8e8",
    fontFamily: "Silvana-1",
    color: "#212121",
    padding: Platform.OS === "ios" ? 14 : 10,
    fontSize: Platform.OS === "ios" ? 16 : 14,
    marginBottom: 20,
    textAlign: "center",
    borderRadius: 8,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 15,
    padding: 16,
    fontFamily: "Silvana-1",
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Silvana-1",
    fontSize: 18,
  },
});

export { styles };
