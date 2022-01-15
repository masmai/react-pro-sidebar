import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import { AiFillSetting } from "react-icons/ai";
import sidebarBg from './assets/bg2.jpg';
import { Link } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar, handleCollapsedChange, handleImageChange, handleRtlChange }) => {
  const intl = useIntl();
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {intl.formatMessage({ id: 'sidebarTitle' })}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            {intl.formatMessage({ id: 'dashboard' })}
          </MenuItem>
          <MenuItem icon={<FaGem />}> {intl.formatMessage({ id: 'components' })}</MenuItem>
        </Menu>
        <Menu iconShape="square">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: 'withSuffix' })}
            icon={<FaRegLaughWink />}
          >
            <MenuItem>- Invoices <Link to="/invoices" /></MenuItem>
            <MenuItem>- Expenses <Link to="/expenses" /></MenuItem>
            <MenuItem>- Jojo <Link to="/jojo" /></MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="square">
          <SubMenu
            title={'sidebar setting'}
            icon={<AiFillSetting />}
          >
            <MenuItem style={{ marginLeft: '10px' }}>
              <div className="block-custom">
                <Switch
                  height={16}
                  width={30}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleCollapsedChange}
                  checked={collapsed}
                  onColor="#219de9"
                  offColor="#bbbbbb"
                />
                <span> {intl.formatMessage({ id: 'collapsed' })}</span>
              </div>
            </MenuItem>
            <MenuItem style={{ marginLeft: '10px' }}>
              <div className="block-custom">
                <Switch
                  height={16}
                  width={30}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleRtlChange}
                  checked={rtl}
                  onColor="#219de9"
                  offColor="#bbbbbb"
                />
                <span> {intl.formatMessage({ id: 'rtl' })}</span>
              </div>
            </MenuItem>
            <MenuItem style={{ marginLeft: '10px' }}>
              <div className="block-custom">
                <Switch
                  height={16}
                  width={30}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleImageChange}
                  checked={image}
                  onColor="#219de9"
                  offColor="#bbbbbb"
                />
                <span> {intl.formatMessage({ id: 'image' })}</span>
              </div>
            </MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="circle">
          
          <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3  <Link to="/"/></MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.4 <Link to="/invoices"/></MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
        {/* 
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: 'withSuffix' })}
            icon={<FaRegLaughWink />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: 'withPrefix' })}
            icon={<FaHeart />}
          >
            <MenuItem>main menu <Link to="/main" /></MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3  <Link to="/" /></MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.4 <Link to="/invoices" /></MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu> */}


      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {intl.formatMessage({ id: 'viewSource' })}
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
