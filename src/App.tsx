import React from 'react';
import logo from './logo.svg';
import './App.css';

import "@univerjs/design/lib/index.css";
import "@univerjs/ui/lib/index.css";
import "@univerjs/docs-ui/lib/index.css";
import "@univerjs/sheets-ui/lib/index.css";
import "@univerjs/sheets-formula/lib/index.css";

import {Univer, UniverInstanceType} from "@univerjs/core";
import {defaultTheme} from "@univerjs/design";

import {UniverFormulaEnginePlugin} from "@univerjs/engine-formula";
import {UniverRenderEnginePlugin} from "@univerjs/engine-render";

import {UniverUIPlugin} from "@univerjs/ui";

import {UniverDocsPlugin} from "@univerjs/docs";
import {UniverDocsUIPlugin} from "@univerjs/docs-ui";

import {UniverSheetsPlugin} from "@univerjs/sheets";
import {UniverSheetsFormulaPlugin} from "@univerjs/sheets-formula";
import {UniverSheetsUIPlugin} from "@univerjs/sheets-ui";

function App() {
    const univer = new Univer({
        theme: defaultTheme,
    });

    univer.registerPlugin(UniverRenderEnginePlugin);
    univer.registerPlugin(UniverFormulaEnginePlugin);

    univer.registerPlugin(UniverUIPlugin, {
        container: 'app',
        header: true,
        footer: true,
    });

    univer.registerPlugin(UniverDocsPlugin, {
        hasScroll: false,
    });
    univer.registerPlugin(UniverDocsUIPlugin);

    univer.registerPlugin(UniverSheetsPlugin);
    univer.registerPlugin(UniverSheetsUIPlugin);
    univer.registerPlugin(UniverSheetsFormulaPlugin);

    univer.createUnit(UniverInstanceType.UNIVER_SHEET, {});

    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
            {/*    <p>*/}
            {/*        Edit <code>src/App.tsx</code> and save to reload.*/}
            {/*    </p>*/}
            {/*    <a*/}
            {/*        className="App-link"*/}
            {/*        href="https://reactjs.org"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*        Learn React*/}
            {/*    </a>*/}
            {/*</header>*/}
            <div id="app" style={{height: '100vh'}}>
                {/* You can add your component or content here */}
            </div>
        </div>
    );
}

export default App;
