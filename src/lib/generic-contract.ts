// import {
//   AccountTransactionType,
//   CcdAmount,
//   Energy,
//   ReceiveName,
//   deserializeTypeValue,
//   serializeTypeValue,
// } from "@concordium/web-sdk";
// import { Buffer } from "buffer/";

// export class InitMethod {
//   constructor(
//     moduleRef,
//     contractName,
//     paramsSchemaBase64,
//     maxExecutionEnergy = Energy.create(60000)
//   ) {
//     this.moduleRef = moduleRef;
//     this.contractName = contractName;
//     this.paramsSchemaBase64 = paramsSchemaBase64;
//     this.maxExecutionEnergy = maxExecutionEnergy;
//   }

//   async init(provider, account, params, amount = CcdAmount.fromCcd(0)) {
//     console.log("*88888888888888******************8888");
//     const schema = this.paramsSchemaBase64
//       ? {
//           type: "TypeSchema",
//           value: Buffer.from(this.paramsSchemaBase64, "base64"),
//         }
//       : undefined;

//     return provider.signAndSendTransaction(
//       account,
//       AccountTransactionType.InitContract,
//       {
//         amount,
//         moduleRef: this.moduleRef,
//         initName: this.contractName,
//         maxContractExecutionEnergy: this.maxExecutionEnergy,
//       },
//       params && schema
//         ? {
//             parameters: params,
//             schema,
//           }
//         : undefined
//     );
//   }

//   parseError = (value) => {
//     return `Error Code: ${value.rejectReason}`;
//   };
// }

// export class ReceiveMethod {
//   constructor(
//     contractName,
//     entrypoint,
//     paramsSchemaBase64,
//     outSchemaBase64,
//     errorSchemaBase64,
//     maxExecutionEnergy = Energy.create(60000)
//   ) {
//     this.contractName = contractName;
//     this.entrypoint = entrypoint;
//     this.paramsSchemaBase64 = paramsSchemaBase64;
//     this.outSchemaBase64 = outSchemaBase64;
//     this.errorSchemaBase64 = errorSchemaBase64;
//     this.maxExecutionEnergy = maxExecutionEnergy;
//   }
//   async update(
//     provider,
//     account,
//     address,
//     params,
//     amount = CcdAmount.fromCcd(0)
//   ) {
//     const schema = this.paramsSchemaBase64
//       ? {
//           type: "TypeSchema",
//           value: Buffer.from(this.paramsSchemaBase64, "base64"),
//         }
//       : undefined;

//     return provider.signAndSendTransaction(
//       account.address,
//       AccountTransactionType.Update,
//       {
//         amount,
//         contractName: this.contractName,
//         address,
//         maxContractExecutionEnergy: this.maxExecutionEnergy,
//         receiveName: ReceiveName.create(this.contractName, this.entrypoint),
//       },
//       params && schema
//         ? {
//             parameters: params,
//             schema,
//           }
//         : undefined
//     );
//   }

//   async invoke(
//     provider,
//     contract,
//     params,
//     invoker,
//     amount = CcdAmount.fromCcd(0)
//   ) {
//     const parameter =
//       params &&
//       serializeTypeValue(
//         params,
//         Buffer.from(this.paramsSchemaBase64, "base64")
//       );

//     return await provider.invokeContract({
//       contract,
//       parameter: parameter ? parameter : undefined,
//       invoker,
//       method: ReceiveName.create(this.contractName, this.entrypoint),
//       energy: this.maxExecutionEnergy,
//       amount,
//     });
//   }

//   parseError = (value) => {
//     return {
//       message: `Error Code: ${value.rejectReason}`,
//       error: undefined,
//     };
//   };

//   parseReturnValue = (value) => {
//     if (!this.outSchemaBase64) {
//       return undefined;
//     }

//     return deserializeTypeValue(
//       value.buffer,
//       Buffer.from(this.outSchemaBase64, "base64")
//     );
//   };
// }

import {
  SendTransactionInitContractPayload,
  SendTransactionUpdateContractPayload,
  SmartContractParameters,
} from "@concordium/browser-wallet-api-helpers";
import {
  AccountAddress,
  AccountTransactionType,
  CcdAmount,
  ConcordiumGRPCClient,
  ContractAddress,
  ContractName,
  Energy,
  EntrypointName,
  InvokeContractResult,
  ModuleReference,
  ReceiveName,
  RejectedInit,
  RejectedReceive,
  ReturnValue,
  deserializeTypeValue,
  serializeTypeValue,
} from "@concordium/web-sdk";
import { Buffer } from "buffer/";
import { ParsedError } from "./common/common";
import { TypeSchema, WalletConnection } from "@concordium/react-components";

