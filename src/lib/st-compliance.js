import {
  ContractEvent,
  ContractName,
  EntrypointName,
  ModuleReference,
} from "@concordium/web-sdk";
import { InitMethod } from "./generic-contract";

export const CONTRACT_NAME = "rwa_compliance";

export const initRequestSchemaBase64 = "FAABAAAABwAAAG1vZHVsZXMQAgw=";
export const initErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const addAgentErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const addAgentRequestSchemaBase64 =
  "FQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADA==";
export const addModuleErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const addModuleRequestSchemaBase64 = "DA==";
export const agentsErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const agentsResponseSchemaBase64 =
  "EAIVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM";
export const burnedErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const burnedRequestSchemaBase64 =
  "FAADAAAACAAAAHRva2VuX2lkFAACAAAACAAAAHRva2VuX2lkHQAIAAAAY29udHJhY3QMBQAAAG93bmVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAYAAABhbW91bnQbJQAAAA==";
export const canTransferErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const canTransferRequestSchemaBase64 =
  "FAADAAAACAAAAHRva2VuX2lkFAACAAAACAAAAHRva2VuX2lkHQAIAAAAY29udHJhY3QMAgAAAHRvFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAYAAABhbW91bnQbJQAAAA==";
export const canTransferResponseSchemaBase64 = "AQ==";
export const isAgentErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const isAgentRequestSchemaBase64 =
  "FQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADA==";
export const isAgentResponseSchemaBase64 = "AQ==";
export const mintedErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const mintedRequestSchemaBase64 =
  "FAADAAAACAAAAHRva2VuX2lkFAACAAAACAAAAHRva2VuX2lkHQAIAAAAY29udHJhY3QMBQAAAG93bmVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAYAAABhbW91bnQbJQAAAA==";
export const modulesResponseSchemaBase64 = "EAIM";
export const removeAgentErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const removeAgentRequestSchemaBase64 =
  "FQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADA==";
export const removeModuleErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const removeModuleRequestSchemaBase64 = "DA==";
export const supportsErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const supportsRequestSchemaBase64 = "EAEWAA==";
export const supportsResponseSchemaBase64 =
  "EAEVAwAAAAkAAABOb1N1cHBvcnQCBwAAAFN1cHBvcnQCCQAAAFN1cHBvcnRCeQEBAAAAEAAM";
export const transferredErrorSchemaBase64 =
  "FQcAAAAKAAAAUGFyc2VFcnJvcgIIAAAATG9nRXJyb3ICDQAAAEludmFsaWRNb2R1bGUCEQAAAENhbGxDb250cmFjdEVycm9yAgwAAABVbmF1dGhvcml6ZWQCEgAAAEFnZW50QWxyZWFkeUV4aXN0cwINAAAAQWdlbnROb3RGb3VuZAI=";
export const transferredRequestSchemaBase64 =
  "FAAEAAAACAAAAHRva2VuX2lkFAACAAAACAAAAHRva2VuX2lkHQAIAAAAY29udHJhY3QMBAAAAGZyb20VAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMAgAAAHRvFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAYAAABhbW91bnQbJQAAAA==";
export const eventSchemaBase64 =
  "FQQAAAAMAAAAQWdlbnRSZW1vdmVkAQEAAAAUAAEAAAAFAAAAYWdlbnQVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMCgAAAEFnZW50QWRkZWQBAQAAABQAAQAAAAUAAABhZ2VudBUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwLAAAATW9kdWxlQWRkZWQBAQAAAAwNAAAATW9kdWxlUmVtb3ZlZAEBAAAADA==";

export const ENTRYPOINTS = {
  addAgent: EntrypointName.fromString("addAgent"),
  addModule: EntrypointName.fromString("addModule"),
  agents: EntrypointName.fromString("agents"),
  burned: EntrypointName.fromString("burned"),
  canTransfer: EntrypointName.fromString("canTransfer"),
  isAgent: EntrypointName.fromString("isAgent"),
  minted: EntrypointName.fromString("minted"),
  modules: EntrypointName.fromString("modules"),
  removeAgent: EntrypointName.fromString("removeAgent"),
  removeModule: EntrypointName.fromString("removeModule"),
  supports: EntrypointName.fromString("supports"),
  transferred: EntrypointName.fromString("transferred"),
};

export const ENTRYPOINT_DISPLAY_NAMES = {
  addAgent: "Add Agent",
  addModule: "Add Module",
  agents: "Agents",
  burned: "Burned",
  canTransfer: "Can Transfer",
  isAgent: "Is Agent",
  minted: "Minted",
  modules: "Modules",
  removeAgent: "Remove Agent",
  removeModule: "Remove Module",
  supports: "Supports",
  transferred: "Transferred",
};

export const rwaCompliance = {
  init: (moduleReference, contractName) =>
    new InitMethod(
      ModuleReference.fromHexString(moduleReference),
      ContractName.fromString(contractName),
      initRequestSchemaBase64
    ),
  // addAgent: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance"),
  //   EntrypointName.fromString("addAgent"),
  //   addAgentRequestSchemaBase64,
  //   undefined,
  //   addAgentErrorSchemaBase64
  // ),
  // addModule: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance"),
  //   EntrypointName.fromString("addModule"),
  //   addModuleRequestSchemaBase64,
  //   undefined,
  //   addModuleErrorSchemaBase64
  // ),
  // agents: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance"),
  //   EntrypointName.fromString("agents"),
  //   undefined,
  //   agentsResponseSchemaBase64,
  //   agentsErrorSchemaBase64
  // ),
  // burned: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance"),
  //   EntrypointName.fromString("burned"),
  //   burnedRequestSchemaBase64,
  //   undefined,
  //   burnedErrorSchemaBase64
  // ),
  // canTransfer: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance"),
  //   EntrypointName.fromString("canTransfer"),
  //   canTransferRequestSchemaBase64,
  //   canTransferResponseSchemaBase64,
  //   canTransferErrorSchemaBase64
  // ),
  // isAgent: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance"),
  //   EntrypointName.fromString("isAgent"),
  //   isAgentRequestSchemaBase64,
  //   isAgentResponseSchemaBase64,
  //   isAgentErrorSchemaBase64
  // ),
  // minted: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance"),
  //   EntrypointName.fromString("minted"),
  //   mintedRequestSchemaBase64,
  //   undefined,
  //   mintedErrorSchemaBase64
  // ),
  // modules: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance"),
  //   EntrypointName.fromString("modules"),
  //   undefined,
  //   modulesResponseSchemaBase64
  // ),
  // removeAgent: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance"),
  //   EntrypointName.fromString("removeAgent"),
  //   removeAgentRequestSchemaBase64,
  //   undefined,
  //   removeAgentErrorSchemaBase64
  // ),
  // removeModule: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance"),
  //   EntrypointName.fromString("removeModule"),
  //   removeModuleRequestSchemaBase64,
  //   undefined,
  //   removeModuleErrorSchemaBase64
  // ),
  // supports: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance"),
  //   EntrypointName.fromString("supports"),
  //   supportsRequestSchemaBase64,
  //   supportsResponseSchemaBase64,
  //   supportsErrorSchemaBase64
  // ),
  // transferred: new ReceiveMethod(
  //   ContractName.fromString("rwa_compliance"),
  //   EntrypointName.fromString("transferred"),
  //   transferredRequestSchemaBase64,
  //   undefined,
  //   transferredErrorSchemaBase64
  // ),
  deserializeEvent: (event) => {
    return ContractEvent.parseWithSchemaTypeBase64(event, eventSchemaBase64);
  },
};

export default rwaCompliance;
