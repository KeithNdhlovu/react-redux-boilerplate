import { omit, get, map, assign, has } from 'lodash'

export const tagsHelper = {
    
    /**
     * Random color generator
     * Generates a list of random colors for a specific length
     */
    gimmeColor(howMany) {
        var colors = [];

        for(var i = 0; i < howMany; i++) {
            var leRandomVal = Math.random() * 360 * ( i + 1 );
            var _color = '#' + ('00000' + (leRandomVal * (1<<24)|0 ).toString(16) ).slice(-6);
            //var _color = "hsl(" + leRandomVal.toFixed(2) + ",100%,50%)"; //Uncomment this line for HSL color generator
            colors.push(_color);
        }

        if (howMany == 1) {
            return colors[0];
        }

        return colors;
    },

    /**
     * Attaches tags to the items, depending on what information the item has
     * 
     * @param items
     */
    createTags(items) {
        map(items, (item, index) => {
            let tag = {}
            let haSchool = has(item, "school_id")
            let hasAttachment = get(item, "attachements")
            let tags = []

            // Does this item have a school attached to it?
            if (haSchool !== null) {
                tag = {}
                tag = assign(tag, {
                    name: "School ".concat(get(item, "school_id")),
                    color: this.gimmeColor(1)
                })

                tags.push(tag)
            }

            // Does this item have a attachments attached to it?
            if (hasAttachment !== null) {
                tag = {}
                tag = assign(tag, {
                    name: "Attachments",
                    color: this.gimmeColor(1)
                })

                tags.push(tag)
            }            

            item.tags = tags
        })

        return items;
    }
}
