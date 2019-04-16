import React, { useState, Suspense } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createBuilding } from '../../Store/Actions/adminActions';

const AuthCard = React.lazy(() => import('../Auth/AuthCard'));

const ParkingLotAdmin = (props) => {
  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [description, setdescription] = useState('');
  const [commuterLot, setcommuterLot] = useState(false);
  const [publicLot, setpublicLot] = useState(false);
  const [name, setname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { createNewParkingLot } = props;
    createNewParkingLot({
      latitude, longitude, description, commuterLot, publicLot, name,
    });
  };

  // const { auth, authError } = props;
  // if (auth.uid) return <Redirect to="/" />;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthCard outline>
        <Form onSubmit={handleSubmit}>
          <FormGroup row className="text-center">
            <div className="col-12">
              <h4>Make a new Parking Lot</h4>
            </div>
          </FormGroup>
          <FormGroup row>
            <Label for="name">Name</Label>
            <Input required type="text" name="name" value={name} id="name" placeholder="Name..." onChange={e => setname(e.target.value)} />
          </FormGroup>
          <FormGroup row>
            <Label for="description">description</Label>
            <Input
              required
              type="textarea"
              name="description"
              id="description"
              value={description}
              placeholder="description..."
              onChange={e => setdescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="latitude">latitude</Label>
            <Input required type="number" name="latitude" value={latitude} id="latitude" placeholder="latitude..." onChange={e => setlatitude(e.target.value)} />
          </FormGroup>
          <FormGroup row>
            <Label for="longitude">longitude</Label>
            <Input required type="number" name="longitude" value={longitude} id="longitude" placeholder="longitude..." onChange={e => setlongitude(e.target.value)} />
          </FormGroup>
          <FormGroup row>
            <Label for="commuterLot">Commuter Lot</Label>
            <Input
              required
              type="checkbox"
              name="commuterLot"
              id="hasClassrooms"
              value={commuterLot}
              placeholder="Commuter Lot..."
              onChange={e => setcommuterLot(e.target.value)}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="publicLot">Public Lot</Label>
            <Input
              required
              type="checkbox"
              name="publicLot"
              id="publicLot"
              value={commuterLot}
              placeholder="Public Lot..."
              onChange={e => setpublicLot(e.target.value)}
            />
          </FormGroup>
          {/* <Alert isOpen={!!authError} color="danger">{ authError || null }</Alert> */}
          <Button>Submit to Firebase</Button>
        </Form>
      </AuthCard>
    </Suspense>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authError: state.auth.authError,
});

const mapDispatchToProps = dispatch => ({
    createNewParkingLot: building => dispatch(createBuilding(building)),
});

ParkingLotAdmin.defaultProps = {
    createNewParkingLot: () => null,
  // authError: null,
};

ParkingLotAdmin.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // auth: PropTypes.object.isRequired,
  createNewParkingLot: PropTypes.func,
  // authError: PropTypes.string,
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps),
)(ParkingLotAdmin);