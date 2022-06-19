import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PhotoMetaData = {
  readOnlyFields: 'updatedAt';
}

export declare class Photo {
  readonly id: string;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly caption?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Photo, PhotoMetaData>);
  static copyOf(source: Photo, mutator: (draft: MutableModel<Photo, PhotoMetaData>) => MutableModel<Photo, PhotoMetaData> | void): Photo;
}