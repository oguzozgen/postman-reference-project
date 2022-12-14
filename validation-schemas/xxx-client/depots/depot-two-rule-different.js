let depotSchema = require('./depots-validation-schema').validationDepotXXXSchema;
depotSchema.close.properties = { type: "number" };
depotSchema.title.properties.length = 12;

let validationDepotTwoRuleDifferent = depotSchema;