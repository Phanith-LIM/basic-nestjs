import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
export declare class NinjasController {
    private readonly ninjaService;
    constructor(ninjaService: NinjasService);
    getNinjas(weapon?: 'stars' | 'nunchucks' | null): {
        id: number;
        name: string;
        weapon: string;
    }[];
    createNinja(createNinjaDto: CreateNinjaDto): void;
    updateNinja(id: number, updateNinja: UpdateNinjaDto): {
        id: number;
        name: string;
        weapon: string;
    };
    deleteNinja(id: string): {
        id: number;
        name: string;
        weapon: string;
    };
}
