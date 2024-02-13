import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        { id: 0, name: 'ninjaA', weapon: 'stars' },
        { id: 1, name: 'ninjaA', weapon: 'nunchucks' },
        { id: 2, name: 'ninjaA', weapon: 'stars' },
    ]

    getNinjas(weapon?: 'stars' | 'nunchucks'){
        if(weapon) {
            return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }

        return this.ninjas;
    }

    getNinjaById(id: number) {
        const ninja = this.ninjas.find((ninja) => ninja.id == id)
        if(!ninja) {
            throw new Error("ninja not founds")
        }

        return ninja
    }

    createNinja(ninja: CreateNinjaDto){
        const newNinja = {
            ...ninja,
            id: Date.now()
        }

        this.ninjas.push(newNinja)
    }

    updateNinja(id: number, updateNinja: UpdateNinjaDto) {
        this.ninjas = this.ninjas.map((ninja) => {
            if(ninja.id == id) {
                return {...ninja, ...updateNinja}
            }
            return ninja
        })

        return this.getNinjaById(id)
    }

    removeNinja(id: number){
        const toBeRemoved = this.getNinjaById(id)
        this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id)
        return toBeRemoved;
    }
}
