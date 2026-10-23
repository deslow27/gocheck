function App() {
    return (
        <div className="app">
            <Logo />
            <Form />
            <CheckList />
            <Stats />
        </div>
    );
}

function Logo() {
    return <span className="logo">GoCheck</span>;
}

function Form() {
    return (
        <div className="add-form">
            <h3>Ada yang mau kamu catat? </h3>
        </div>
    );
}

function CheckList() {
    return <div className="checklist"></div>;
}

function Stats() {
    return (
        <footer className="stats">
            <span></span>
        </footer>
    );
}

export default App;
