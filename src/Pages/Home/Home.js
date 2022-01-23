import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNumber } from '../Redux/Action/Action';

const Home = () => {
      const doctors = useSelector((state) => state.doctor.alldoctor)
      const dispatch = useDispatch()
      const numbers = useSelector((state) => state.doctor.addnumber)
      return (
            <div>
                  {
                        doctors.map(doctor => <h3>{doctor?.name}</h3>)
                  }
                  {/* {
                        numbers.map(n => <h1>{n}</h1>)
                  } */}
                  <h1>{numbers.slice(-1)}</h1>

                  <button onClick={() => dispatch(addNumber(10))}>Click</button>
            </div>
      );
};

export default Home;