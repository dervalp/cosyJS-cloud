/**
 * @models
 *
 * load all the models and return them in an object
 * We also pass in a db object to each so that the schema can be made
 */
module.exports = function (mongoose) {
    return {
        package: require("./model/component")(mongoose),
        component: require("./model/package")(mongoose)
    };
};