const generateLinkProps = btnLink => {
    // link rel
    let linkRel = '';
    if (btnLink?.openInNewTab) {
        linkRel += 'noopener noreferrer';
    }
    if (btnLink?.addNoFollow) {
        linkRel += ' nofollow';
    }
    if (btnLink?.addSponsored) {
        linkRel += ' sponsored';
    }

    return {
        ...(linkRel && { rel: linkRel }),
        ...(btnLink?.openInNewTab && { target: '_blank' })
    };
};

export default generateLinkProps;
