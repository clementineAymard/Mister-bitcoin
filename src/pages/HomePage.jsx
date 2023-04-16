import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'

export class HomePage extends Component {

    state = {
        user: null,
        rate: null,
    }

    async componentDidMount() {
        try {
            const rate = await bitcoinService.getRate()
            this.setState({
                user: userService.getUser(),
                rate: rate,
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        console.log('home rendering')
        const { user, rate } = this.state
        if (!user) return <div>Loading...</div>
        return (
            <section className="homepage">
                <div className='info'>
                    <h1>Hello {user.name} !</h1>
                    <div>
                        <img src={require("../assets/imgs/coins.png")} />
                        <span> Coins : {user.coins}</span>
                    </div>
                    <div>
                        <img src={require("../assets/imgs/bitcoin.png")} />
                        <span> BTC : {rate}</span>
                    </div>
                </div>

            </section>
        )
    }
}
