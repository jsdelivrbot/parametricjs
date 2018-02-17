export default YCAD
module.exports = YCAD

import csg from "./web/csg"
import ThreeCSG from "./web/ThreeCSG/ThreeCSG"
import PathToShape from './helpers/PathToShape'
import isString from './helpers/isString'
import build from "../package.json"
//Features
import * as features from "./features"

console.log(features)
const { insert, plane, extrude, pattern } = features

function YCAD({ cad, scene }) {
    //Debug
    console.log(`YCAD [version ${build.version}]`)

    //Private 
    var debug = true
    var cadData = cad
    const object3d = new THREE.Object3D;
    const self = this

    //Public
    Object.assign(this, {
        render: render,
        change: change,
        compile: compile,
        getFeatureById: getFeatureById,
        getPart: getPart
    })

    function getFeature(feature) {
        const { type } = feature
        return features[type] || false

        //Future?
        //return features.filter((elem, key) => { return (key == type) ? elem : false })
    }

    function processFeature(feature) {
        const { type } = feature
        const payload = { ycad: self, cadData: cadData, scene: scene, feature: feature, object3d: object3d }

        //console.log(feature)

        //Find handler according to type
        const handler = getFeature(feature)

        if (!handler) return console.log(`Unknown feature: "${type}"`)

        //Perhaps Y3D handler?
        y3d.add(feature)

        return handler(payload)
    }

    function getFeatureById(id) {
        return cadData.features.filter((elem) => { return elem.id == id ? elem : false })[0]
    }

    function getPart(id) {
        return cadData.parts.filter((elem) => { return elem.id == id ? elem : false })[0]
    }

    this.getParameters = function() { return cadData.parameters || {} }

    this.getFeatureLabels = function() {
        let ret = []
        for (let k in cadData.features) {
            let feature = cadData.features[k]
            let type = feature.type

            //TODO Recursive?
            if (type == 'insert') {
                let part = getPart(feature.data.selectInnerPart)
                let featureLabels = getFeatureLabelsOneLevel(part.features)
                ret.push({ label: part.title, children: featureLabels })
            } else {
                ret.push({ label: feature.type })
            }
        }
        return ret
    }


    function getFeatureLabelsOneLevel(features) {
        let ret = []
        for (let k in features) {
            let feature = features[k]
            ret.push({ label: feature.type })
        }
        return ret
    }

    //Returns only the default values as an object
    this.getParametersDefault = function() {
        let ret = {}
        for (let k in cadData.parameters) {
            ret[k] = cadData.parameters[k].default || cadData.parameters[k]
        }
        return ret
    }

    //Call this function to convert the cad data to a threejs object
    function render() {
        if (!cadData) { return console.warn("No CadData") }

        compileParameters() //adds cadData._parameters

        const { features } = cadData
        features.map((feature, key) => {
            if (feature.suppress) return;
            processFeature(feature)
        })
        return object3d
    }

    function compileParameters() {
        if (!cadData) { return console.warn("No CadData") }
        let compiled = ""
        const { parameters } = cadData

        parameters || [].map((elem, key) => {
            const value = parameters[key]
            compiled += `let ${key} = ${value};`
        })

        //save compile to feature
        cadData._parameters = compiled // || "height=10;width=3;thickness=1";
        return compiled
    }

    //Use to change a parameter
    function change(varname, value) {
        //Set
        cadData.parameters[varname] = value

        //Remove old render?
        object3d.children.splice(0, 1)

        //Render again
        render()
    }


    //Makes sure a parameter is always an object with default, min, max props
    function getParameter(parameter) {
        if (typeof parameter === 'object') {
            return parameter
        }
        return { default: parameter, }
    }

    function compile(what) {
        let parameters = `${cadData._parameters}; \n ${what}`

        if (debug) console.log(`Compiling : ${parameters}`)
        return eval(parameters);
    }
}