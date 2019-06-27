import React from 'react';
import {About} from '../about/about.jsx'
import {Contact} from '../contact/contact.jsx'
import {Footer} from '../footer/footer.jsx'

import { Header } from './header.jsx'
class Home extends React.Component {
    render () {
        return <div>
            <div >
                <Header />
                <About />
                <Contact />
                <Footer />
            </div>
        </div>;
    }
}
export {Home}