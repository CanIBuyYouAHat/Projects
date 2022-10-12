import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
/*import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from "@react-native-community/google-signin";

useEffect(() => {
  configureGoogleSign();
}, []);

function configureGoogleSign() {
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
    offlineAccess: false,
  });
}*/

export default function App() {
  /*const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();
    }
  }*/
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHander() {
    setModalVisible(!modalVisible);
  }

  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHander();
  }

  function endAddGoalHander() {
    setModalVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      /* anon func, takes in arr currentCourseGoals, filters (removes all that are false in the inner func)*/
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <View>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHander}
        />
      </View>
      <GoalInput
        visible={modalVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHander}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelete={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 75,
    paddingHorizontal: 16,
    justifyContent: "center",
    backgroundColor: "black",
  },
  goalsContainer: {
    flex: 4,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  div: {
    padding: 5,
  },
});
