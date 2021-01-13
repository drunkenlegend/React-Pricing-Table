import React from 'react'
import Card  from "./Card.js";

function Pricing() {
    return (
        
        <div style={priceCard}>
          <Card cost="0" plan="Starter" selected="111000" color="#589e52" />
          <Card cost="25" plan="Professional" selected="111100" color="#ca76e5"/>
          <Card cost="50" plan="Organization" selected="111111" color="#f684a5"/>
        </div>
        
    )
}
const priceCard={
    display:"flex",
    flexWrap:"wrap",
    position:"relative",
    // border:"2px black solid",
    marginTop:"50px",
    columnGap:"30px",
    rowGap:"30px",
    padding:"10px",
    justifyContent:"center"
  }
export default Pricing
