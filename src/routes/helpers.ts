export const pathsPublic: Record<string, string> = {
    home: '/',
    productDetails: '/product/:idOrSlug',
};

export const pathsPrivate: Record<string, string> = {
    accountSettings: '/account-settings',
};

export const paths: Record<string, string> = Object.assign({}, pathsPublic, pathsPrivate);


export const checkPathMatch = (
  pathname: string,
  paths: Record<string, string>
) => {
    let isMatch = false;

    const allPaths = Object.keys(paths).map((k) => paths[k]);
    const pathFirstSection = pathname.split('/')[1];

    allPaths.forEach((p) => {
        if (p.slice(1) === pathFirstSection) isMatch = true;
    });

    return isMatch;
};