export class InitMethod<TIn> {
  constructor(
    public moduleRef: ModuleReference.Type,
    public contractName: ContractName.Type,
    public paramsSchemaBase64?: string,
    public maxExecutionEnergy: Energy.Type = Energy.create(60000)
  ) {}

  async init(
    provider: WalletConnection,
    account: AccountAddress.Type,
    params?: TIn,
    amount: CcdAmount.Type = CcdAmount.fromCcd(0)
  ) {
    const schema: TypeSchema | undefined = this.paramsSchemaBase64
      ? ({
          type: "TypeSchema",
          value: Buffer.from(this.paramsSchemaBase64, "base64"),
        } as TypeSchema)
      : undefined;
    console.log("################################");
    return provider.signAndSendTransaction(
      account.address,
      AccountTransactionType.InitContract,
      {
        amount,
        moduleRef: this.moduleRef,
        initName: this.contractName,
        maxContractExecutionEnergy: this.maxExecutionEnergy,
      } as SendTransactionInitContractPayload,
      params && schema
        ? {
            parameters: params as SmartContractParameters,
            schema,
          }
        : undefined
    );
  }

  parseError: (value: RejectedInit) => string | undefined = (value) => {
    return `Error Code: ${value.rejectReason}`;
  };
}

// export class ReceiveMethod<TIn, TOut = never, TErr = never> {
// 	constructor(
// 		public contractName: ContractName.Type,
// 		public entrypoint: EntrypointName.Type,
// 		public paramsSchemaBase64?: string,
// 		public outSchemaBase64?: string,
// 		public errorSchemaBase64?: string,
// 		public maxExecutionEnergy: Energy.Type = Energy.create(60000),
// 	) { }
// 	async update(
// 		provider: WalletConnection,
// 		account: AccountAddress.Type,
// 		address: ContractAddress.Type,
// 		params?: TIn,
// 		amount: CcdAmount.Type = CcdAmount.fromCcd(0),
// 	): Promise<string> {
// 		const schema: TypeSchema | undefined = this.paramsSchemaBase64
// 			? {
// 				type: "TypeSchema",
// 				value: Buffer.from(this.paramsSchemaBase64, "base64"),
// 			} as TypeSchema
// 			: undefined;

// 		return provider.signAndSendTransaction(
// 			account.address,
// 			AccountTransactionType.Update,
// 			{
// 				amount,
// 				contractName: this.contractName,
// 				address,
// 				maxContractExecutionEnergy: this.maxExecutionEnergy,
// 				receiveName: ReceiveName.create(this.contractName, this.entrypoint),
// 			} as SendTransactionUpdateContractPayload,
// 			params && schema ? {
// 				parameters: params as SmartContractParameters,
// 				schema,
// 			} : undefined,
// 		);
// 	}

// 	async invoke(
// 		provider: ConcordiumGRPCClient,
// 		contract: ContractAddress.Type,
// 		params?: TIn,
// 		invoker?: AccountAddress.Type,
// 		amount: CcdAmount.Type = CcdAmount.fromCcd(0),
// 	): Promise<InvokeContractResult> {
// 		const parameter = params && serializeTypeValue(params, Buffer.from(this.paramsSchemaBase64!, "base64"));

// 		return await provider.invokeContract({
// 			contract,
// 			parameter: parameter ? parameter : undefined,
// 			invoker,
// 			method: ReceiveName.create(this.contractName, this.entrypoint),
// 			energy: this.maxExecutionEnergy,
// 			amount,
// 		});
// 	}

// 	parseError: (value: RejectedReceive) => ParsedError<TErr> | undefined = (value) => {
// 		return {
// 			message: `Error Code: ${value.rejectReason}`,
// 			error: undefined,
// 		};
// 	};

// 	parseReturnValue: (value: ReturnValue.Type) => TOut | undefined = (value) => {
// 		if (!this.outSchemaBase64) {
// 			return undefined;
// 		}

// 		return deserializeTypeValue(value.buffer, Buffer.from(this.outSchemaBase64!, "base64")) as TOut;
// 	};
// }
