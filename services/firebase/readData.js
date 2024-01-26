import { getDatabase, push, ref, set, update } from "firebase/database";
import app from "./firebaseConfig";

export default function generateFakeData() {
  const db = getDatabase(app);
  const sensorRef = push(ref(db, "Sensor/"));

  const phLevelValues = parseFloat((Math.random() + 8).toFixed(2));
  const turbidityLevelValues = parseFloat(Math.random().toFixed(2));
  const currentDate = new Date().toISOString();

  const sensorData = {
    pH_Level: {
      Timestamp: currentDate,
      ph_Level_Values: phLevelValues,
    },
    Turbidity_Level: {
      Timestamp: currentDate,
      Turbidity_Level_Values: turbidityLevelValues,
    },
  };

  set(sensorRef, sensorData);
}
