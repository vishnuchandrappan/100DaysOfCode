"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    constructor(jwtService) {
        super();
        this.jwtService = jwtService;
        this.signUp = async (authCredentialsDto) => {
            const { username, password } = authCredentialsDto;
            const salt = await bcrypt.genSalt();
            const user = new user_entity_1.User();
            user.username = username;
            user.salt = salt;
            user.password = await this.hashPassword(password, salt);
            try {
                await user.save();
            }
            catch (error) {
                if (error.code === '23505') {
                    throw new common_1.ConflictException("Username already exists");
                }
                throw new common_1.InternalServerErrorException();
            }
            return user;
        };
        this.hashPassword = async (password, salt) => {
            return bcrypt.hash(password, salt);
        };
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map