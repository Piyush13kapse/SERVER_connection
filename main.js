const express = require("express")
const mysql = require("mysql")
require('dotenv').config(); 


const con = mysql.createConnection({
    host : process.env.db_host,
    user : process.env.db_user,
    password : process.env.db_password 

})

con.connect(function(err){
    if(err)

        {console.log(err)

        }
        else
         {
            console.log("connected")
            con.query("create database asd",function(err,r)    //Always edit the database name here ("create database '______'   " )
        {if(err)

            {console.log(err)
    
            }
            else{
                
                console.log("DB created")
                {
                    
                }

            }

        })
        }
})