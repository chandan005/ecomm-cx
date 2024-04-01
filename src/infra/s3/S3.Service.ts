/* eslint-disable import/order */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { Readable } from 'stream';
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

  async uploadToS3(bucket: string, key: string, data: Buffer): Promise<void> {
    try {
      const uploadParams: S3.PutObjectRequest = {
        Bucket: bucket,
        Key: key,
        Body: data,
      };
      await this.s3.upload(uploadParams).promise();
    } catch (err) {
      console.error(err);
    }
  }

  async getCsvStream(bucket: string, key: string): Promise<Readable | undefined> {
    const params = {
      Bucket: bucket,
      Key: key,
    };
    try {
      return this.s3.getObject(params).createReadStream();
    } catch (err) {
      console.error(err);
    }
  }
}
