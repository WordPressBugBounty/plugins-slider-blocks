/**
 * WordPress dependencies
 */
import { Flex, FlexBlock, FlexItem, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ResetButton = ({ children, onReset, value }) => {
    return (
        <div className="gkits-reset-control">
            <Flex
                justify={{
                    justifyContent: 'flex-start'
                }}
            >
                <FlexItem>
                    <Button
                        icon="image-rotate"
                        label={__('Reset', 'slider-blocks')}
                        onClick={() => onReset()}
                        className={`gkits-reset-button range-btn ${value ? 'active' : 'disabled'}`}
                    />
                </FlexItem>
                <FlexBlock>{children}</FlexBlock>
            </Flex>
        </div>
    );
};

export default ResetButton;
