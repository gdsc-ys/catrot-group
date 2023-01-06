// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MannerReply as _users_MannerReply, MannerReply__Output as _users_MannerReply__Output } from '../users/MannerReply';
import type { MannerRequest as _users_MannerRequest, MannerRequest__Output as _users_MannerRequest__Output } from '../users/MannerRequest';
import type { UserReply as _users_UserReply, UserReply__Output as _users_UserReply__Output } from '../users/UserReply';
import type { UserRequest as _users_UserRequest, UserRequest__Output as _users_UserRequest__Output } from '../users/UserRequest';

export interface FunctionsClient extends grpc.Client {
  ChangeManner(argument: _users_MannerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_MannerReply__Output>): grpc.ClientUnaryCall;
  ChangeManner(argument: _users_MannerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_MannerReply__Output>): grpc.ClientUnaryCall;
  ChangeManner(argument: _users_MannerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_MannerReply__Output>): grpc.ClientUnaryCall;
  ChangeManner(argument: _users_MannerRequest, callback: grpc.requestCallback<_users_MannerReply__Output>): grpc.ClientUnaryCall;
  changeManner(argument: _users_MannerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_MannerReply__Output>): grpc.ClientUnaryCall;
  changeManner(argument: _users_MannerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_MannerReply__Output>): grpc.ClientUnaryCall;
  changeManner(argument: _users_MannerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_MannerReply__Output>): grpc.ClientUnaryCall;
  changeManner(argument: _users_MannerRequest, callback: grpc.requestCallback<_users_MannerReply__Output>): grpc.ClientUnaryCall;
  
  GetInfo(argument: _users_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserReply__Output>): grpc.ClientUnaryCall;
  GetInfo(argument: _users_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UserReply__Output>): grpc.ClientUnaryCall;
  GetInfo(argument: _users_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserReply__Output>): grpc.ClientUnaryCall;
  GetInfo(argument: _users_UserRequest, callback: grpc.requestCallback<_users_UserReply__Output>): grpc.ClientUnaryCall;
  getInfo(argument: _users_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserReply__Output>): grpc.ClientUnaryCall;
  getInfo(argument: _users_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UserReply__Output>): grpc.ClientUnaryCall;
  getInfo(argument: _users_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserReply__Output>): grpc.ClientUnaryCall;
  getInfo(argument: _users_UserRequest, callback: grpc.requestCallback<_users_UserReply__Output>): grpc.ClientUnaryCall;
  
}

export interface FunctionsHandlers extends grpc.UntypedServiceImplementation {
  ChangeManner: grpc.handleUnaryCall<_users_MannerRequest__Output, _users_MannerReply>;
  
  GetInfo: grpc.handleUnaryCall<_users_UserRequest__Output, _users_UserReply>;
  
}

export interface FunctionsDefinition extends grpc.ServiceDefinition {
  ChangeManner: MethodDefinition<_users_MannerRequest, _users_MannerReply, _users_MannerRequest__Output, _users_MannerReply__Output>
  GetInfo: MethodDefinition<_users_UserRequest, _users_UserReply, _users_UserRequest__Output, _users_UserReply__Output>
}
