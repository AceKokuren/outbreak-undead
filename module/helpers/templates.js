export const preloadHandlebarsTemplates = async function() {
    return loadTemplates([
        "systems/outbreak-undead/templates/actor/parts/skills/basic.html",
        "systems/outbreak-undead/templates/actor/parts/skills/skills.html"
    ]);
};
