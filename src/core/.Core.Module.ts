import { Module } from '@nestjs/common';

import { DocumentModule } from './documents/Document.Module';

@Module({
  imports: [DocumentModule],
})
export class CoreModule {}
