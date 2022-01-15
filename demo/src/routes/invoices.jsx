import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { FaHeart, FaBars } from 'react-icons/fa';
import reactLogo from '../assets/logo.svg';
import { useOutletContext } from 'react-router-dom';
import { Toast, Button, Container, Tab, Tabs, Row, Col, Table,NavDropdown,Nav,Navbar } from 'react-bootstrap';

function Invoices() {
  const intl = useIntl();
  const [toggled, setToggled] = useOutletContext();
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  const ExampleToast = ({ children }) => {
    const [show, toggleShow] = useState(true);

    return (
      <>
        {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
          <Toast.Header>
            <strong className="mr-auto">React-Bootstrap</strong>
          </Toast.Header>
          <Toast.Body>{children}</Toast.Body>
        </Toast>
      </>
    );
  };
  return (
    <main>
      <div>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <Container fluid>
         
          <Row>
            <Col><Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="home" title="Home">
                <p>O! never say that I was false of heart, Though absence seem'd my flame to qualify, As easy might I from my self depart As from my soul which in thy breast doth lie: That is my home of love: if I have rang'd, Like him that travels, I return again; Just to the time, not with the time exchang'd, So that myself bring water for my stain. Never believe though in my nature reign'd, All frailties that besiege all kinds of blood,</p>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
                <>
                  <Button variant="primary">Primary</Button>{' '}
                  <Button variant="secondary">Secondary</Button>{' '}
                  <Button variant="success">Success</Button>{' '}
                  <Button variant="warning">Warning</Button>{' '}
                  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                  <Button variant="link">Link</Button>
                </>
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>

              </Tab>
            </Tabs></Col>
          </Row>
        </Container>

      </div>
      {/* <div className="btn-toggle" onClick={() => props.handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <h1>
          <img width={80} src={reactLogo} alt="react logo" /> {intl.formatMessage({ id: 'title' })}
        </h1>
        <p>{intl.formatMessage({ id: 'description' })}</p>
        <div className="social-bagdes">
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
            />
          </a>
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub forks"
              src="https://img.shields.io/github/forks/azouaoui-med/react-pro-sidebar?style=social"
            />
          </a>
        </div>
      </header>
      <div className="block ">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={props.handleCollapsedChange}
          checked={props.collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'collapsed' })}</span>
      </div>
      <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={props.handleRtlChange}
          checked={props.rtl}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'rtl' })}</span>
      </div>
      <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={props.handleImageChange}
          checked={props.image}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'image' })}</span>
      </div>

      <footer>
        <small>
          © {new Date().getFullYear()} made with <FaHeart style={{ color: 'red' }} /> by -{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://azouaoui.netlify.com">
            Mohamed Azouaoui
          </a>
        </small>
        <br />
        <div className="social-bagdes">
          <a href="https://github.com/azouaoui-med" target="_blank" rel="noopener noreferrer">
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social"
            />
          </a>
          <a href="https://twitter.com/azouaoui_med" target="_blank" rel="noopener noreferrer">
            <img
              alt="Twitter Follow"
              src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social"
            />
          </a>
        </div>
      </footer> */}
    </main>
  );
}


export default Invoices;
