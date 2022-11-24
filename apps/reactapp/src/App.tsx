import React from 'react';
import './App.css';
import { Header } from 'header';
import { MyModule } from 'MyModule'
function App() {
    return (
        <>
            <Header />
            <div>
                Content!
            </div>
            <MyModule />
        </>
    );
}

export default App;
