export function capitalize(str) {
    if (!str) {
        return "";
    }

    let capitalized = str[0].toUpperCase() + str.slice(1);
    return capitalized;
}

export function linkToName(linkName) {
    if (!linkName) {
        return "";
    }

    let splitted = linkName.split("-");
    let capitalized = splitted.map((e) => capitalize(e));
    return capitalized.join(" ");
}

export function nameToLink(name) {
    if (!name) {
        return "";
    }

    return name.toLowerCase().split(" ").join("-");
}

export function filterByName(characters, name) {
    return characters.filter((character) =>
        character.name.toLowerCase().includes(name.toLowerCase())
    );
}
