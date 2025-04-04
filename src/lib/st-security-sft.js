import {
  ContractEvent,
  ContractName,
  EntrypointName,
  ModuleReference,
} from "@concordium/web-sdk";
import { InitMethod } from "./generic-contract";
export const CONTRACT_NAME = "rwa_security_sft";
export const initRequestSchemaBase64 =
  "FAADAAAAEQAAAGlkZW50aXR5X3JlZ2lzdHJ5DAoAAABjb21wbGlhbmNlDAgAAABzcG9uc29ycxACDA==";
export const initErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const addAgentErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const addAgentRequestSchemaBase64 =
  "FQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADA==";
export const addTokensErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const addTokensRequestSchemaBase64 =
  "FAABAAAABgAAAHRva2VucxACFAADAAAAEAAAAGRlcG9zaXRfdG9rZW5faWQUAAIAAAAIAAAAY29udHJhY3QMAgAAAGlkHQAMAAAAbWV0YWRhdGFfdXJsFAACAAAAAwAAAHVybBYCBAAAAGhhc2gVAgAAAAQAAABOb25lAgQAAABTb21lAQEAAAAWAg4AAABmcmFjdGlvbnNfcmF0ZRQAAgAAAAkAAABudW1lcmF0b3IFCwAAAGRlbm9taW5hdG9yBQ==";
export const agentsErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const agentsResponseSchemaBase64 =
  "EAIVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM";
export const balanceOfErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const balanceOfRequestSchemaBase64 =
  "EAEUAAIAAAAIAAAAdG9rZW5faWQdAAcAAABhZGRyZXNzFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADA==";
export const balanceOfResponseSchemaBase64 = "EAEbJQAAAA==";
export const balanceOfDepositedErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const balanceOfDepositedRequestSchemaBase64 =
  "FAACAAAACAAAAHRva2VuX2lkFAACAAAACAAAAGNvbnRyYWN0DAIAAABpZB0ABwAAAGFkZHJlc3ML";
export const balanceOfDepositedResponseSchemaBase64 = "GyUAAAA=";
export const balanceOfFrozenErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const balanceOfFrozenRequestSchemaBase64 =
  "FAACAAAABQAAAG93bmVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAYAAAB0b2tlbnMQAh0A";
export const balanceOfFrozenResponseSchemaBase64 =
  "FAABAAAABgAAAHRva2VucxACGyUAAAA=";
export const balanceOfUnFrozenErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const balanceOfUnFrozenRequestSchemaBase64 =
  "FAACAAAABQAAAG93bmVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAYAAAB0b2tlbnMQAh0A";
export const balanceOfUnFrozenResponseSchemaBase64 =
  "FAABAAAABgAAAHRva2VucxACGyUAAAA=";
export const burnErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const burnRequestSchemaBase64 =
  "EAEUAAMAAAAIAAAAdG9rZW5faWQdAAYAAABhbW91bnQbJQAAAAUAAABvd25lchUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAw=";
export const complianceResponseSchemaBase64 = "DA==";
export const depositErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const depositRequestSchemaBase64 =
  "FAAEAAAACAAAAHRva2VuX2lkHQAGAAAAYW1vdW50GyUAAAAEAAAAZnJvbRUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwEAAAAZGF0YR0B";
export const forcedTransferErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const forcedTransferRequestSchemaBase64 =
  "EAEUAAUAAAAIAAAAdG9rZW5faWQdAAYAAABhbW91bnQbJQAAAAQAAABmcm9tFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAIAAAB0bxUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAgAAAAwWAQQAAABkYXRhHQE=";
export const freezeErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const freezeRequestSchemaBase64 =
  "FAACAAAABQAAAG93bmVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAYAAAB0b2tlbnMQAhQAAgAAAAgAAAB0b2tlbl9pZB0ADAAAAHRva2VuX2Ftb3VudBslAAAA";
export const identityRegistryResponseSchemaBase64 = "DA==";
export const isAgentErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const isAgentRequestSchemaBase64 =
  "FQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADA==";
