"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
class ReportService {
    static apply(object, surface) {
        const currentObject = object.getState();
        try {
            surface.validateObjectIsOnThisSurface(currentObject);
            return (`~~~START OF REPORT~~~\n` +
                `Robot is located at: x: ${currentObject.position.x}, y: ${currentObject.position.y}\n` +
                `Robot is facing: ${currentObject.facing.toLowerCase()}\n` +
                `~~~END OF REPORT~~~`);
        }
        catch (error) {
            return error;
        }
    }
}
exports.ReportService = ReportService;
