import React, { Component }  from 'react';
import { FaHeart, FaBars } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';
import { useIntl } from 'react-intl';
import ListUser from './user/ListUser';
import ListUser2 from './user/ListUser2';
export default function Users() {
  const intl = useIntl();
  const [toggled, setToggled] = useOutletContext();
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
    return (
      <main style={{ padding: "2rem" }}>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        {/* <ListUser></ListUser> */}
        <ListUser2></ListUser2>
      </main>
    );
  }