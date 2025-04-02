import Robot from "./robot.js";
import Table from "./table.js";

export default class ObjectManager {
  objectTypes: any;
  objects: any;
  constructor() {
    this.objectTypes = { Robot, Table };
    this.objects = new Map();
  }

  //return a specific object by id
  getObject(uuid: string) {
    return this.objects.get(uuid);
  }

  //return all objects
  getObjects() {
    return this.objects;
  }

  //in the application as is, there is only a single instance of a table or robot created; which makes the whole entity manager sort of pointless, but this was more implemented for fun; this method makes it easy to get the robot or the table
  getFirstOfObjectType(objectType: any) {
    const values = Array.from(this.objects.values());
    return values.filter((item) => item instanceof objectType)[0];
  }

  //use this to create instances robots or tables, creating the objects via method, makes them available through the object manager.
  createObject(objectType: any) {
    const ObjectClass = this.objectTypes[objectType];
    if (!ObjectClass) {
      throw new Error(`Unknown object type: ${objectType}`);
    }
    const createdObject = new ObjectClass();

    this.objects.set(createdObject.uuid, createdObject);
    return createdObject;
  }
}
