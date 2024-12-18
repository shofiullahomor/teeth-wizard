import { AuthContext } from "./AuthProvider";
import { useContext, useState, useEffect } from "react";

const MyAppoinment = () => {
  const { user } = useContext(AuthContext);
  const [localSaveData, setLocalSaveData] = useState([]);
  useEffect(() => {
    const localData = localStorage.getItem("appointments");
    let saveData = [];
    if (localData) {
      saveData = JSON.parse(localData);
    }
    const userData = saveData.filter((data) => data.email === user?.email);

    console.log(userData);
    setLocalSaveData(userData);
  }, []);
  return (
    <div>
      <h1>my appointment</h1>
      <div></div>
    </div>
  );
};

export default MyAppoinment;
