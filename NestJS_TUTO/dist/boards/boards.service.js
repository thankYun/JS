"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const board_model_1 = require("./board.model");
const uuid_1 = require("uuid");
let BoardsService = exports.BoardsService = class BoardsService {
    constructor() {
        this.borads = [];
    }
    getAllBoards() {
        return this.borads;
    }
    createBoard(createBoardDto) {
        const { title, description } = createBoardDto;
        const board = {
            id: (0, uuid_1.v1)(),
            title: title,
            description: description,
            status: board_model_1.BoardStatus.PUBLIC
        };
        this.borads.push(board);
        return board;
    }
    getBoardById(id) {
        const found = this.borads.find((board) => board.id === id);
        if (!found) {
            throw new common_1.NotFoundException(`can't find Board with id ${id}`);
        }
        return found;
    }
    deleteBoard(id) {
        const found = this.getBoardById(id);
        this.borads = this.borads.filter((board) => board.id !== found.id);
    }
    updateBoardStatus(id, status) {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
};
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)()
], BoardsService);
//# sourceMappingURL=boards.service.js.map