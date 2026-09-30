// object for check which page we're in
const pageState = (function () {
    let state = "Home";
    const getState = () => state;
    const setStateHome = () => { state = "Home" };
    const setStateMenu = () => { state = "Menu" };
    const setStateAbout = () => { state = "About" };
    return { getState, setStateHome, setStateMenu, setStateAbout };
})();

export default pageState;