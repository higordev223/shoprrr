import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import styled from 'styled-components';

const TabDiv = ({ collections }) => {
  const location = useLocation();
  const { categoryId } = useParams();

  return (
    <TabDivContainer className="d-md-flex d-block justify-content-center">
      <Link
        to={`/shop`}
        className={location.pathname === '/shop' ? 'active-tab' : ''}
      >
        Featured
      </Link>
      {collections.map(({ title, id }) => {
        return (
          <Link
            to={`/shop/${title.toLowerCase()}`}
            className={
              categoryId === `${title.toLowerCase()}` ? 'active-tab' : ''
            }
            key={id}
          >
            {title}
          </Link>
        );
      })}
    </TabDivContainer>
  );
};

const TabDivContainer = styled.div`
  // display: flex;
  // justify-content: center;
  margin: 0 auto;
  padding: 3rem 0;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
  a {
    display: block;
    font-weight: 500;
    padding: 6px 1rem;
    color: #6f6f6f;
    display: inline-block;
  }
  .active-tab {
    border-bottom: 2px solid #00afaf;
    color: #00afaf;
  }
`;

TabDiv.propTypes = {
  collections: PropTypes.array,
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps, null)(TabDiv);
