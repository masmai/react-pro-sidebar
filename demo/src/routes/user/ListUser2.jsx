import React, { Component } from 'react';
import { FaHeart, FaBars } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { useIntl } from 'react-intl';
import { Button, Pagination, Table } from 'react-bootstrap';
export default function ListUser2() {
    const intl = useIntl();
    const [toggled, setToggled] = useOutletContext();
    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    const pagination = <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
    </Pagination>
    return (
        <main style={{ padding: "1rem 0" }}>
            {/* <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div> */}


            {/*start html coding*/}
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/users" active>
                    Users
                </Breadcrumb.Item>
                {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <h2>ListUser2</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th width={'200px'} align='center'>manage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <a href="users/1" className='btn btn-outline-primary'>Edit</a>{' '}
                            <a href="#" className='btn btn-outline-danger'>Delete</a>{' '}
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <a href="users/2" className='btn btn-outline-primary'>Edit</a>{' '}
                            <a href="#" className='btn btn-outline-danger'>Delete</a>{' '}
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>
                            <a href="users/3" className='btn btn-outline-primary'>Edit</a>{' '}
                            <a href="#" className='btn btn-outline-danger'>Delete</a>{' '}
                        </td>
                    </tr>
                </tbody>
            </Table>

            {pagination}

            {/*end html coding*/}

        </main>
    );
}