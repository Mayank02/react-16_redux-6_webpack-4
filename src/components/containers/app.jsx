import React from 'react';
import Routes from '../../routes';
import Header from '../presentational/header';
import Footer from '../presentational/footer';

const App = () =>
    <div className="app container">
        <Header />
        <div className="body-content">
            <Routes />
        </div>
        <Footer />
    </div>;

export default App;