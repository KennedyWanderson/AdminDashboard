import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Home';
import LateralMenu from './LateralMenu';

function Home() {
    return (
        <Router>
            <div className="flex">
                <LateralMenu />
                <div className="flex-grow">
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/ajustes" component={Ajustes} />
                        <Route path="/notificacoes" component={Notificacoes} />
                        {/* Outras rotas */}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default Home;
