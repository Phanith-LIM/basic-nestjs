"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNinjaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_ninja_dto_1 = require("./create-ninja.dto");
class UpdateNinjaDto extends (0, swagger_1.PartialType)(create_ninja_dto_1.CreateNinjaDto) {
}
exports.UpdateNinjaDto = UpdateNinjaDto;
//# sourceMappingURL=update-ninja.dto.js.map