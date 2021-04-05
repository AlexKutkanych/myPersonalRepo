import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ToTopButton from '../../components/ToTopButton';
import Homepage from '../Homepage';
import RegistrationPage from '../RegistrationPage';
import LoginPage from '../LoginPage';
import PaymentPage from '../PaymentPage';
import LeaderboardPage from '../LeaderboardPage';
import TournamentPage from '../TournamentPage';
import PaymentSuccess from '../PaymentSuccess';
import EmailTemplate from '../EmailTemplate';
import AcceptInvitation from '../AcceptInvitation';
import PrivateRoute from '../../components/PrivateRoute';
import PublicRoute from '../../components/PublicRoute';

function App() {
  return (
    <div>
     <Header />
     <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <PublicRoute exact path='/registration'>
        <RegistrationPage />
      </PublicRoute>
      <PublicRoute exact path='/login'>
        <LoginPage />
      </PublicRoute>
      <PrivateRoute exact path='/payment'>
        <PaymentPage />
      </PrivateRoute>
      <PrivateRoute exact path='/leaderboard'>
        <LeaderboardPage />
      </PrivateRoute>
      <PrivateRoute exact path='/tournament'>
        <TournamentPage />
      </PrivateRoute>
      <PrivateRoute exact path='/payment-success'>
        <PaymentSuccess />
      </PrivateRoute>
     <PrivateRoute exact path='/accept-invitation'>
         <AcceptInvitation />
     </PrivateRoute>
      <PrivateRoute exact path='/email-template'>
        <EmailTemplate />
      </PrivateRoute>
      <Redirect to='/404' />
    </Switch>
     <Footer />
     <ToTopButton />
    </div>
  );
}

export default App;
