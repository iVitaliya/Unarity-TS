export const searchQuery = (query: string, toSearch: string) =>
    new RegExp(`.*${query.split(" ").join(".*")}.*`, "gi").test(toSearch);