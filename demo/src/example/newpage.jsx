import React, { Component } from 'react';
import { FaHeart, FaBars } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';
import { useIntl } from 'react-intl';
export default function Newpages() {
    const intl = useIntl();
    const [toggled, setToggled] = useOutletContext();
    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    return (
        <main style={{ padding: "1rem 0" }}>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            {/*start */}

            <h2>Newpages</h2>

            {/*end */}

        </main>
    );
}