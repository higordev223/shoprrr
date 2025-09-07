import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, toggleHidden }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <p onClick={toggleHidden} className="closePath">
          &#10094; close
        </p>
        <h4>
          Cart Item(s) <span className="float-right">{cartItems.length}</span>
        </h4>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart Is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate('/checkout');
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
  toggleHidden: PropTypes.func,
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});
const mapDispatchToProps = dispatch => ({
  toggleHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
