import React, { useEffect, useState } from "react";
import EditIcon from '../../icons/edit.svg'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Dashboard(props) {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    console.log(props.history);          
  }, []);

  const dash = {
    boxShadow: '0px 16px 40px #F2F2F2',
    background: '#fff',
    borderRadius: '16px',
    userAvatar: {
      border: '2px solid #FFFFFF',
      filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.15))',
    },
    avContainer: {
      padding: '32px 0 32px 0'
    },
    profileDetails: {
      padding: '24px 32px',
      paddingBottom: '64px',
      border: '1px solid #E0E0E0',
    },
  };

  const form = {
    background: '#F7F7F7',
    borderRadius: '8px',
    outlineColor: '#dddddd',
    border: 'none',
    fontSize: '16px',
    color: '#343434',
    padding: '12px 16px',
    profileDetails: {
      fontWeight: 500,
      fontSize: '14px',
      color: '#454545',
      paddingBottom: '8px',
    },
  };

  const button = {
    background: '#fff',
    color: '#454545',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    padding: '8px 36px',
    fontWeight: '500',
    border: 'none',
    save: {
      background: '#9847EA',
    borderRadius: '8px',
    color: '#fff',
    padding: '8px 36px',
    border: 'none',
    },
    btnTypography: {
      fontSize: '16px'
    },
  }

  const handleEdit = () => {
    setEdit(true);
  }

  return (
    <div style={{ marginTop: '6rem' }} className='container '>
      <div className='d-flex align-items-start justify-content-between'>
        <div style={{ ...dash, ...dash.avContainer, width: '30%' }}>
          <Image style={{ ...dash.userAvatar }} className='mw-100 d-flex justify-content-center mx-auto' width='128' height='128'
            src="https://avatars.githubusercontent.com/u/889610?v=4" roundedCircle />
          <div>
            <h3 style={{ fontWeight: 500, fontSize: '20px', marginTop: '16px' }} className='text-center dashboard-title'>
              Marvin McKinney
            </h3>
          </div>
        </div>
        <div style={{ ...dash, ...dash.profileDetails, width: '65%' }}>
          <div style={{ paddingBottom: '48px' }} className='d-flex align-items-center justify-content-between'>
            <div>
              <h3 className='dashboard-title'>
                Profile Details
              </h3>
            </div>

            {edit ? (
              <div className='d-flex align-items-center'>
                <Button onClick={() => setEdit(false)} style={{ ...button, marginRight: '0.6rem' }} className='pointer'>
                  <p style={button.btnTypography} className='m-0'>Cancel</p></Button>
                <Button style={button.save} className='pointer '>
                  <p style={button.btnTypography} className='m-0'>Save</p></Button>
              </div>
            ) : (
              <div onClick={handleEdit} className='d-flex align-items-center pointer'>
                <div style={{ marginRight: '10px' }}>
                  <Image src={EditIcon} />
                </div>
                <div className='mt-1'>
                  <p className='m-0'>Edit</p>
                </div>
              </div>
            )}

          </div>

          <form>
            <div className='d-flex justify-content-between'>
              <div style={{ marginRight: '1rem' }} className='w-50'>
                <label style={{ ...form.profileDetails }}>First Name</label>
                <input type="text" style={form} placeholder='First name' className='w-100' type="text" />
              </div>
              <div className='w-50'>
                <label style={{ ...form.profileDetails }}>Lasme</label>
                <input type="text" style={form} placeholder='Last name' className='w-100' type="text" />
              </div>
            </div>

            <div style={{ marginTop: '48px' }} className='d-flex justify-content-between '>
              <div style={{ marginRight: '1rem' }} className='w-50'>
                <label style={{ ...form.profileDetails }}>Email</label>
                <input type="email" style={form} placeholder='Email' className='w-100' />
              </div>
              <div className='w-50'>
                <label style={{ ...form.profileDetails }}>Password</label>
                <input type="password" style={form} placeholder='Password' className='w-100' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;