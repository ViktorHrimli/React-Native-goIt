import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    flex: 1,

    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  conteiner: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontSize: 32,
    lineHeight: 35,
    fontFamily: "Silvana-1",
    textAlign: "center",
    marginTop: 50,
    letterSpacing: 0.01,
    color: "#212121",
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
  form: {
    marginTop: 33,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderColor: "#e8e8e8",
    fontFamily: "Silvana-1",
    color: "#212121",
    padding: 10,
    marginBottom: 20,
    textAlign: "center",
    borderRadius: 8,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    fontFamily: "Silvana-1",
    marginTop: 23,
    padding: 16,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    fontFamily: "Silvana-1",
    color: "#fff",
    fontSize: 18,
  },
});

export { styles };
