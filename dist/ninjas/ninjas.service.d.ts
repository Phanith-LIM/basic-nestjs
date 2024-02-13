import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
export declare class NinjasService {
    private ninjas;
    getNinjas(weapon?: 'stars' | 'nunchucks'): {
        id: number;
        name: string;
        weapon: string;
    }[];
    getNinjaById(id: number): {
        id: number;
        name: string;
        weapon: string;
    };
    createNinja(ninja: CreateNinjaDto): void;
    updateNinja(id: number, updateNinja: UpdateNinjaDto): {
        id: number;
        name: string;
        weapon: string;
    };
    removeNinja(id: number): {
        id: number;
        name: string;
        weapon: string;
    };
}
