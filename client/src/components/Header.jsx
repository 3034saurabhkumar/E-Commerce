import React from 'react';

function Header () {
    return(
        <header className="row">
            <div>
                <a className="brand" href="/">Amazon</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign in</a>
            </div>
        </header>
    );
}

export default Header;