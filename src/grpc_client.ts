import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoloader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/user'

const grpcServerAddr = '54.180.211.115:50051'
const PROTO_FILE = '../proto/user.proto'

const packageDef = protoloader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType


const client = new grpcObj.users.Functions(
    // server location
    grpcServerAddr, grpc.credentials.createInsecure()
)

function onClientReady() {
    client.GetInfo({id: 1}, (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(result?.nickname)
        console.log(result?.manner)
        console.log(result?.phone)
    })
}

onClientReady()