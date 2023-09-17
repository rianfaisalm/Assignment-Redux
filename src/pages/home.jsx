import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ChangeStatus from '../components/changeStatus';
import Status from '../components/status';
import { decrement, increment } from '../redux/slice/countSlice';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setUsers(response.data.data); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>LIST USERS</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <div className="user-card">
                <div style={{ textAlign: 'center' }}>
                  <strong>Nama: {user.first_name} {user.last_name}</strong>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p>Email: {user.email}</p>
                  <button className="btn-edit-primary" style={{ marginRight: "10px" }}>Edit</button>
                  <button className="btn-detail">Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
//   // const [count, setCount] = useState(100);

//   const countRedux = useSelector((state) => state.count.count);

//   // ini utk rubah si state
//   const dispatch = useDispatch();
//   return (
//     <>
//       <div>
//         <h1 className="text-3xl font-bold underline text-green-600">
//           Hello world Tailwind!
//         </h1>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         {/* <ChangeCount count={count} setCount={setCount} /> */}
//         <p>Ini Merupakan {countRedux} dari React Redux Toolkit</p>
//         <button onClick={() => dispatch(increment())}>Add +1</button>
//         <button onClick={() => dispatch(decrement())}>Add -1</button>
//         <Status />
//         <ChangeStatus />

//         {/* <button onClick={() => dispatch(statusTrue())}>Add -1</button>
//   <button onClick={() => dispatch(statusFalse())}>Add -1</button> */}
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// };

export default Home;
