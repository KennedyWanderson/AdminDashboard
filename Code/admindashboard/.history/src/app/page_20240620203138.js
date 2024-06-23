uaw

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './../components/Home';
import LateralMenu from './../components/LateralMenu';

function Home() {
    return (
        <Router>
            <div className="flex">
                <LateralMenu />
                <div className="flex-grow">
                    <Switch>
                        <Route path="/home" component={HomePage} />

                        {/* Outras rotas */}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default Home;
