const collections = [
    {
        id: 1,
        name: "The Simpsons",
        masterAssetId: 13,
        tags: {
            name: "Cartoon",
            subTag: {
                name: "Simpsons family",
                subTag: {
                    name: "2014",
                },
            },
        },
    },
    {
        id: 2,
        name: "Super heroes",
        masterAssetId: 24,
        tags: {
            name: "DC Super heroes",
            subTag: {
                name: "2014",
            },
        },
    },
    {
        id: 3,
        name: "Toy story",
        masterAssetId: 31,
        tags: {
            name: "Disney",
            subTag: {
                name: "Pixar",
                subTag: {
                    name: "Original movie",
                    subTag: {
                        name: "2010",
                    },
                },
            },
        },
    },
    {
        id: 4,
        name: "Ninjago",
        masterAssetId: 42,
        tags: {
            name: "Ninja",
            subTag: {
                name: "Secret Ninja Force",
                subTag: {
                    name: "2017",
                },
            },
        },
    },
];

const assets = [
    {
        id: 11,
        name: "Homer Simpson",
        path: "Homer.jpg",
        collectionId: 1,
    },
    {
        id: 12,
        name: "Lisa Simpson",
        path: "Lisa.jpg",
        collectionId: 1,
    },
    {
        id: 13,
        name: "Bart Simpson",
        path: "Bart.jpg",
        collectionId: 1,
    },
    {
        id: 14,
        name: "Marge Simpson",
        path: "Marge.jpg",
        collectionId: 1,
    },
    {
        id: 15,
        name: "Grampa Simpson",
        path: "Grampa.jpg",
        collectionId: 1,
    },
    {
        id: 16,
        name: "Maggie Simpson",
        path: "Maggie.jpg",
        collectionId: 1,
    },
    {
        id: 21,
        name: "Green Lantern",
        path: "Green lantern.jpg",
        collectionId: 2,
    },
    {
        id: 22,
        name: "Flash",
        path: "Flash.jpg",
        collectionId: 2,
    },
    {
        id: 23,
        name: "Batman",
        path: "Batman.jpg",
        collectionId: 2,
    },
    {
        id: 24,
        name: "Superman",
        path: "Superman.jpg",
        collectionId: 2,
    },
    {
        id: 31,
        name: "Buzz Lightyear",
        path: "Buzz.jpg",
        collectionId: 3,
    },
    {
        id: 32,
        name: "Alien",
        path: "Alien.jpg",
        collectionId: 3,
    },
    {
        id: 41,
        name: "Spinjitzu training Nya",
        path: "Nya.jpg",
        collectionId: 4,
    },
    {
        id: 42,
        name: "Master Wu",
        path: "Wu.jpg",
        collectionId: 4,
    },
    {
        id: 43,
        name: "Lloyd",
        path: "Lloyd.jpg",
        collectionId: 4,
    },
];

export const getCollectionsAsync = () => {
    return new Promise((resolve) => setTimeout(() => resolve(collections), 1000));
};

export const getAssetByIdAsync = (assetId) => {
    const asset = assets.find((a) => a.id === assetId);

    if (!asset) {
        throw new Error("Asset not found" + assetId);
    }

    return new Promise((resolve) => setTimeout(() => resolve(asset), 500));
};

export const getAssetsByCollectionAsync = (collectionId) => {
    const collectionAssets = assets.filter((asset) => asset.collectionId === collectionId);

    return new Promise((resolve) => setTimeout(() => resolve(collectionAssets), 1000));
};


export {collections}
export {assets}