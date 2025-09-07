import React from 'react';
import './App.css';
import Homepage from './pages/hompage/hompage.component';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-signup/sign-in-and-sign-up.components';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';

import FooterComponent from './components/footer/footer.component';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from './pages/contact/contact.component';
import Alerts from './components/alert/alert.component';

const App = ({ currentUser, checkUserSession }) => {
  const location = useLocation();

  React.useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const timeout = { enter: 800, exit: 400 };
  const currentKey = location.pathname.split('/')[1] || '/';

  return (
    <>
      <Header />
      <Alerts></Alerts>
      <TransitionGroup component="div" className="App">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <div className="fades">
            <Routes location={location}>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop/*" element={<ShopPage />} />
              <Route
                path="/auth/*"
                element={
                  currentUser ? <Navigate to="/" replace /> : <SignInSignUp />
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
            {location.pathname.includes('auth') ? <></> : <FooterComponent />}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
