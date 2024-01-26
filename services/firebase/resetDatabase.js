import app from "./firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";

const resetData = () => {
  const db = getDatabase(app);
  const reference = ref(db, "Sensor/");
  set(reference, null);
};

export default resetData;
