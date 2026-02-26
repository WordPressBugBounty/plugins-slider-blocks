import { select } from '@wordpress/data';
export const handleUniqueId = ({ uniqueId, setAttributes, clientId }) => {
    const generateUniqueId = 'gut' + '-' + Math.random().toString(36).substr(2, 9);

    /**
     * Define and Generate Unique Block ID
     */
    if (!uniqueId) {
        setAttributes({ uniqueId: generateUniqueId });
        return;
    }

    /**
     * Assign New Unique ID when duplicate uniqueId found
     * Mostly happens when User Duplicate a Block
     */

    const allBlocks = select('core/block-editor').getBlocks();

    let duplicateFound = false;
    const fixDuplicateUniqueId = blocks => {
        if (duplicateFound) return;
        for (const item of blocks) {
            const { innerBlocks } = item;
            if (item.attributes.uniqueId === generateUniqueId) {
                if (item.clientId !== clientId) {
                    setAttributes({ uniqueId: generateUniqueId });
                    duplicateFound = true;
                    return;
                } else if (innerBlocks.length > 0) {
                    fixDuplicateUniqueId(innerBlocks);
                }
            } else if (innerBlocks.length > 0) {
                fixDuplicateUniqueId(innerBlocks);
            }
        }
    };

    fixDuplicateUniqueId(allBlocks);
};
