import React from 'react';
import { Card } from 'reactstrap';
import PropTypes from 'prop-types';

const AuthCard = (props) => {
  const { children } = props;
  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-5 mx-auto">
          <Card outline className="shadow p-5 container">
            { children }
          </Card>
        </div>
      </div>
    </div>
  );
};

AuthCard.defaultProps = {
  children: '',
};

AuthCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AuthCard;
