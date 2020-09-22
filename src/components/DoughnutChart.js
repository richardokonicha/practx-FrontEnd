import React, {useState} from 'react';
import { Doughnut } from 'react-chartjs-2';






const DoughnutChart = () => {

    const [data, setData] = useState({
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'New Patients',
          backgroundColor: ["red", "orange", "indigo", "lightgreen", "lightblue", "magenta"],
          borderColor: 'white',
          borderWidth: 3,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 6, 25]
        },

      ]
    });

    return (
        <Doughnut
          data={data}
          options={{}}
        />
    );
}

export default DoughnutChart;