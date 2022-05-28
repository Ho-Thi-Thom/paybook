export const GET_ALL_USER = `
    *[_type == 'user'] {
        _id,
        _createdAt,
        _updatedAt,
        "name": username,
        birthday,
        image
    }
`;
