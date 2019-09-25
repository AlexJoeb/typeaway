import React from 'react';

const Header = (props) => {
    const { dark } = props;
    return (
        <header className={`header${dark ? '__dark' : ''}`}>
            <div className={`header__logo${dark ? '__dark' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 227.52 97.99"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{isolation:isolate}" }} /></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><text transform="translate(0 56.8)" style={{isolation: 'isolate'}} fill="#707070" fontFamily="CuteFont-Regular,Cute Font" fontSize={80} id="Typeaway">Typeaway</text><text transform="translate(23 87.8)" style={{isolation: 'isolate'}} fontSize={35} fill="#707070" fontFamily="CuteFont-Regular,Cute Font" id="Don_t_stop_typing." data-name="Don t stop typing.">Don’t stop typing.</text></g></g></svg>
            </div>
            <div className={`header__toggle${dark ? '__dark' : ''}`}>
                <button onClick={props.toggleDark} className={`header__toggle--btn${dark ? '__dark' : ''}`}>
                    {
                        dark ?
                        "Turn to Day" : "Turn to Night"
                    }
                </button>
            </div>
        </header>
    );
}

export default Header;