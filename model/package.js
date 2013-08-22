/**
 * @Category model and schema
 *
 * Creates a schema and model for category
 */

module.exports = function (mongoose) {

    var packageSchema = new mongoose.Schema({
        name: {
            type: String,
            default: "",
            required: true
        },
        version: {
            type: String,
            default: "",
            required: true
        },
        description: {
            type: String,
            default: "",
            required: false
        },
        repository: {
            type: String,
            default: "",
            required: false
        },
        homepage: {
            type: String,
            default: "",
            required: false
        },
        packageURL: {
            type: String,
            default: "",
            required: true
        },
        components: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "component",
                required: false
            }
        ],
        created: {
            type: Date,
            default: Date.now
        },
        modified: {
            type: Date,
            default: Date.now
        }
    });

    return mongoose.model("package", packageSchema);
};