import { TypeDocument } from "../enums/TypeDocument";

export type DocumentJoint = {
  document: File;
  note: string;
  type: TypeDocument;
};
