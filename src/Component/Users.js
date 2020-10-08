import React, { Component } from "react";
import UsersData from "./UsersData"


class Users extends Component{
    render(){
        return(
            <div>
            <h2>Users list</h2>
            <UsersData
            contantCard= {{
                name: "Chen Yaacov",
                imgUrl: "https://scontent.ftlv7-1.fna.fbcdn.net/v/t1.0-9/46456071_10213925660520411_8629760625439932416_n.jpg?_nc_cat=105&_nc_sid=ad2b24&_nc_ohc=W_BLiNoEmVkAX_p4aju&_nc_ht=scontent.ftlv7-1.fna&oh=ff85d03ca3566c0637d4c9a08f02c379&oe=5FA540E9",
                phone: "054-6597211",
                email: "chenyaa89@gmail.com",
            }} 
            />
            <UsersData
            contantCard= {{
                name: "Shavit Yaacov",
                imgUrl: "https://scontent.ftlv7-1.fna.fbcdn.net/v/t1.0-9/20729717_1435610143192092_1110231454557102004_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=t8rp6-3J5vUAX-E1QcO&_nc_ht=scontent.ftlv7-1.fna&oh=e9b00def3c76d429f12747f9013c7a33&oe=5FA4CDE3",
                phone: "054-6597210",
                email: "shavit@gmail.com",
            }} 
            />

            <UsersData
            contantCard= {{
                name: "Ronen Yaacov",
                imgUrl: "https://scontent.ftlv7-1.fna.fbcdn.net/v/t1.0-9/13912666_1183877098302143_623272169416215165_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_ohc=6i31rlnxZjMAX9jBjpT&_nc_ht=scontent.ftlv7-1.fna&oh=5dd11d956504e6a976565dbba9dc3363&oe=5FA4C723",
                phone: "054-6597002",
                email: "ronen@gmail.com",
            }} 
            />
            
            <UsersData
            contantCard= {{
                name: "Yeudit Yaacov",
                imgUrl: "https://scontent.ftlv7-1.fna.fbcdn.net/v/t1.0-9/13920907_1181714895185030_6001687464041620385_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=-c9EWUXqr00AX99szDY&_nc_ht=scontent.ftlv7-1.fna&oh=44bc379df3844173ea93f6e6a34ef850&oe=5FA3915A",
                phone: "054-6597209",
                email: "yeudit@gmail.com",
            }} 
            />


            </div>
        )
    }
}

export default Users