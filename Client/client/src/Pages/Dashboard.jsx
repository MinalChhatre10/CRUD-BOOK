import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';


// import logo from './logo.png';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Dashboard = () => {
  return (
  <div>
   <Navigation />
   
      <div className="container">
      <h1 className='head' >Admin-Dashboard</h1>
        <div className="row mt-4 card-container">
          <div className="col-md-4">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Books</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">View and manage books</CardSubtitle>
                <Link className="delete" to="/book">View Books</Link>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Clients</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">View and manage clients</CardSubtitle>
                <Link className="delete" to="/clients">View Clients</Link>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Orders</CardTitle>

                <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>

                <CardSubtitle tag="h6" className="mb-2 text-muted">View and manage orders</CardSubtitle>
                <Link className="delete" to="/orders">View Orders</Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Dashboard;
