import React, { useState, useEffect } from "react";
import "./fab.css";
import axios from "axios";

const Fab = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/controle");
        setInfo(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  var prod = 0;

  /* info[info.length-1]?.T_end!=null?prod+=Number(info[info.length-1]?.Qte):prod=prod

  for (let i = 0; i<=info.length-2;i++){
      (info[i]?.N_pipelette!==info[i+1]?.N_pipelette)&(info[i]?.T_end!=null)?prod+=Number(info[i]?.Qte):prod=prod
  }*/

  /* for (let i = 0; i<=info.length-1;i++){
    (info[i]?.Operation_name.slice(0,5)==="Contr")||(info[i]?.Operation_name.slice(0,5)==="contr")?
    prod+=Number(info[i]?.quantity):prod=prod
}*/

  let currentDate = new Date();
  let day = currentDate.toLocaleDateString("FR-fr");

  let tab = info.filter((el) => el.cur_day === day);
  console.log(info);

  for (let i = 0; i <= tab.length - 1; i++) {
    prod += Number(tab[i]?.Qte);
  }

  return (
    <div className="fab">
      <p>Qté Fab</p>
      <div className="ind">{prod}</div>
    </div>
  );
};

export default Fab;
