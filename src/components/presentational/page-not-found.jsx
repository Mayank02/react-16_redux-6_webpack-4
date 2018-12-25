import React, { Component } from 'react';
import constants from '../../utils/constants';

class PageNotFound extends Component {
    render() {
        return (
            <div className="page-not-found col-12">
                <h1>{constants.NOT_FOUND_CODE}</h1>
                <p>{constants.PAGE_NOT_FOUND_MSG}</p>
            </div>
        );
    }
}
export default PageNotFound;
