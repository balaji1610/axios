import { useEffect, useState } from "react";
import { services } from "./services/services";
const AxiosData = () => {
  const [myAxiosData, setmyAxiosData] = useState([
    {
      body: "",
      id: "d",
      title: "",
      userId: "",
    },
  ]);
  const getDatas = async () => {
    let Data = await services.getMyData();
    setmyAxiosData(Data);
  };
  useEffect(() => {
    getDatas();
  }, []);
  return (
    <>
      <div>
        {myAxiosData.map((value, index) => {
          //   console.log(index)
          return (
            <div>
              <p key={index}>
                {" "}
                ID : {value.id} UserName: {value.username} Name:{value.name}{" "}
                Email:{value.email}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default AxiosData;
