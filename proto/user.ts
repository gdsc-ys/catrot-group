import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { FunctionsClient as _users_FunctionsClient, FunctionsDefinition as _users_FunctionsDefinition } from './users/Functions';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  users: {
    Functions: SubtypeConstructor<typeof grpc.Client, _users_FunctionsClient> & { service: _users_FunctionsDefinition }
    MannerReply: MessageTypeDefinition
    MannerRequest: MessageTypeDefinition
    UserReply: MessageTypeDefinition
    UserRequest: MessageTypeDefinition
  }
}

