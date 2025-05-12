import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    DataChanged: event("0xece574603820d07bc9b91f2a932baadf4628aabcb8afba49776529c14a6104b2", "DataChanged(bytes32,bytes)", {"dataKey": indexed(p.bytes32), "dataValue": p.bytes}),
    LYXWithdrawn: event("0xdb88751495051d4d83d67ff83e0ef515cf450437dce6299f53cc5e62a6abac88", "LYXWithdrawn(address,uint256)", {"recipient": indexed(p.address), "amount": p.uint256}),
    LikesMinted: event("0x8bcac94076fc774faa07bce7518d05dc52559b370125bf140bad8d1f15ecbae8", "LikesMinted(address,uint256,uint256)", {"user": indexed(p.address), "lyxSpent": p.uint256, "likesMinted": p.uint256}),
    LikesPriceUpdated: event("0x81816ab4239380bfdc700aec23c32f188bbfb876441e75bc41db2ad387dbf0fb", "LikesPriceUpdated(uint256,uint256)", {"oldPrice": p.uint256, "newPrice": p.uint256}),
    OperatorAuthorizationChanged: event("0xf772a43bfdf4729b196e3fb54a818b91a2ca6c49d10b2e16278752f9f515c25d", "OperatorAuthorizationChanged(address,address,uint256,bytes)", {"operator": indexed(p.address), "tokenOwner": indexed(p.address), "amount": indexed(p.uint256), "operatorNotificationData": p.bytes}),
    OperatorRevoked: event("0x0ebf5762d8855cbe012d2ca42fb33a81175e17c8a8751f8859931ba453bd4167", "OperatorRevoked(address,address,bool,bytes)", {"operator": indexed(p.address), "tokenOwner": indexed(p.address), "notified": indexed(p.bool), "operatorNotificationData": p.bytes}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    Transfer: event("0x3997e418d2cef0b3b0e907b1e39605c3f7d32dbd061e82ea5b4a770d46a160a6", "Transfer(address,address,address,uint256,bool,bytes)", {"operator": indexed(p.address), "from": indexed(p.address), "to": indexed(p.address), "amount": p.uint256, "force": p.bool, "data": p.bytes}),
    TreasuryFunded: event("0xda1785fe1dec267c363b06ae3e02c3e086123f9d611399f7a1cc98492518372e", "TreasuryFunded(address,uint256)", {"treasury": indexed(p.address), "amount": p.uint256}),
}

export const functions = {
    authorizeOperator: fun("0xb49506fd", "authorizeOperator(address,uint256,bytes)", {"operator": p.address, "amount": p.uint256, "operatorNotificationData": p.bytes}, ),
    authorizedAmountFor: viewFun("0x65aeaa95", "authorizedAmountFor(address,address)", {"operator": p.address, "tokenOwner": p.address}, p.uint256),
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"tokenOwner": p.address}, p.uint256),
    batchCalls: fun("0x6963d438", "batchCalls(bytes[])", {"data": p.array(p.bytes)}, p.array(p.bytes)),
    decimals: viewFun("0x313ce567", "decimals()", {}, p.uint8),
    decreaseAllowance: fun("0x78381670", "decreaseAllowance(address,address,uint256,bytes)", {"operator": p.address, "tokenOwner": p.address, "subtractedAmount": p.uint256, "operatorNotificationData": p.bytes}, ),
    getData: viewFun("0x54f6127f", "getData(bytes32)", {"dataKey": p.bytes32}, p.bytes),
    getDataBatch: viewFun("0xdedff9c6", "getDataBatch(bytes32[])", {"dataKeys": p.array(p.bytes32)}, p.array(p.bytes)),
    getOperatorsOf: viewFun("0xd72fc29a", "getOperatorsOf(address)", {"tokenOwner": p.address}, p.array(p.address)),
    increaseAllowance: fun("0x2bc1da82", "increaseAllowance(address,uint256,bytes)", {"operator": p.address, "addedAmount": p.uint256, "operatorNotificationData": p.bytes}, ),
    likesPerLYX: viewFun("0x924633f9", "likesPerLYX()", {}, p.uint256),
    mint: fun("0x7580d920", "mint(address,uint256,bool,bytes)", {"to": p.address, "amount": p.uint256, "force": p.bool, "data": p.bytes}, ),
    mintLikes: fun("0xdb50cee3", "mintLikes(address)", {"recipient": p.address}, ),
    mintedLikes: viewFun("0x2550796f", "mintedLikes(address)", {"_0": p.address}, p.uint256),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    revokeOperator: fun("0x30d0dc37", "revokeOperator(address,address,bool,bytes)", {"operator": p.address, "tokenOwner": p.address, "notify": p.bool, "operatorNotificationData": p.bytes}, ),
    setData: fun("0x7f23690c", "setData(bytes32,bytes)", {"dataKey": p.bytes32, "dataValue": p.bytes}, ),
    setDataBatch: fun("0x97902421", "setDataBatch(bytes32[],bytes[])", {"dataKeys": p.array(p.bytes32), "dataValues": p.array(p.bytes)}, ),
    setLikesPerLYX: fun("0x0bf32ec2", "setLikesPerLYX(uint256)", {"newPrice": p.uint256}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    transfer: fun("0x760d9bba", "transfer(address,address,uint256,bool,bytes)", {"from": p.address, "to": p.address, "amount": p.uint256, "force": p.bool, "data": p.bytes}, ),
    transferBatch: fun("0x2d7667c9", "transferBatch(address[],address[],uint256[],bool[],bytes[])", {"from": p.array(p.address), "to": p.array(p.address), "amount": p.array(p.uint256), "force": p.array(p.bool), "data": p.array(p.bytes)}, ),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    treasury: viewFun("0x61d027b3", "treasury()", {}, p.address),
    withdrawLYX: fun("0xd11f512a", "withdrawLYX(address,uint256)", {"recipient": p.address, "amount": p.uint256}, ),
}

