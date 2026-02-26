// add resMode attributes to all blocks
wp.hooks.addFilter('blocks.registerBlockType', 'gutsliders/attribute/resMode', function (settings, name) {
    if (name.includes('gutsliders/')) {
        settings.attributes = {
            ...settings.attributes,
            resMode: {
                type: 'string',
                default: 'Desktop'
            }
        };
    }
    return settings;
});
