import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNumber, minusNumber, submitForm, userList } from '../Redux/Action/AddNumber';

const User = () => {
      const [info, setInfo] = useState({})
      const counter = useSelector(state => state.counter.count)
      const name = useSelector(state => state.counter.name)
      const user = useSelector(state => state.counter.user)
      const details = useSelector(state => state.counter.info)
      const dispatch = useDispatch()

      useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                  .then(res => res.json())
                  .then(data => dispatch(userList(data)))
      }, [dispatch])

      const handleInfo = e => {
            e.preventDefault()
            const info = e.target.name;
            const value = e.target.value
            setInfo(prev => ({ ...prev, [info]: value }))

      }


      // const fetchuser = () => {
      //       fetch('https://jsonplaceholder.typicode.com/users')
      //             .then(res => res.json())
      //             .then(data => dispatch(userList(data)))
      // }
      // useEffect(() => {
      //       fetchuser()
      // }, [])
      return (
            <div>
                  <h1>{name}</h1>
                  <h1>{counter}</h1>
                  <button onClick={() => dispatch(addNumber(5))}>Add</button>
                  <button onClick={() => dispatch(minusNumber())}>Minus</button>
                  {
                        user.map(u => (
                              <ul key={u?.id}>
                                    <li style={{ color: 'red', textDecoration: 'none' }}>{u?.name}</li>
                              </ul>
                        ))
                  }

                  <input onBlur={handleInfo} type="text" name="name" />
                  <br />
                  <input onBlur={handleInfo} type="password" name="pass" />
                  <br />
                  <button onClick={() => dispatch(submitForm({ ...info }))}>Submit</button>

                  <br />

                  <h1>{details?.name}</h1>
                  <h1>{details?.pass}</h1>



            </div>
      );
};

export default User;