export const isAgentResponseSchemaBase64 = "AQ==";
export const isPausedErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const isPausedRequestSchemaBase64 = "FAABAAAABgAAAHRva2VucxACHQA=";
export const isPausedResponseSchemaBase64 = "FAABAAAABgAAAHRva2VucxACAQ==";
export const mintErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const mintRequestSchemaBase64 =
  "FAAEAAAAEgAAAGRlcG9zaXRlZF90b2tlbl9pZBQAAgAAAAgAAABjb250cmFjdAwCAAAAaWQdABUAAABkZXBvc2l0ZWRfdG9rZW5fb3duZXILEAAAAGRlcG9zaXRlZF9hbW91bnQbJQAAAAUAAABvd25lchUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAgAAAAwWAQ==";
export const operatorOfErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const operatorOfRequestSchemaBase64 =
  "EAEUAAIAAAAFAAAAb3duZXIVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMBwAAAGFkZHJlc3MVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM";
export const operatorOfResponseSchemaBase64 = "EAEB";
export const pauseErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const pauseRequestSchemaBase64 = "FAABAAAABgAAAHRva2VucxACHQA=";
export const recoverErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const recoverRequestSchemaBase64 =
  "FAACAAAADAAAAGxvc3RfYWNjb3VudBUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwLAAAAbmV3X2FjY291bnQVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM";
export const recoveryAddressErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const recoveryAddressRequestSchemaBase64 =
  "FQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADA==";
export const recoveryAddressResponseSchemaBase64 =
  "FQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAAFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADA==";
export const removeAgentErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const removeAgentRequestSchemaBase64 =
  "FQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADA==";
export const setComplianceErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const setComplianceRequestSchemaBase64 = "DA==";
export const setIdentityRegistryErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const setIdentityRegistryRequestSchemaBase64 = "DA==";
export const supportsErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const supportsRequestSchemaBase64 = "EAEWAA==";
export const supportsResponseSchemaBase64 =
  "EAEVAwAAAAkAAABOb1N1cHBvcnQCBwAAAFN1cHBvcnQCCQAAAFN1cHBvcnRCeQEBAAAAEAAM";
export const tokenMetadataErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const tokenMetadataRequestSchemaBase64 = "EAEdAA==";
export const tokenMetadataResponseSchemaBase64 =
  "EAEUAAIAAAADAAAAdXJsFgEEAAAAaGFzaBUCAAAABAAAAE5vbmUCBAAAAFNvbWUBAQAAAB4gAAAA";
export const transferErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const transferRequestSchemaBase64 =
  "EAEUAAUAAAAIAAAAdG9rZW5faWQdAAYAAABhbW91bnQbJQAAAAQAAABmcm9tFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAIAAAB0bxUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAgAAAAwWAQQAAABkYXRhHQE=";
export const unFreezeErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const unFreezeRequestSchemaBase64 =
  "FAACAAAABQAAAG93bmVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAYAAAB0b2tlbnMQAhQAAgAAAAgAAAB0b2tlbl9pZB0ADAAAAHRva2VuX2Ftb3VudBslAAAA";
export const unPauseErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const unPauseRequestSchemaBase64 = "FAABAAAABgAAAHRva2VucxACHQA=";
export const updateOperatorErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const updateOperatorRequestSchemaBase64 =
  "EAEUAAIAAAAGAAAAdXBkYXRlFQIAAAAGAAAAUmVtb3ZlAgMAAABBZGQCCAAAAG9wZXJhdG9yFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADA==";
export const withdrawErrorSchemaBase64 =
  "FRUAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCCgAAAFBhcnNlRXJyb3ICCAAAAExvZ0Vycm9yAhIAAABVblZlcmlmaWVkSWRlbnRpdHkCEwAAAEluQ29tcGxpYW50VHJhbnNmZXICDwAAAENvbXBsaWFuY2VFcnJvcgIRAAAAQ2FsbENvbnRyYWN0RXJyb3ICCwAAAFBhdXNlZFRva2VuAg0AAABJbnZhbGlkQW1vdW50Ag4AAABJbnZhbGlkQWRkcmVzcwISAAAAQWdlbnRBbHJlYWR5RXhpc3RzAg0AAABBZ2VudE5vdEZvdW5kAgsAAABPbmx5QWNjb3VudAISAAAASW52YWxpZERlcG9zaXREYXRhAhEAAABDaXMyV2l0aGRyYXdFcnJvcgIUAAAASW5zdWZmaWNpZW50RGVwb3NpdHMCDAAAAE5vdERlcG9zaXRlZAIaAAAASW5zdWZmaWNpZW50RnJhY3Rpb25hbGl6ZWQCFAAAAEludmFsaWRGcmFjdGlvbnNSYXRlAg==";
