import React, {Fragment} from 'react';
import Navtop from "../navtop";
import NavPanel from "../navpanel";


const Layouts = (props) => (
    <Fragment>
        <div className="uk-panel">
            <Navtop/>
        </div>
        <div className="uk-grid">
            <div className="uk-width-1-4@m leftpanel">
                <NavPanel/>
            </div>
            <div className="uk-width-expand uk-padding-large back-muted">
                {props.children}
            </div>
        </div>
    </Fragment>
);

export default Layouts;
