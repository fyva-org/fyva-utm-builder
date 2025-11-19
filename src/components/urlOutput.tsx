const URLOutput = ({ url, onCopy, copySuccess }: { url: string; onCopy: () => void; copySuccess: boolean; }) => {
    if (!url) return null;
    return (
        <div className="form__footer">
            <h6>Generated UTM Tracking URL</h6>
            <div className="url-output">
                <input
                    type="text"
                    readOnly
                    value={url}
                    className="url-input"
                />
                <button
                    type="button"
                    onClick={onCopy}
                    className="form__btn form__btn--copy"
                >
                    {copySuccess ? '✓ Copied!' : 'Copy URL'}
                </button>
            </div>
        </div>
    );
};

export default URLOutput;