export const withdrawRequestSchemaBase64 =
  "FAADAAAACAAAAHRva2VuX2lkFAACAAAACAAAAGNvbnRyYWN0DAIAAABpZB0ABQAAAG93bmVyCwYAAABhbW91bnQbJQAAAA==";
export const eventSchemaBase64 =
  "HxAAAADwCQAAAERlcG9zaXRlZAEBAAAAFAADAAAACAAAAHRva2VuX2lkFAACAAAACAAAAGNvbnRyYWN0DAIAAABpZB0ABQAAAG93bmVyCwYAAABhbW91bnQbJQAAAPEIAAAAV2l0aGRyYXcBAQAAABQAAwAAAAgAAAB0b2tlbl9pZBQAAgAAAAgAAABjb250cmFjdAwCAAAAaWQdAAUAAABvd25lcgsGAAAAYW1vdW50GyUAAADyCQAAAFJlY292ZXJlZAEBAAAAFAACAAAADAAAAGxvc3RfYWNjb3VudBUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwLAAAAbmV3X2FjY291bnQVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM8xUAAABJZGVudGl0eVJlZ2lzdHJ5QWRkZWQBAQAAAAz0DwAAAENvbXBsaWFuY2VBZGRlZAEBAAAADPUIAAAAVW5QYXVzZWQBAQAAABQAAQAAAAgAAAB0b2tlbl9pZB0A9gYAAABQYXVzZWQBAQAAABQAAQAAAAgAAAB0b2tlbl9pZB0A9wsAAABUb2tlbkZyb3plbgEBAAAAFAADAAAACAAAAHRva2VuX2lkHQAGAAAAYW1vdW50GyUAAAAHAAAAYWRkcmVzcxUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAz4DQAAAFRva2VuVW5Gcm96ZW4BAQAAABQAAwAAAAgAAAB0b2tlbl9pZB0ABgAAAGFtb3VudBslAAAABwAAAGFkZHJlc3MVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM+QwAAABBZ2VudFJlbW92ZWQBAQAAABQAAQAAAAUAAABhZ2VudBUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAz6CgAAAEFnZW50QWRkZWQBAQAAABQAAQAAAAUAAABhZ2VudBUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAz7DQAAAFRva2VuTWV0YWRhdGEAAgAAAAgAAAB0b2tlbl9pZB0ADAAAAG1ldGFkYXRhX3VybBQAAgAAAAMAAAB1cmwWAQQAAABoYXNoFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAAHiAAAAD8DgAAAFVwZGF0ZU9wZXJhdG9yAAMAAAAGAAAAdXBkYXRlFQIAAAAGAAAAUmVtb3ZlAgMAAABBZGQCBQAAAG93bmVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAgAAABvcGVyYXRvchUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAz9BAAAAEJ1cm4AAwAAAAgAAAB0b2tlbl9pZB0ABgAAAGFtb3VudBslAAAABQAAAG93bmVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADP4EAAAATWludAADAAAACAAAAHRva2VuX2lkHQAGAAAAYW1vdW50GyUAAAAFAAAAb3duZXIVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM/wgAAABUcmFuc2ZlcgAEAAAACAAAAHRva2VuX2lkHQAGAAAAYW1vdW50GyUAAAAEAAAAZnJvbRUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwCAAAAdG8VAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM";
