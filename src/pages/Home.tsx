import React from 'react';
import BasicForm from '../components/BasicForm';
import { FormatDate } from '../utils/date-utils';
const Home: React.FC = () => {

  let data = '2003-11-21T01:11:11Z';

  console.log('Formatted Date', FormatDate(data))

  return (
    <div>      
      <BasicForm />
    </div>
  );
};

export default Home;