import {OutbreakActor} from "./document/actor/actor.js";
import {OUTBREAK} from "./helpers/config.js"
import {OutbreakActorSheet} from "./sheets/actor/character-sheet.js";
import {preloadHandlebarsTemplates} from "./helpers/templates.js";

Hooks.on("init", () => {
    game.outbreak = {
        OutbreakActor
    }

    CONFIG.OUTBREAK = OUTBREAK;
    CONFIG.Actor.documentClass = OutbreakActor;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("outbreak", OutbreakActorSheet, {makeDefault: true})

    return preloadHandlebarsTemplates();

});
