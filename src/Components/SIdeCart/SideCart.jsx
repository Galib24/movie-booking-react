import React from 'react';

const SideCart = ({watchTime}) => {
    return (
        <div>
          <h1>My Cart</h1>
          <div className='mt-5 text-center'>
            <p>total watch time </p>
            <input type="text" value={0} disabled />
          </div>
          <h5 className='mt-5'>Added Break time </h5>
          <button className='w-25 btn-circle m-1 btn btn-info'>15</button>
          <button className='w-25 btn-circle bg-warning btn btn-info'>20</button>
          <button className='w-25 btn-circle bg-danger btn btn-info'>25</button>
          <input className='mt-3' type="text" value={0} disabled/>
          <br />
          <button className='mt-3 btn btn-info'>Complete</button>
        </div>
    );
};

export default SideCart;