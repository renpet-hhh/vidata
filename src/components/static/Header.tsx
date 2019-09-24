import React from 'react'
import { connect } from 'react-redux';
import COLOR from '../../constants/COLOR';
import Nav from '../Nav';
import NavBar from '../NavBar';
import { AppState } from '../../store/configStore';
import RestrictRoute from '../routes/RestrictRoute';
import { FlexHorizontalBetween } from '../styled/positionals';

interface Props extends ReturnType<typeof mapState> {

}

const NavBarWhenLoggedIn = () => <NavBar names={["New", "Profile", "Test"]} paths={["/new", "/profile", "/test"]} spaceBetween="1.5rem"></NavBar>;
const NavBarWhenNotLoggedIn = () => <NavBar names={["Sign in", "Sign up", "Test"]} paths={["/signin", "/signup", "/test"]} spaceBetween="1.5rem"></NavBar>;

const Header = (props: Props) => {
    return (
        <FlexHorizontalBetween style={{ width: "100%", backgroundColor: COLOR.night.background }}>
            <Nav name="vidata" to="/" color={COLOR.night.color}></Nav>
            <RestrictRoute allow={props.session.logged} component={NavBarWhenLoggedIn} fallbackComponent={NavBarWhenNotLoggedIn}></RestrictRoute>
        </FlexHorizontalBetween>
    );
}

const mapState = (state: AppState) => ({
    session: state.session
})

export default connect(mapState)(Header);