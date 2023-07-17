import React, { useEffect , useState} from 'react';
import axios from 'axios';

const HubSpot = () => {
  useEffect(() => {
    fetchData();
  }, []);


  // pat-na1-d9fefd29-18c0-4c4b-bd2c-ce87fb91daba
  const [appData, setappData] = useState([]);


  const fetchData = async () => {
    try {

      const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.hubapi.com/crm/v3/objects/contacts', {
        headers: {
          'authorization': 'Bearer pat-na1-d9fefd29-18c0-4c4b-bd2c-ce87fb91daba',
        }
      });
      // const data = await response.json();

      setappData(response.data.results);
      console.log(response.data); // Handle the API response data here
    } catch (error) {
      console.error('Error fetching data from HubSpot API:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contacts</h1>
      <div className="grid grid-cols-2 gap-4">
        {appData.map(contact => (
          <div key={contact.id} className="bg-white rounded shadow p-4 hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg font-bold mb-2">{contact.properties.firstname} {contact.properties.lastname}</h2>
            <p className="text-gray-600 mb-4">{contact.properties.email}</p>
            <p className="text-xs text-gray-500">Created: {new Date(contact.properties.createdate).toLocaleString()}</p>
            <p className="text-xs text-gray-500">Last Modified: {new Date(contact.properties.lastmodifieddate).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HubSpot;
