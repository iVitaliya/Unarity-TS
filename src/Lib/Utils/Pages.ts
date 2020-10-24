// Class
class Pages {
    new(arr: string[] | any[], itemsPerPage: number, page: number = 1) {
        const maxPages = Math.ceil(arr.length / itemsPerPage);

        if (page < 1 || page > maxPages) return null;
        return arr.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    }
};

// Exports
export {Pages};