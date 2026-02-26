/* eslint-disable no-undef */
import Version from './version';
const LogsPanel = () => {
    const changeLogs = gutslider?.changeLogs;

    return (
        <div className="log-panel">
            {changeLogs &&
                changeLogs.length > 0 &&
                changeLogs.map((log, index) => <Version key={index} version={log.version} date={log.date} changes={log.changes} />)}
        </div>
    );
};

export default LogsPanel;
