import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';



const BarChart = () => {

    const [data, setData] = useState({
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'New Patients',
          backgroundColor: 'transparent',
          borderColor: '#3598dc',
          borderWidth: 4,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },

        {
          label: 'Old Patients',
          backgroundColor: 'transparent',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 3,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [15, 9, 90, 72, 26, 53, 60]
        }

      ]
    });
  
    return(
        <Line
          data={data}
          options={{ }}
        />
    );                       

}

export default BarChart;