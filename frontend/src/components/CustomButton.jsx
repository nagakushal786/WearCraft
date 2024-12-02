import { useSnapshot } from "valtio";
import state from "../store/store";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({type, title, handleClick, customStyles}) => {
  const snap=useSnapshot(state);
  
  const generateStyle=(type)=> {
    if(type==="filled"){
      return {
        backgroundColor: "#EFBD48",
        color: getContrastingColor(snap.color)
      }
    }else if(type=="outline"){
      return {
        backgroundColor: "#fff"
      }
    }
  }

  return (
    <button 
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton;