export const GET_ALL_USER = `
    *[_type == 'user' && username match $search] {
        _id,
        _createdAt,
        _updatedAt,
        "name": username,
        birthday,
        image,
        facebook,
        gmail,
        phone,
        zalo
    }
`;
