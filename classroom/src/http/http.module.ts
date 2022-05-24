import path from 'node:path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

import { DatabaseModule } from '../database/database.module';

import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { StudentsResolver } from './graphql/resolvers/students.resolver';
import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver';

import { CourseService } from '../services/courses.service';
import { StudentService } from '../services/students.service';
import { EnrollmentService } from '../services/enrollments.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    CoursesResolver,
    EnrollmentsResolver,
    StudentsResolver,
    CourseService,
    EnrollmentService,
    StudentService,
  ],
})
export class HttpModule {}
