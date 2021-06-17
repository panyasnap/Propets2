import React from 'react';
import Map from "./Map";


const RightSide = (props) => {

    return (
       <div>
           {!props.button?
           <div>
           <Map/>
         </div>:null}
       </div>

    );
};
export default RightSide;