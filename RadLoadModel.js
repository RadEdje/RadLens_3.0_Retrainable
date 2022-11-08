class RadCustomModel {

    constructor(obj) {
        modelURL = obj.modelURL;
    }


    async load(modelURL) {
        const model = await tf.loadLayersModel(modelURL);
        return model;
    }

    getTotalClasses(model) {
        const output = model.output;
        const totalClasses = output.shape[1];
        return totalClasses;
    }



}