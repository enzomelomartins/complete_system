import { Controller, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import globalConfig from '../global-config/global.config';
import type { ConfigType } from '@nestjs/config';

@Controller('home')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(globalConfig.KEY)
    private readonly globalConfiguration: ConfigType<typeof globalConfig>,
  ) {}

  // @Get('hello')
  // getHello(): string {
  //   const retorno = 'Retorno.'
  //   return retorno;
  // }

  // @Get('exemplo')
  // exemplo() {
  //   return this.appService.solucionaExemplo();
  // }
}
