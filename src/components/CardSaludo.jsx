import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

import logo from "../assets/react.svg";

const CardSaludo = (props)=>{
    
    return (
        <Card>
            <CardContent>
                Buenos días estimado {props.nombre}  {props.apellido}
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ipsa officia excepturi natus doloribus quisquam odio ipsum dolore fugiat voluptatum. Nesciunt adipisci repellendus quisquam magnam, nihil veritatis animi incidunt ratione.

         
            </CardContent>
            <CardContent sx={{display:"flex",justifyContent:"center"}}>
                <img src={logo} alt="" />
            </CardContent>
        </Card>
    );
}


export default CardSaludo;