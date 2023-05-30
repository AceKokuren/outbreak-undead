export class OutbreakActorSheet extends ActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["outbreak", "sheet", "actor"],
            template: "systems/outbreak-undead/templates/actor/character-sheet.html",
            width: 600,
            height: 600,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "attributes"}]
        });
    }

    /** @override */
    get template() {
        return `systems/outbreak-undead/templates/actor/${this.actor.type}-sheet.html`;
    }

    /* -------------------------------------------- */

    getData() {
        const context = super.getData();

        // Use a safe clone of the actor data for further operations.
        const actorData = this.actor.toObject(false);

        // Add the actor's data to context.data for easier access, as well as flags.
        context.system = actorData.system;
        context.flags = actorData.flags;

        // Prepare character data and items.
        if (actorData.type == 'character') {
            this._prepareCharacterData(context);
        }

        context.rollData = context.actor.getRollData();

        return context;
    }

    _prepareCharacterData(context) {
        for (let [k, v] of Object.entries(context.system.attributes)) {
            v.label = game.i18n.localize(CONFIG.OUTBREAK.attributes[k]) ?? k;
        }
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);
    }
}