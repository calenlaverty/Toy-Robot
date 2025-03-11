export class ReportService {
  static apply(object, surface) {
    const currentObject = object.getState();
    try {
      surface.validateObjectIsOnThisSurface(currentObject);
      console.log(
        `x: ${currentObject.position.x}, y: ${currentObject.position.y}, facing: ${currentObject.facing}`
      );
    } catch (error) {
      console.error(error);
    }
  }
}
