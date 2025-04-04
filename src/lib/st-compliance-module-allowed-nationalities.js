import {
  ContractName,
  EntrypointName,
  ModuleReference,
} from "@concordium/web-sdk";
import { InitMethod } from "./generic-contract";
export const CONTRACT_NAME = "rwa_compliance_module_allowed_nationalities";
export const initRequestSchemaBase64 =
  "FAACAAAADQAAAG5hdGlvbmFsaXRpZXMQAhYCEQAAAGlkZW50aXR5X3JlZ2lzdHJ5DA==";
export const initErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const burnedErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const canTransferErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const canTransferRequestSchemaBase64 =
  "FAADAAAACAAAAHRva2VuX2lkFAACAAAACAAAAHRva2VuX2lkHQAIAAAAY29udHJhY3QMAgAAAHRvFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAYAAABhbW91bnQbJQAAAA==";
export const canTransferResponseSchemaBase64 = "AQ==";
export const mintedErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const transferredErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const ENTRYPOINTS = {
  burned: EntrypointName.fromString("burned"),
  canTransfer: EntrypointName.fromString("canTransfer"),
  minted: EntrypointName.fromString("minted"),
  transferred: EntrypointName.fromString("transferred"),
};
export const ENTRYPOINT_DISPLAY_NAMES = {
  burned: "Burned",
  canTransfer: "Can Transfer",
  minted: "Minted",
  transferred: "Transferred",
};
export const stComplianceModuleAllowedNationalities = {
  init: (moduleReference, contractName) =>
    new InitMethod(
      ModuleReference.fromHexString(moduleReference),
      ContractName.fromString(contractName),
      initRequestSchemaBase64
    ),
  // burned: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance_module_allowed_nationalities"),
  //   EntrypointName.fromString("burned"),
  //   undefined,
  //   undefined,
  //   burnedErrorSchemaBase64
  // ),
  // canTransfer: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance_module_allowed_nationalities"),
  //   EntrypointName.fromString("canTransfer"),
  //   canTransferRequestSchemaBase64,
  //   canTransferResponseSchemaBase64,
  //   canTransferErrorSchemaBase64
  // ),
  // minted: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance_module_allowed_nationalities"),
  //   EntrypointName.fromString("minted"),
  //   undefined,
  //   undefined,
  //   mintedErrorSchemaBase64
  // ),
  // transferred: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance_module_allowed_nationalities"),
  //   EntrypointName.fromString("transferred"),
  //   undefined,
  //   undefined,
  //   transferredErrorSchemaBase64
  // ),
};
export default stComplianceModuleAllowedNationalities;
