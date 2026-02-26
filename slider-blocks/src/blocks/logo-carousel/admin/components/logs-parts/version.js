const Version = ({ version, date, changes }) => {
    return (
        <div className="single-version">
            <div className="version-number">{`Version: ${version}`}</div>
            <div className="version-date">{date}</div>
            <div className="version-changes">
                {changes &&
                    Object.keys(changes).map((key, index) => {
                        return (
                            <div className="version-changes-group" key={index}>
                                <div className="version-changes-group-title">{key}</div>
                                <div className="version-changes-group-list">
                                    {changes[key].map((change, i) => {
                                        return (
                                            <div className="version-changes-group-list-item" key={i}>
                                                {`- ${change}`}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Version;
