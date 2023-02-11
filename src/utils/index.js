export const createObjectById = (dataArray) => {
    return dataArray.reduce((acc, { id, ...args }) => {
        if (!acc[id]) {
            acc[id] = {
                ...args,
            };
        }
        return acc;
    }, {});
};
