import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import messages from './messages';
import './styles/App.scss';
import Aside from './Aside';
import Main from './Main';
import { useOutlet, Outlet } from 'react-router-dom';
function App() {
  const [locale, setLocale] = useState('en');
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);
  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    //setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  const outlet = useOutlet()
  const Context = React.createContext({})
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {/* <Layout setLocale={setLocale} /> */}
      <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
        <Aside
          image={image}
          collapsed={collapsed}
          rtl={rtl}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
          handleImageChange={handleImageChange}
          handleRtlChange={handleRtlChange}
        />
       
        <Outlet context={[toggled, setToggled]} />;
        

      </div>
    </IntlProvider>
  );
}

export default App;
