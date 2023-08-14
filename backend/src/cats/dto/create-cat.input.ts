import { InputType, Field } from '@nestjs/graphql';
import { FileUpload } from 'src/@Types/FileUpload';
import { GraphQLScalarType } from 'graphql';

let GraphQLUpload: GraphQLScalarType;

import('graphql-upload/GraphQLUpload.mjs').then(({ default: Upload }) => {
  GraphQLUpload = Upload;
});

@InputType()
export class CreateCatInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  breed: string;

  @Field(() => GraphQLUpload)
  image: Promise<FileUpload>;
}
