import { Module } from '@nestjs/common';

import { PurchaseController } from './controllers/purchases.controller';

import { DatabaseModule } from '../database/database.module';

import { CourseService } from '../services/courses.service';
import { EnrollmentService } from '../services/enrollments.service';
import { StudentService } from '../services/students.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [CourseService, StudentService, EnrollmentService],
})
export class MessagingModule {}
