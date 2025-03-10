export class ReportService {
  static apply = function (object) {
    try {
      object.validateHasBeenPlaced();
      console.log(
        `x: ${object.position.x}, y: ${object.position.y}, facing: ${object.facing}`
      );
    } catch (error) {
      console.error(error);
    }
  };
}
