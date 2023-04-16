import { Link, NavLink, withRouter } from "react-router-dom";


function _AppHeader(props) {

    function onBack() {
        props.history.goBack()
    }

    return (
        <header className='app-header full'>
            <div>
                <span>Mister Bitcoin</span>
                <section className="back">
                    <button onClick={onBack} >Back</button>
                </section>
                <nav className='header-nav'>
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

export const AppHeader = withRouter(_AppHeader)