import React from "react";
import st from "../Styles/myStyle.module.css";
const s = {
  color: "white",
  backgroundColor: "crimson",
};

const KodexCards = (prop) => {
  return (
    // <div style={{ backgroundColor: "blueviolet" }}>
    //   <h1 style={{ color: s.color }}>{prop.heading}</h1>
    //   <p className="hello">{prop.para}</p>
    //   <button className={st.foot}>{prop.btnText}</button>
    //   <img src={prop.img} alt="" className={st.foot} />
    //   <p className="">hello world</p>
    // </div>
    <div className="bg-amber-200 p-4 py-6 rounded-2xl flex flex-col justify-center items-center w-96">
      <h1 className="text-3xl font-bold pb-4">{prop.heading}</h1>
      <p>{prop.para}</p>
      <button className="bg-orange-400 hover:bg-orange-500 text-white rounded-2xl px-14  py-2 my-6">
        {prop.btnText}
      </button>
      <img src={prop.img} alt="" className="w-full h-44 object-cover" />
    </div>
  );
};

export default KodexCards;
