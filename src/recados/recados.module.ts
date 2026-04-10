import { forwardRef, Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';
import { RecadosService } from './recados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recado } from './entities/recado.entity';
import { PessoasModule } from '/pessoas/pessoas.module';
import { RecadosUtils } from './recados.utils';
import { RegexFactory } from '/common/regex/regex.factory';
import {
  ONLY_LOWERCASE_LETTERS_REGEX,
  REMOVE_SPACES_REGEX,
} from './recados.constant';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recado]),
    forwardRef(() => PessoasModule),
  ],
  controllers: [RecadosController],
  providers: [
    RecadosService,
    RecadosUtils,
    RegexFactory,
    {
      provide: REMOVE_SPACES_REGEX,
      useFactory: (regexFactory: RegexFactory) => {
        return regexFactory.create('RemoveSpacesRegex');
      },
      inject: [RegexFactory],
    },
    {
      provide: ONLY_LOWERCASE_LETTERS_REGEX,
      useFactory: async (regexFactory: RegexFactory) => {
        console.log('ESPERANDO: Vou aguardar a promise abaixo ser resolvida.');
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log('PRONTO: Vou aguardar a promise abaixo ser resolvida.');

        return regexFactory.create('OnlyLowercaseLettersRegex');
      },
      inject: [RegexFactory],
    },
  ],
  exports: [RecadosUtils],
})
export class RecadosModule { }