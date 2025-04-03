import Robot from "./robot";
import { Uuid } from "../utils/types";

export default class ObjectManager {
  objects: Map<Uuid, Robot>;
  constructor() {
    this.objects = new Map();
  }

  getObjects() {
    return this.objects;
  }

  createRobot() {
    const createdObject = new Robot();
    this.objects.set(createdObject.uuid, createdObject);
    return createdObject;
  }
}
