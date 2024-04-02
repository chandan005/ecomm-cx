/* eslint-disable import/order */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BedrockRuntime } from 'aws-sdk';

@Injectable()
export class TitanService {
  constructor(
    private bedrockRunTime: BedrockRuntime,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.bedrockRunTime = new BedrockRuntime({
      accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get('AWS_ACCESS_KEY_SECRET'),
      region: 'ap-south-1',
    });
  }
}