export const ENTRYPOINTS = {
  addAgent: EntrypointName.fromString("addAgent"),
  addTokens: EntrypointName.fromString("addTokens"),
  agents: EntrypointName.fromString("agents"),
  balanceOf: EntrypointName.fromString("balanceOf"),
  balanceOfDeposited: EntrypointName.fromString("balanceOfDeposited"),
  balanceOfFrozen: EntrypointName.fromString("balanceOfFrozen"),
  balanceOfUnFrozen: EntrypointName.fromString("balanceOfUnFrozen"),
  burn: EntrypointName.fromString("burn"),
  compliance: EntrypointName.fromString("compliance"),
  deposit: EntrypointName.fromString("deposit"),
  forcedTransfer: EntrypointName.fromString("forcedTransfer"),
  freeze: EntrypointName.fromString("freeze"),
  identityRegistry: EntrypointName.fromString("identityRegistry"),
  isAgent: EntrypointName.fromString("isAgent"),
  isPaused: EntrypointName.fromString("isPaused"),
  mint: EntrypointName.fromString("mint"),
  operatorOf: EntrypointName.fromString("operatorOf"),
  pause: EntrypointName.fromString("pause"),
  recover: EntrypointName.fromString("recover"),
  recoveryAddress: EntrypointName.fromString("recoveryAddress"),
  removeAgent: EntrypointName.fromString("removeAgent"),
  setCompliance: EntrypointName.fromString("setCompliance"),
  setIdentityRegistry: EntrypointName.fromString("setIdentityRegistry"),
  supports: EntrypointName.fromString("supports"),
  tokenMetadata: EntrypointName.fromString("tokenMetadata"),
  transfer: EntrypointName.fromString("transfer"),
  unFreeze: EntrypointName.fromString("unFreeze"),
  unPause: EntrypointName.fromString("unPause"),
  updateOperator: EntrypointName.fromString("updateOperator"),
  withdraw: EntrypointName.fromString("withdraw"),
};
export const ENTRYPOINT_DISPLAY_NAMES = {
  addAgent: "Add Agent",
  addTokens: "Add Tokens",
  agents: "Agents",
  balanceOf: "Balance Of",
  balanceOfDeposited: "Balance Of Deposited",
  balanceOfFrozen: "Balance Of Frozen",
  balanceOfUnFrozen: "Balance Of Un Frozen",
  burn: "Burn",
  compliance: "Compliance",
  deposit: "Deposit",
  forcedTransfer: "Forced Transfer",
  freeze: "Freeze",
  identityRegistry: "Identity Registry",
  isAgent: "Is Agent",
  isPaused: "Is Paused",
  mint: "Mint",
  operatorOf: "Operator Of",
  pause: "Pause",
  recover: "Recover",
  recoveryAddress: "Recovery Address",
  removeAgent: "Remove Agent",
  setCompliance: "Set Compliance",
  setIdentityRegistry: "Set Identity Registry",
  supports: "Supports",
  tokenMetadata: "Token Metadata",
  transfer: "Transfer",
  unFreeze: "Un Freeze",
  unPause: "Un Pause",
  updateOperator: "Update Operator",
  withdraw: "Withdraw",
};
export const rwaSecuritySft = {
  init: (moduleReference, contractName) =>
    new InitMethod(
      ModuleReference.fromHexString(moduleReference),
      ContractName.fromString(contractName),
      initRequestSchemaBase64
    ),
  // addAgent: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("addAgent"),
  //   addAgentRequestSchemaBase64,
  //   undefined,
  //   addAgentErrorSchemaBase64
  // ),
  // addTokens: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("addTokens"),
  //   addTokensRequestSchemaBase64,
  //   undefined,
  //   addTokensErrorSchemaBase64
  // ),
  // agents: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("agents"),
  //   undefined,
  //   agentsResponseSchemaBase64,
  //   agentsErrorSchemaBase64
  // ),
  // balanceOf: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("balanceOf"),
  //   balanceOfRequestSchemaBase64,
  //   balanceOfResponseSchemaBase64,
  //   balanceOfErrorSchemaBase64
  // ),
  // balanceOfDeposited: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("balanceOfDeposited"),
  //   balanceOfDepositedRequestSchemaBase64,
  //   balanceOfDepositedResponseSchemaBase64,
  //   balanceOfDepositedErrorSchemaBase64
  // ),
  // balanceOfFrozen: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("balanceOfFrozen"),
  //   balanceOfFrozenRequestSchemaBase64,
  //   balanceOfFrozenResponseSchemaBase64,
  //   balanceOfFrozenErrorSchemaBase64
  // ),
  // balanceOfUnFrozen: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("balanceOfUnFrozen"),
  //   balanceOfUnFrozenRequestSchemaBase64,
  //   balanceOfUnFrozenResponseSchemaBase64,
  //   balanceOfUnFrozenErrorSchemaBase64
  // ),
  // burn: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("burn"),
  //   burnRequestSchemaBase64,
  //   undefined,
  //   burnErrorSchemaBase64
  // ),
  // compliance: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("compliance"),
  //   undefined,
  //   complianceResponseSchemaBase64
  // ),
  // deposit: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("deposit"),
  //   depositRequestSchemaBase64,
  //   undefined,
  //   depositErrorSchemaBase64
  // ),
  // forcedTransfer: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("forcedTransfer"),
  //   forcedTransferRequestSchemaBase64,
  //   undefined,
  //   forcedTransferErrorSchemaBase64
  // ),
  // freeze: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("freeze"),
  //   freezeRequestSchemaBase64,
  //   undefined,
  //   freezeErrorSchemaBase64
  // ),
  // identityRegistry: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("identityRegistry"),
  //   undefined,
  //   identityRegistryResponseSchemaBase64
  // ),
  // isAgent: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("isAgent"),
  //   isAgentRequestSchemaBase64,
  //   isAgentResponseSchemaBase64,
  //   isAgentErrorSchemaBase64
  // ),
  // isPaused: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("isPaused"),
  //   isPausedRequestSchemaBase64,
  //   isPausedResponseSchemaBase64,
  //   isPausedErrorSchemaBase64
  // ),
  // mint: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("mint"),
  //   mintRequestSchemaBase64,
  //   undefined,
  //   mintErrorSchemaBase64
  // ),
  // operatorOf: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("operatorOf"),
  //   operatorOfRequestSchemaBase64,
  //   operatorOfResponseSchemaBase64,
  //   operatorOfErrorSchemaBase64
  // ),
  // pause: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("pause"),
  //   pauseRequestSchemaBase64,
  //   undefined,
  //   pauseErrorSchemaBase64
  // ),
  // recover: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("recover"),
  //   recoverRequestSchemaBase64,
  //   undefined,
  //   recoverErrorSchemaBase64
  // ),
  // recoveryAddress: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("recoveryAddress"),
  //   recoveryAddressRequestSchemaBase64,
  //   recoveryAddressResponseSchemaBase64,
  //   recoveryAddressErrorSchemaBase64
  // ),
  // removeAgent: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("removeAgent"),
  //   removeAgentRequestSchemaBase64,
  //   undefined,
  //   removeAgentErrorSchemaBase64
  // ),
  // setCompliance: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("setCompliance"),
  //   setComplianceRequestSchemaBase64,
  //   undefined,
  //   setComplianceErrorSchemaBase64
  // ),
  // setIdentityRegistry: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("setIdentityRegistry"),
  //   setIdentityRegistryRequestSchemaBase64,
  //   undefined,
  //   setIdentityRegistryErrorSchemaBase64
  // ),
  // supports: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("supports"),
  //   supportsRequestSchemaBase64,
  //   supportsResponseSchemaBase64,
  //   supportsErrorSchemaBase64
  // ),
  // tokenMetadata: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("tokenMetadata"),
  //   tokenMetadataRequestSchemaBase64,
  //   tokenMetadataResponseSchemaBase64,
  //   tokenMetadataErrorSchemaBase64
  // ),
  // transfer: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("transfer"),
  //   transferRequestSchemaBase64,
  //   undefined,
  //   transferErrorSchemaBase64
  // ),
  // unFreeze: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("unFreeze"),
  //   unFreezeRequestSchemaBase64,
  //   undefined,
  //   unFreezeErrorSchemaBase64
  // ),
  // unPause: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("unPause"),
  //   unPauseRequestSchemaBase64,
  //   undefined,
  //   unPauseErrorSchemaBase64
  // ),
  // updateOperator: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("updateOperator"),
  //   updateOperatorRequestSchemaBase64,
  //   undefined,
  //   updateOperatorErrorSchemaBase64
  // ),
  // withdraw: new ReceiveMethod(
  //   ContractName.fromString("rwa_security_sft"),
  //   EntrypointName.fromString("withdraw"),
  //   withdrawRequestSchemaBase64,
  //   undefined,
  //   withdrawErrorSchemaBase64
  // ),
  deserializeEvent: (event) => {
    return ContractEvent.parseWithSchemaTypeBase64(event, eventSchemaBase64);
  },
};
export default rwaSecuritySft;
