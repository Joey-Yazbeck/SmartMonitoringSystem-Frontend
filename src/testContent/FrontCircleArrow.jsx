import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {useRef} from 'react';


export default function ArrowFrontCircle(props)  {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.crurent.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const reader = new FileReader();
    const byteImage = reader.readAsArrayBuffer(fileObj);

    reader.onloadend = () => {
      console.log("reader.result ", reader.result);
      const byteArray = new Uint8Array(reader.result);
      console.log("reader.result ", byteArray);

      const base64String = btoa(String.fromCharCode.apply(null, byteArray));

      const data ={
        profileId: props.profileId,
        photo: base64String
      };

      sendToApi(data);
      
    };

    console.log("reader: ", reader);

    const sendToApi = (data) => {
      try {

        const res =  fetch("http://localhost:7199/api/Target/AddTarget", {
          method: "POST",
          headers: {
                  'Accept': 'application/json',
                  'Content-Type':'application/json'
              },
          body: JSON.stringify(data)
        }).then(response => {
          if (response.ok) {
            console.log('success', response);
          }
          else {
            console.log(response);
          }
        });
        
      } catch (err) {
        console.log(err);
      }
    }
    
  };


  return (
    <div>
    <input
      style={{display: 'none'}}
      ref={inputRef}
      type="file"
      onChange={handleFileChange}
    />

    <button style={{outline: 'none', border : 'none', backgroundColor:'white'}} onClick={handleClick}><BsFillArrowRightCircleFill/></button>
    </div>
  );
}