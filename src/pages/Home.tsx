import React from 'react';
import BasicForm from '../components/BasicForm';
import { FormatDate } from '../utils/date-utils';
const Home: React.FC = () => {

  let data = '2003-11-21T01:11:11Z';

  return (
    <div>      
      <BasicForm />
      <p className="text-center mt-5">Published: {FormatDate(data)}</p>
    </div>
  );
};

export default Home;