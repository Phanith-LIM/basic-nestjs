import { Controller, Get, Param, Post, Query, Put, Delete, Body, NotFoundException, ValidationPipe } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
import { UpdateNinjaDto } from './dto/update-ninja.dto';


@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjaService: NinjasService) {}

    @Get()
    getNinjas(@Query('weapon') weapon?: 'stars' | 'nunchucks' | null) {
        return this.ninjaService.getNinjas(weapon)
    }

    @Post()
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto){
        return this.ninjaService.createNinja(createNinjaDto)
    }

    @Put(':id') 
    updateNinja(@Param('id') id: number, @Body() updateNinja: UpdateNinjaDto){
        return this.ninjaService.updateNinja(id, updateNinja)
    }

    @Delete(':id')
    deleteNinja(@Param('id') id: string){
        return this.ninjaService.removeNinja(+id)
    }
}