export class Contract extends ContractBase {

    authorizedAmountFor(operator: AuthorizedAmountForParams["operator"], tokenOwner: AuthorizedAmountForParams["tokenOwner"]) {
        return this.eth_call(functions.authorizedAmountFor, {operator, tokenOwner})
    }

    balanceOf(tokenOwner: BalanceOfParams["tokenOwner"]) {
        return this.eth_call(functions.balanceOf, {tokenOwner})
    }

    decimals() {
        return this.eth_call(functions.decimals, {})
    }

    getData(dataKey: GetDataParams["dataKey"]) {
        return this.eth_call(functions.getData, {dataKey})
    }

    getDataBatch(dataKeys: GetDataBatchParams["dataKeys"]) {
        return this.eth_call(functions.getDataBatch, {dataKeys})
    }

    getOperatorsOf(tokenOwner: GetOperatorsOfParams["tokenOwner"]) {
        return this.eth_call(functions.getOperatorsOf, {tokenOwner})
    }

    likesPerLYX() {
        return this.eth_call(functions.likesPerLYX, {})
    }

    mintedLikes(_0: MintedLikesParams["_0"]) {
        return this.eth_call(functions.mintedLikes, {_0})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }

    treasury() {
        return this.eth_call(functions.treasury, {})
    }
}

/// Event types
export type DataChangedEventArgs = EParams<typeof events.DataChanged>
export type LYXWithdrawnEventArgs = EParams<typeof events.LYXWithdrawn>
export type LikesMintedEventArgs = EParams<typeof events.LikesMinted>
export type LikesPriceUpdatedEventArgs = EParams<typeof events.LikesPriceUpdated>
export type OperatorAuthorizationChangedEventArgs = EParams<typeof events.OperatorAuthorizationChanged>
export type OperatorRevokedEventArgs = EParams<typeof events.OperatorRevoked>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type TransferEventArgs = EParams<typeof events.Transfer>
export type TreasuryFundedEventArgs = EParams<typeof events.TreasuryFunded>

/// Function types
export type AuthorizeOperatorParams = FunctionArguments<typeof functions.authorizeOperator>
export type AuthorizeOperatorReturn = FunctionReturn<typeof functions.authorizeOperator>

export type AuthorizedAmountForParams = FunctionArguments<typeof functions.authorizedAmountFor>
export type AuthorizedAmountForReturn = FunctionReturn<typeof functions.authorizedAmountFor>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type BatchCallsParams = FunctionArguments<typeof functions.batchCalls>
export type BatchCallsReturn = FunctionReturn<typeof functions.batchCalls>

export type DecimalsParams = FunctionArguments<typeof functions.decimals>
export type DecimalsReturn = FunctionReturn<typeof functions.decimals>

export type DecreaseAllowanceParams = FunctionArguments<typeof functions.decreaseAllowance>
export type DecreaseAllowanceReturn = FunctionReturn<typeof functions.decreaseAllowance>

export type GetDataParams = FunctionArguments<typeof functions.getData>
export type GetDataReturn = FunctionReturn<typeof functions.getData>

export type GetDataBatchParams = FunctionArguments<typeof functions.getDataBatch>
export type GetDataBatchReturn = FunctionReturn<typeof functions.getDataBatch>

export type GetOperatorsOfParams = FunctionArguments<typeof functions.getOperatorsOf>
export type GetOperatorsOfReturn = FunctionReturn<typeof functions.getOperatorsOf>

export type IncreaseAllowanceParams = FunctionArguments<typeof functions.increaseAllowance>
export type IncreaseAllowanceReturn = FunctionReturn<typeof functions.increaseAllowance>

export type LikesPerLYXParams = FunctionArguments<typeof functions.likesPerLYX>
export type LikesPerLYXReturn = FunctionReturn<typeof functions.likesPerLYX>

export type MintParams = FunctionArguments<typeof functions.mint>
export type MintReturn = FunctionReturn<typeof functions.mint>

export type MintLikesParams = FunctionArguments<typeof functions.mintLikes>
export type MintLikesReturn = FunctionReturn<typeof functions.mintLikes>

export type MintedLikesParams = FunctionArguments<typeof functions.mintedLikes>
export type MintedLikesReturn = FunctionReturn<typeof functions.mintedLikes>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type RevokeOperatorParams = FunctionArguments<typeof functions.revokeOperator>
export type RevokeOperatorReturn = FunctionReturn<typeof functions.revokeOperator>

export type SetDataParams = FunctionArguments<typeof functions.setData>
export type SetDataReturn = FunctionReturn<typeof functions.setData>

export type SetDataBatchParams = FunctionArguments<typeof functions.setDataBatch>
export type SetDataBatchReturn = FunctionReturn<typeof functions.setDataBatch>

export type SetLikesPerLYXParams = FunctionArguments<typeof functions.setLikesPerLYX>
export type SetLikesPerLYXReturn = FunctionReturn<typeof functions.setLikesPerLYX>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type TransferParams = FunctionArguments<typeof functions.transfer>
export type TransferReturn = FunctionReturn<typeof functions.transfer>

export type TransferBatchParams = FunctionArguments<typeof functions.transferBatch>
export type TransferBatchReturn = FunctionReturn<typeof functions.transferBatch>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type TreasuryParams = FunctionArguments<typeof functions.treasury>
export type TreasuryReturn = FunctionReturn<typeof functions.treasury>

export type WithdrawLYXParams = FunctionArguments<typeof functions.withdrawLYX>
export type WithdrawLYXReturn = FunctionReturn<typeof functions.withdrawLYX>

