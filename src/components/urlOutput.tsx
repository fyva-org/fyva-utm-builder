import { Button } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;


const URLOutput = ({ url, onCopy, copySuccess }: { url: string; onCopy: () => void; copySuccess: boolean; }) => {
    if (!url) return null;
    return (
        <div className="form__footer">
            <h6>Generated UTM Tracking URL</h6>
            <div className="url-output">
                <TextArea
                    rows={10}
                    readOnly
                    value={url}
                    className="url-input"
                />
                <Button
                    size={'large'}
                    color='default'
                    variant="solid"
                    type="primary"
                    onClick={onCopy}
                    className="form__btn form__btn--copy"
                >
                    {copySuccess ? '✓ Copied!' : 'Copy URL'}
                </Button>
            </div>
        </div>
    );
};

export default URLOutput;