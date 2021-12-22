import React, { Fragment } from "react";
// import { useTable } from 'react-table'


export default function TransactionsList({ posts }) {
  

  return (
    <div>
      <h1> Transactions List </h1>
      <table id="transactions" width="100%">
              <tr>
                <th><strong>Vehicle Type</strong></th>
                <th><strong>Engine Number</strong></th>
                <th><strong>Vehicle Number</strong></th>
              </tr>
      <Fragment>
        {posts.map((transaction, index) => {
          let borderClass = "border-b";
          if (index === 0) {
            borderClass = "border-t border-b";
          } else if (index + 1 === posts.length) {
            borderClass = "";
          }
          return (
              <tr>
              <td> {transaction.vehicletype}</td>
              <td> {transaction.enginenumber}</td>
              <td> {transaction.vehicleid}</td>
              </tr>
          );
        })}
       
      </Fragment>
      </table>
    </div>
  );
}
