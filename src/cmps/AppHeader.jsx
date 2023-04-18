import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";


function _AppHeader(props) {

    function onBack() {
        props.history.goBack()
    }

    const { name, balance } = props.loggedInUser
    return (
        <header className='app-header full'>
            <div>
                <div>
                    <span>Mister Bitcoin</span> | 
                    <span> Hello {name}</span>
                </div>                
                
                <nav className='header-nav'>
                    <button className="back" onClick={onBack} >Back</button>
                    <NavLink exact to="/" >
                        <img src={require('../assets/imgs/maison.png')}></img>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/contact">
                        <img src={require('../assets/imgs/user.png')}></img>
                        <span>Contacts</span>
                    </NavLink>
                    <NavLink to="/statistics">
                        <img src={require('../assets/imgs/statistics.png')}></img>
                        <span>Statistics</span>
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    loggedInUser: state.userModule.loggedInUser
})

export const AppHeader = connect(mapStateToProps)(withRouter(_AppHeader))