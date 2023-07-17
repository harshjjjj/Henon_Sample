import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [trialBalanceData, settrialBalanceData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {

      const response = await axios.get('https://cors-anywhere.herokuapp.com/https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365318735250/reports/TrialBalance', {
        params: {
          'minorversion': '12'
        },
        headers: {
          'accept': 'application/json',
          'authorization': 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..0cRGJPgEqSkBKXtWrZsHOg.i6IMlisIVStXr0BY-zZaN8d-VJVj3u2oKi9qDUULCIFa4J1GWOI12Et42wgei7DuntlIyCpBlMTqkDWrFIyLkE5hby0XWjTJBYh4AJUYpDryQD7CmvMraqfPr6-ZdlZJOF1-H-Ee8oLxP0LxxbYL2fXXue69UCfkkAsKCFCTPWcBpOySvbQ1Qd2QC7FuXSf76Jl6qGpzuL5NCJQ8soaFUnTCp7VTGyluhd6s3-o4eDV3J23A28Cu6WR4Qi9WMEMG6EG6-5XJegZnG9T_gLeEA9wu7CDHZs7qjxQfQEgJzSDlPlRP1lJYFl_Vpayfiy3hLcaZDzAUGgdJ3bYKGTf94YGoZ-rxRbA9yd5uxc2qGFCjjdrJaaE3U606laMnBt65SP8J9qep1tAQiKjQo107BdaL1phX_NlNljGsTNEqfVpll2Z1RKwGvLPHz88EdH97a6U1obDJwBDBWoZlAwaMAhoHZGRYs0SnRMBqcti0wa7m5WPPi4sGYe8JHz7u10CIbuUV5VMBqrcOMCz6xrLY_Y6aeWOo_NfVOb8u00AEV6fIfy1zRE1ppiw_SD88yNGZGM8qr1NBWhJZOiTCBcTZKnvcWTicqHnzcYdHdbyWiZE2n8g0zZp2IvAOyF3KIb43GS2flbzOIfjffDIrocF9wMKnAExC1ig_lOT8FkGXBQIwOQKC4RzbfGZdFB9EuGQoVJ23EHTc3iJMsa9eliMZDGbj_7vd4ss5DmQCA7GDErkPpaoN8MvIPYXDYqwtEVHVZsfr3oJc7NL04eX6SGgYybz3ZMf4INsWu_mdMzrJ3-foabMyeu5rPIwYzqSeJ5H-ps_92JPInpjKy-aLvCBPu6TPfUP0c-0cW-llAtzDhTAr1vH-JnyiF06T8oK9iVeO.Pbfwh4yOhQUzxSwMeVePdw',
          'content-type': 'application/json'
        }
      });

    
      settrialBalanceData(response.data);
      // console.log('checking trial balance data',trialBalanceData)
      console.log("print response",response.data); 
    } catch (error) {
      console.error('Error fetching data from QuickBooks API:', error);
    }
  };


  if (!trialBalanceData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
    {/* <h1 className="text-2xl font-bold mb-4">Trial Balance</h1>
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {trialBalanceData.Columns.Column.map((column, index) => (
            <th
              key={index}
              className="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b"
            >
              {column.ColTitle}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {trialBalanceData.Rows.Row.map((row, index) => (
          <tr key={index} className="border-b">
            {row.ColData.map((col, index) => (
              <td
                key={index}
                className="py-2 px-4 whitespace-nowrap text-gray-800"
              >
                {col.value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table> */}
  </div>

  );
              };

export default Home;
