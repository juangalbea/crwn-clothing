import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import Logo from '../../assets/funkylogo.png';

import './header.styles.scss';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer className='header'>
    <LogoContainer className='logo-container' to="/">
      <img src={Logo} alt="logo" width="60px" />
    </LogoContainer>
    <OptionsContainer className='options'>
      <OptionLink className='option' to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink className='option' to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ?
          <OptionDiv className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionDiv>
          :
          <OptionLink className='option' to='/signin'>
            SIGN IN
          </OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null :
      <CartDropdown />
    }
    
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);