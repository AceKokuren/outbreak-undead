export class OutbreakActor extends Actor {

    /** @override */
    prepareData() {
        super.prepareData();
    }

    /** @override */
    prepareBaseData() {
    }

    prepareDerivedData() {
        const actorData = this;
        const systemData = actorData.system;
        const flags = actorData.flags.outbreak || {};

        // Make separate methods for each Actor type (character, npc, etc.) to keep
        // things organized.
        this._prepareCharacterData(actorData);
    }

    /**
     * Prepare Character type specific data
     */
    _prepareCharacterData(actorData) {
        if (actorData.type !== 'character') return;
        const systemData = actorData.system;
    }

    getRollData() {
        const data = super.getRollData();
        this._getCharacterRollData(data);
        return data;
    }

    _getCharacterRollData(data) {
        if (this.type !== 'character') return;

        if (data.attributes) {
            for (let [k, v] of Object.entries(data.attributes)) {
                data[k] = foundry.utils.deepClone(v);
            }
        }
    }
}