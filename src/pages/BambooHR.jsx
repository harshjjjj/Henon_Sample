import React, { useEffect , useState} from 'react';
import InitialsAvatar from 'react-initials-avatar';
import axios from 'axios';


const BambooHR = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const [appData, setappData] = useState([]);

// 4bb391d72895979e8422b786efe97df580a779b6
  const fetchData = async () => {
    try {
      const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.bamboohr.com/api/gateway.php/isolw/v1/employees/directory/', {
      params:{
        "format": "json"
      }, 
      headers:{
        "accept": "application/json"
      },
      auth: {
          username: '4bb391d72895979e8422b786efe97df580a779b6',
          password: 'x'
        }
      });
      setappData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data from BambooHR API:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 ">
    <h1 className="text-3xl font-bold mb-4">Employee Directory</h1>
    {appData ? (  <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
      
      {appData.employees.map((employee) => (
        <div
          key={employee.id}
          className="bg-white rounded-lg shadow hover:scale-105 transition-transform duration-300 bg rounded shadow p-6"
        >
          {employee.photoUploaded ? (
            <img
              src={employee.photoUrl}
              alt={employee.displayName}
              className="mx-auto mb-4 rounded-full h-24 w-24 object-cover"
            />
          ):(
            <InitialsAvatar className="bg-gray-300 mx-auto mb-5 rounded-full h-24 w-24 flex items-center text-gray-700 text-lg font-semibold justify-center overflow-hidden" name={employee.displayName} />
          )}
          <h2 className="text-lg font-semibold">{employee.displayName}</h2>
          <p className="text-gray-600 mb-2">{employee.jobTitle}</p>
          <p className="text-sm text-gray-500 mb-2">{employee.department}</p>
          <p className="text-sm text-gray-500 mb-2">{employee.location}</p>
          <div className="flex space-x-2">
            {employee.linkedIn && (
              <a
                href={employee.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                LinkedIn
              </a>
            )}
            {employee.instagram && (
              <a
                href={employee.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700"
              >
                Instagram
              </a>
            )}
          </div>
        </div>
      ))}
    </div>): (<div>No Data found</div>)} 
  
  </div>
  );
};

export default BambooHR;
