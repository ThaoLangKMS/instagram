import { MediaType } from "./MediaType";
import { UserType } from "./UserType";

export type PostType = {
  id: number;
  medias: MediaType[];
  title: string;
  user: UserType;
  numLikes: number;
  numComments: number;
};
