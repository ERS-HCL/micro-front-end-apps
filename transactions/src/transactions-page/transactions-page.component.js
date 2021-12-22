import React, { useState, useEffect } from "react";
import TransactionsList from "../transactions-list/transactions-list.component.js";
import axios from "axios";



export default function TransactionsPage() {
  const [posts, setPosts] = useState( [
    {  
        "window": {
          "start": "+53918-08-30T12:05:00.000+05:30",
          "end": "+53918-08-30T12:15:00.000+05:30"
          },
          "vehicletype": "Truck",
          "enginenumber": "mySiBZj",
          "vehicleid": "1"
     
    },
    {  
      "window": {
        "start": "+53918-08-30T12:05:00.000+05:30",
        "end": "+53918-08-30T12:15:00.000+05:30"
        },
        "vehicletype": "Truck",
        "enginenumber": "mySiBZj",
        "vehicleid": "1"
   
  },] );
 console.log(posts);
  // useEffect(() => {
  //   const axiosPosts = () => {
  //     // const response = axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
  //     // setPosts(response.data);
  //     // });
  //     const response = axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(function (response) {
  //       //console.log(response);
  //       setPosts(response.data);
  //     })}
  //   axiosPosts();
  // }, []);

  return (
    <div>
      <div className="flex">
        <div className="p-6">
            <TransactionsList
              posts={posts}
            />
        </div>
       
      </div>
    </div>
  );

 
  
}


