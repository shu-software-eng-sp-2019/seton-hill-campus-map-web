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

const BuildingAdmin = (props) => {
  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [description, setdescription] = useState('');
  const [hasClassrooms, sethasClassrooms] = useState(false);
  const [iconName, seticonName] = useState('');
  const [levels, setlevels] = useState('');
  const [name, setname] = useState('');
  const [type, settype] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { createNewBuilding } = props;
    createNewBuilding({
      latitude, longitude, description, hasClassrooms, iconName, levels, name, type,
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
              <h4>Make a new Building</h4>
            </div>
          </FormGroup>
          <FormGroup row>
            <Label for="name">Name</Label>
            <Input required type="text" name="name" value={name} id="name" placeholder="Name..." onChange={e => setname(e.target.value)} />
          </FormGroup>
          <FormGroup row>
            <Label for="description">Description</Label>
            <Input
              required
              type="textarea"
              name="description"
              id="description"
              value={description}
              placeholder="Description..."
              onChange={e => setdescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="latitude">Latitude</Label>
            <Input required type="number" name="latitude" value={latitude} id="latitude" placeholder="Latitude..." onChange={e => setlatitude(e.target.value)} />
          </FormGroup>
          <FormGroup row>
            <Label for="longitude">Longitude</Label>
            <Input required type="number" name="longitude" value={longitude} id="longitude" placeholder="Longitude..." onChange={e => setlongitude(e.target.value)} />
          </FormGroup>
          <FormGroup row>
            <Label for="type">Type</Label>
            <Input required type="text" name="type" id="type" value={type} placeholder="Type..." onChange={e => settype(e.target.value)} />
          </FormGroup>
          <FormGroup row>
            <Label for="iconName">Icon Name</Label>
            <Input required type="text" name="iconName" id="iconName" value={iconName} placeholder="Icon Name..." onChange={e => seticonName(e.target.value)} />
          </FormGroup>
          <FormGroup row>
            <Label for="levels">Levels</Label>
            <Input required type="number" name="levels" id="levels" value={levels} placeholder="Levels..." onChange={e => setlevels(e.target.value)} />
          </FormGroup>
          <FormGroup row>
            <Label for="hasClassrooms">Has Classrooms?</Label>
            <Input
              type="checkbox"
              name="hasClassrooms"
              id="hasClassrooms"
              value={hasClassrooms}
              placeholder="Has Classrooms..."
              onChange={e => sethasClassrooms(e.target.value)}
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
  createNewBuilding: building => dispatch(createBuilding(building)),
});

BuildingAdmin.defaultProps = {
  createNewBuilding: () => null,
  // authError: null,
};

BuildingAdmin.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // auth: PropTypes.object.isRequired,
  createNewBuilding: PropTypes.func,
  // authError: PropTypes.string,
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps),
)(BuildingAdmin);
