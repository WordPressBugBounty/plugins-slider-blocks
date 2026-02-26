/* eslint-disable no-undef */
/**
 * WordPress dependencies
 */
import { Button, ButtonGroup } from '@wordpress/components';
import { Fragment, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
/**
 * Components
 */
import BlocksTab from './blocks';
import CurrentVersion from './current-version';
import LogsHead from './logs-parts/logs-head';
import LogsPanel from './logs-parts/logs-panel';
import WelcomeTab from './welcome';

const App = () => {
    const [activeTab, setActiveTab] = useState('welcome');
    const [logPanel, setLogPanel] = useState(false);

    return (
        <Fragment>
            <div className="container">
                <div className="header">
                    <div className="header-content flex">
                        <div className="brand-area flex">
                            <div className="brand-logo">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 45C3.625 45 2.44833 44.5108 1.47 43.5325C0.491667 42.5542 0.00166667 41.3767 0 40V5C0 3.625 0.49 2.44833 1.47 1.47C2.45 0.491667 3.62667 0.00166667 5 0H40C41.375 0 42.5525 0.49 43.5325 1.47C44.5125 2.45 45.0017 3.62667 45 5V40C45 41.375 44.5108 42.5525 43.5325 43.5325C42.5542 44.5125 41.3767 45.0017 40 45H5ZM17.5 35H27.5C28.875 35 30.0525 34.5108 31.0325 33.5325C32.0125 32.5542 32.5017 31.3767 32.5 30V20H22.5V25H27.5V30H17.5V15H32.5C32.5 13.625 32.0108 12.4483 31.0325 11.47C30.0542 10.4917 28.8767 10.0017 27.5 10H17.5C16.125 10 14.9483 10.49 13.97 11.47C12.9917 12.45 12.5017 13.6267 12.5 15V30C12.5 31.375 12.99 32.5525 13.97 33.5325C14.95 34.5125 16.1267 35.0017 17.5 35Z"
                                        fill="#5034C5"
                                    />
                                </svg>
                                <h3 className="brand-title">{__('GutSlider Blocks', 'slider-blocks')}</h3>
                            </div>
                            <div className="header-tabs">
                                <ButtonGroup>
                                    <Button
                                        className={`welcome-tab header-tab ${activeTab === 'welcome' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('welcome')}
                                    >
                                        {__('Welcome', 'slider-blocks')}
                                    </Button>
                                    <Button
                                        className={`blocks-tab header-tab ${activeTab === 'blocks' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('blocks')}
                                    >
                                        {__('Blocks', 'slider-blocks')}
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className="changes-log flex">
                            <a href="https://gutslider.com" target="_blank" rel="nofollow noreferrer" className="gutslider-prop">
                                {gutslider?.isPro ? (
                                    <>
                                        <span className="pro-version">{__('Pro', 'slider-blocks')}:</span>
                                        {gutslider?.proVersion}
                                    </>
                                ) : (
                                    <>{__('GutSlider Pro', 'slider-blocks')}</>
                                )}
                            </a>
                            <CurrentVersion />
                            <Button className="changes-log-btn" onClick={() => setLogPanel(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="tabs-body">
                    {activeTab === 'welcome' && <WelcomeTab />}
                    {activeTab === 'blocks' && <BlocksTab />}
                </div>
            </div>
            {logPanel && (
                <div className="logs-panel">
                    <LogsHead setLogPanel={setLogPanel} />
                    <LogsPanel />
                </div>
            )}
        </Fragment>
    );
};

export default App;
