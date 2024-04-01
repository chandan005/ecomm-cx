import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { PresignedUrlType } from './entities/PresignedUrlType';

@Injectable()
export class S3Service {
  constructor(
    private s3: S3,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.s3 = new S3({
      accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get('AWS_ACCESS_KEY_SECRET'),
      region: 'ap-south-1',
      signatureVersion: 'v4',
    });
  }

  async generateSignedUrl(
    bucket: string,
    key: string,
    operationType: PresignedUrlType,
    contentType: string,
    expirationTimeInSeconds?: number | undefined,
  ): Promise<string> {
    try {
      return this.s3.getSignedUrlPromise(operationType, {
        Key: key,
        Bucket: bucket,
        Expires: expirationTimeInSeconds,
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async uploadToS3(key: string, data: Buffer): Promise<void> {
    try {
      const uploadParams: S3.PutObjectRequest = {
        Bucket: process.env.S3_BUCKET_NAME || '',
        Key: key,
        Body: data,
      };
      await this.s3.upload(uploadParams).promise();
    } catch (err) {}
  }

  //   async uploadToS3(signedUrl: string, contentType: string, data: any): Promise<AxiosResponse> {
  //     try {
  //       const response = await firstValueFrom(
  //         this.httpService.put(signedUrl, data, {
  //           headers: {
  //             'Content-Type': contentType,
  //             'Content-Disposition': 'inline',
  //           },
  //         }),
  //       );
  //       return response;
  //     } catch (err) {
  //       throw new Error(err);
  //     }
  //   }
}
