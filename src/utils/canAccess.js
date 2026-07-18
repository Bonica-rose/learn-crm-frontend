import { PERMISSIONS }  from "../config/permissions";

const canAccess = (role, page) => {
    return PERMISSIONS[role]?.includes(page);
};

export default canAccess