
import { db } from "../db.js";

export const getUsers = (req, res) =>{
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

}


