const actionSaveCollection = (id: string, data: Uint8ClampedArray) => ({
    type: 'SAVE_COLLECTION',
    id,
    data
});

export default actionSaveCollection;