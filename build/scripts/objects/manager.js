"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const robot_js_1 = __importDefault(require("./robot.js"));
const table_js_1 = __importDefault(require("./table.js"));
class ObjectManager {
    constructor() {
        this.objectTypes = { Robot: robot_js_1.default, Table: table_js_1.default };
        this.objects = new Map();
    }
    //return a specific object by id
    getObject(uuid) {
        return this.objects.get(uuid);
    }
    //return all objects
    getObjects() {
        return this.objects;
    }
    //in the application as is, there is only a single instance of a table or robot created; which makes the whole entity manager sort of pointless, but this was more implemented for fun; this method makes it easy to get the robot or the table
    getFirstOfObjectType(objectType) {
        const values = Array.from(this.objects.values());
        return values.filter((item) => item instanceof objectType)[0];
    }
    //use this to create instances robots or tables, creating the objects via method, makes them available through the object manager.
    createObject(objectType) {
        const ObjectClass = this.objectTypes[objectType];
        if (!ObjectClass) {
            throw new Error(`Unknown object type: ${objectType}`);
        }
        const createdObject = new ObjectClass();
        this.objects.set(createdObject.uuid, createdObject);
        return createdObject;
    }
}
exports.default = ObjectManager;
