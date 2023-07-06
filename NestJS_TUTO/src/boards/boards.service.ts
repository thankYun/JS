import { Injectable, NotFoundException } from '@nestjs/common';
import { Board,  BoardStatus } from './board.model';
import {v1 as uuid} from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';


@Injectable()
export class BoardsService {
    private borads: Board[] = []; // 프라이빗 사용한 이유: 다른 컴포넌트에서 boards 수정할 수 없게 하기 위해

    //모든 보드 불러오기
    getAllBoards() : Board[] {
        return this.borads;
    }

    //보드 생성
    createBoard(createBoardDto:CreateBoardDto){
        const {title,description} =createBoardDto;
        const board: Board = {
            id : uuid(),
            title : title,
            description: description,
            status: BoardStatus.PUBLIC
        }
        this.borads.push(board);
        return board;
    }

    getBoardById(id: string):Board {
        const found = this.borads.find((board)=> board.id === id);

        if (!found){
            throw new NotFoundException(`can't find Board with id ${id}`);
        }
        return found
    }

    deleteBoard(id: string):void {
        const found= this.getBoardById(id);
       this.borads = this.borads.filter((board) => board.id !== found.id); //filter 안의 조건을 통해 보드의 id와 입력된 id 값이 다른 값을 this.boards로 갱신
    }

    updateBoardStatus(id:string,status:BoardStatus): Board{
        const board = this.getBoardById(id);
        board.status = status;
        return board;        
    }
}
