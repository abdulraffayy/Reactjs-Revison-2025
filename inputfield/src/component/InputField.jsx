import { useState } from "react";


const InputField = () => {
    const [data, setData] = useState("");
  return (
    <>
    <h1>Input Field</h1>
    <input placeholder="Enter Your Data" type="text" value={data} onChange={(e) => setData(e.target.value)}></input>
    <p>{data}</p>
    <button onClick={() => setData("")}>Clear</button>
    </>
  )
}

export default InputField