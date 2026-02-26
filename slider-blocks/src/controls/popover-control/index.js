/**
 * WordPress dependencies
 */
import { withInstanceId } from '@wordpress/compose';
import { BaseControl, Flex, FlexBlock, FlexItem, Button, Dropdown } from '@wordpress/components';

const PopoverControl = ({ label, children, instanceId }) => {
    const id = `popover-control-${instanceId}`;
    return (
        <div className="gkits-control-container popover-control">
            <Flex>
                <FlexBlock>
                    <BaseControl id={id} label={label} />
                </FlexBlock>
                <FlexItem>
                    <Dropdown
                        popoverProps={{ placement: 'bottom-start' }}
                        position="middle left"
                        renderToggle={({ isOpen, onToggle }) => (
                            <Button className={`popover-expand ${isOpen ? 'active' : ''}`} onClick={onToggle} aria-expanded={isOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
                                    />
                                </svg>
                            </Button>
                        )}
                        renderContent={() => <div className="gkits-popover-panel">{children}</div>}
                    />
                </FlexItem>
            </Flex>
        </div>
    );
};

export default withInstanceId(PopoverControl);
